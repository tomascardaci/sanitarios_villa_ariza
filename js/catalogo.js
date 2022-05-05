let getExcelUrl = sessionStorage.getItem('excelUrl');
let catalogoHojaExcel = sessionStorage.getItem('hojaExcel');
let catalogName = sessionStorage.getItem('catalogName');
let categoryExcel = sessionStorage.getItem('categoryExcel');
let productID = sessionStorage.getItem('productID')

/* set up XMLHttpRequest */
var url = getExcelUrl;
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
  var first_sheet_name = workbook.SheetNames[catalogoHojaExcel]; /*hoja de excel*/
  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];

  var datos = XLSX.utils.sheet_to_json(worksheet,{raw:true})
  console.log(datos)

  


  $('.banner_conteiner_text').html(catalogName.toUpperCase());
  

  for (let i = 0; i < datos.length; i++) {

      $('.product_conteiner').append(`
      <a href="product.html"><div class="product_conteiner_item">
      <div class="product_conteiner_item-img shadow">
        <img src="${datos[i].img1}">
      </div>
      <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name}</span></div>
    </div></a>`);
    }
  };

  const productSelector = document.querySelectorAll('div.product_conteiner_item');

  productSelector.forEach((div,index) => div.addEventListener('click', ()=> {

    var catalogoProductID = index;

    sessionStorage.setItem('hojaExcel', catalogoHojaExcel);
    sessionStorage.setItem('productID', catalogoProductID);
    
  }))






oReq.send();