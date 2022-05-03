let getCategoryName = sessionStorage.getItem('categoryName');
let getExcelSheet = sessionStorage.getItem('categoryExcel');

var url = "PRODUCTOS/excel/categories_sections.xlsx";
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
  var first_sheet_name = workbook.SheetNames[getExcelSheet]; /*hoja de excel*/
  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];

  var datos = XLSX.utils.sheet_to_json(worksheet,{raw:true})
  console.log(datos)
  
  $('.banner_conteiner_text').html(getCategoryName.toUpperCase());
  
  for (let i = 0; i < datos.length; i++) {
    
    $('.categories_conteiner').append(`
        <div class="categories_conteiner_item shadow">
            <div class="categories_conteiner_item-img">
                <div class="categories_conteiner_item-effect">
                    <span>CONOCER MÁS</span>
                </div>
                <img src="${datos[i].img}"> 
            </div>
            <div class="categories_conteiner_item-name">
                <span class="catalogName">${datos[i].name}</span>
            </div>
        </div>
    `);
  }

  const productSelector = document.querySelectorAll('div.categories_conteiner_item');
  const productSelectorName = Array.from(document.querySelectorAll('.catalogName'));
  
  productSelector.forEach((div,index) => div.addEventListener('click', ()=> {
  
      sessionStorage.setItem('hojaExcel', index)
      sessionStorage.setItem('catalogName', productSelectorName[index].innerHTML)
  
      location.href="catalogo.html"  
      
  }));



}
oReq.send();










