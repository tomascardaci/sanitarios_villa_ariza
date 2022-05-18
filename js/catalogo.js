let getExcelUrl = sessionStorage.getItem('excelUrl');
let catalogoHojaExcel = sessionStorage.getItem('hojaExcel');
let catalogName = sessionStorage.getItem('catalogName');
let categoryExcel = sessionStorage.getItem('categoryExcel');

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

  $(document).ready(function(){

    $('.banner_conteiner_text').html(catalogName.toUpperCase());

    if(categoryExcel == 3){
      if(catalogoHojaExcel == 4){
        for (let i = 0; i < datos.length; i++) {

          $('.product_conteiner').append(`
            <div class="product_conteiner_item">
              <div class="product_conteiner_item-img shadow">
                <img src="PRODUCTOS/griferias/img/${datos[i].img1}">
              </div>
            <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name + " " + datos[i].brand + " " + datos[i].color + " " + datos[i].sku}</span></div>
          </div>`);
        };
      }else if(catalogoHojaExcel == 6){
        for (let i = 0; i < datos.length; i++) {

          $('.product_conteiner').append(`
            <div class="product_conteiner_item">
              <div class="product_conteiner_item-img shadow">
              <img src="PRODUCTOS/griferias/img/${datos[i].img1}">
              </div>
            <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name + " " + datos[i].category2 + " " + datos[i].sku}</span></div>
          </div>`);
        };
      }else if(catalogoHojaExcel == 7){
        for (let i = 0; i < datos.length; i++) {

          $('.product_conteiner').append(`
            <div class="product_conteiner_item">
              <div class="product_conteiner_item-img shadow">
              <img src="PRODUCTOS/griferias/img/${datos[i].img1}">
              </div>
            <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name + " " + datos[i].brand + " " + datos[i].sku}</span></div>
          </div>`);
        };
      }else if(catalogoHojaExcel == 8){
        for (let i = 0; i < datos.length; i++) {

          $('.product_conteiner').append(`
            <div class="product_conteiner_item">
              <div class="product_conteiner_item-img shadow">
              <img src="PRODUCTOS/griferias/img/${datos[i].img1}">
              </div>
            <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name + " " + datos[i].brand + " " + datos[i].category2 + " " + datos[i].sku}</span></div>
          </div>`);
        };
      }else if(catalogoHojaExcel == 9){
        for (let i = 0; i < datos.length; i++) {

          $('.product_conteiner').append(`
            <div class="product_conteiner_item">
              <div class="product_conteiner_item-img shadow">
              <img src="PRODUCTOS/griferias/img/${datos[i].img1}">
              </div>
            <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name + " " + datos[i].brand + " " + datos[i].line + " " + datos[i].color + " " + datos[i].sku}</span></div>
          </div>`);
        };
      }else if(catalogoHojaExcel == 10){
        for (let i = 0; i < datos.length; i++) {

          $('.product_conteiner').append(`
            <div class="product_conteiner_item">
              <div class="product_conteiner_item-img shadow">
              <img src="PRODUCTOS/griferias/img/${datos[i].img1}">
              </div>
            <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name + " " + datos[i].brand + " " + datos[i].aplication + " " + datos[i].color + " " + datos[i].sku}</span></div>
          </div>`);
        };
      }else{
        for (let i = 0; i < datos.length; i++) {

          $('.product_conteiner').append(`
            <div class="product_conteiner_item">
              <div class="product_conteiner_item-img shadow">
              <img src="PRODUCTOS/griferias/img/${datos[i].img1}">
              </div>
            <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name + " " + datos[i].brand + " " + datos[i].line + " " + datos[i].category3 + " " + datos[i].color + " " + datos[i].sku}</span></div>
          </div>`);
        };
      }

    }else if(categoryExcel == 4){

      for (let i = 0; i < datos.length; i++) {

        $('.product_conteiner').append(`
          <div class="product_conteiner_item">
            <div class="product_conteiner_item-img shadow">
              <img src="${datos[i].img1}">
            </div>
          <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name + " " + datos[i].brand + " " + datos[i].line + " " + datos[i].model}</span></div>
        </div>`);
      };
    } else{
      for (let i = 0; i < datos.length; i++) {

        $('.product_conteiner').append(`
          <div class="product_conteiner_item">
            <div class="product_conteiner_item-img shadow">
              <img src="${datos[i].img1}">
            </div>
          <div class="product_conteiner_item-description"><span class="product_conteiner_item-text">${datos[i].name}</span></div>
        </div>`);
      };
    };
    

    

    let getProductsIndex = document.querySelectorAll("div.product_conteiner_item");
    getProductsIndex.forEach((div,index) => div.addEventListener('click', ()=> {

      let catalogoProductID = index;
      let catalogoProductName = getProductsIndex[index].querySelector(".product_conteiner_item-text").innerHTML;
      
      sessionStorage.setItem('hojaExcel', catalogoHojaExcel);
      sessionStorage.setItem('productID', catalogoProductID);
      sessionStorage.setItem('productSelectedName', catalogoProductName);

      if(categoryExcel != 5){
        location.href="product.html"
      };

    }));
   
  });

   


 
  

  
};

 

  






oReq.send();