
var url = "PRODUCTOS\\excel\\index_sections.xlsx";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /* convert data to binary string */
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");

  /* Call XLSX */
  var workbook = XLSX.read(bstr, {type:"binary"});

  /* DO SOMETHING WITH workbook HERE */
  var first_sheet_name = workbook.SheetNames[0]; /*hoja de excel*/
  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];

  var datos = XLSX.utils.sheet_to_json(worksheet,{raw:true})
  
  
  for (let i = 0; i < datos.length; i++) {
    
    $('.categories_conteiner').append(`
        <div class="categories_conteiner_item shadow-lg">
            <div class="categories_conteiner_item-img">
                <img src="${datos[i].img}" alt="bomba_de_agua"> 
            </div>
            <div class="categories_conteiner_item-name">
                <span class="catalogName">${datos[i].name}</span>
            </div>
        </div>
    `);
  }


  const categorySelector = document.querySelectorAll('div.categories_conteiner_item');
  
 

  categorySelector.forEach((div,index) => div.addEventListener('click', ()=> {

    const categorySelectorName = Array.from(document.querySelectorAll('.catalogName'));
    sessionStorage.setItem('categoryName', categorySelectorName[index].innerHTML);

    console.log(categorySelectorName)

   
    function getExcel (index){
        switch (index) {
            case 0:
                return "PRODUCTOS\\excel\\bombas_datos.xlsx";
                break;
            case 1:
                return "PRODUCTOS\\excel\\tanques_datos.xlsx";
                break;
            case 2:
                return "PRODUCTOS\\excel\\termotanques_datos.xlsx";
                break;
            case 3:
                return "PRODUCTOS\\excel\\griferias_datos.xlsx";
                break;
            case 4:
                return "PRODUCTOS\\excel\\baños_datos.xlsx";
                break;
            case 5:
                return "PRODUCTOS\\excel\\sistemas_datos.xlsx";
                break;           
        }
    };

    sessionStorage.setItem('excelUrl', getExcel(index));
    sessionStorage.setItem('categoryExcel', index);

    location.href="categories.html"  
    
}));

}
oReq.send();






