
let getExcelUrl = sessionStorage.getItem('excelUrl');
let hojaExcel = sessionStorage.getItem('hojaExcel');
let productID = sessionStorage.getItem('productID');
let categoryExcel = sessionStorage.getItem('categoryExcel');
let getSelectedProductName = sessionStorage.getItem('productSelectedName');
let arrayCarrito = [];




$(document).ready(function() {
    let setCartCount = sessionStorage.getItem('cartCount');
    if (sessionStorage.getItem('cartCount') == null){
        $('.menu_conteiner_list-cartCounter').html(0);
    } else{
        $('.menu_conteiner_list-cartCounter').html(setCartCount);
    }
});

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
  var first_sheet_name = workbook.SheetNames[hojaExcel]; /*hoja de excel*/
  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];

  var datos = XLSX.utils.sheet_to_json(worksheet,{raw:true})  
  let getProductKeys = Object.keys(datos[productID]); 
  getProductKeys.forEach(element => checkEmptyElement(element));

  function checkEmptyElement(element){
    let categoryExcel = sessionStorage.getItem('categoryExcel');
    
    if(datos[productID][element] != "undefined" && datos[productID][element] != "null" && datos[productID][element] != "-"){
      checkElement(element,categoryExcel)

      function checkElement (element,categoryExcel){

        switch (element) {

          case "id":
          break;
            
          case "name":            
          $('.productInformationNameDescrption').append(`<h2>${getSelectedProductName}</h2>`);
          break;

          case "description":
          $('.productInformationNameDescrption').append(`<h3>${datos[productID][element]}</h3>`)
          break;

          case "img1":
            if(categoryExcel == 3){
              $('.carousel-inner').append(`<div class="carousel-item active"><img src="PRODUCTOS/griferias/img/${datos[productID].img1}" class="d-block w-100" alt="${datos[productID].name}"></div>`);
            }else{
              $('.carousel-inner').append(`<div class="carousel-item active"><img src="${datos[productID][element]}" class="d-block w-100" alt="${datos[productID].name}"></div>`);
              }; 
          break;

          case "img2":
            if(categoryExcel == 3){
              $('.carousel-inner').append(`<div class="carousel-item"><img src="PRODUCTOS/griferias/img/${datos[productID].img2}" class="d-block w-100" alt="${datos[productID].name}"></div>`);
            }else{
              $('.carousel-inner').append(`<div class="carousel-item"><img src="${datos[productID][element]}" class="d-block w-100" alt="${datos[productID].name}"></div>`);
              }; 
          break;

          case "img3":
            if(categoryExcel == 3){
              $('.carousel-inner').append(`<div class="carousel-item"><img src="PRODUCTOS/griferias/img/${datos[productID].img3}" class="d-block w-100" alt="${datos[productID].name}"></div>`);
            }else{
              $('.carousel-inner').append(`<div class="carousel-item"><img src="${datos[productID][element]}" class="d-block w-100" alt="${datos[productID].name}"></div>`);
              }; 
          break;

          case "brand":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Marca</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "model":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Modelo</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_presion":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Presión (m.c.a.)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_caudal":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Caudal (l/h)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_potencia":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Potencia (HP)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_tension":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Tensión (V)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_amperaje":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Amperaje (A)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_conexión":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Conexión</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "peso":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Peso</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "dimensiones":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Dimensiones (cm)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "garantia":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Garantía</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_alturamax":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Altura máxima (cm)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
            break;

          case "t_diametro":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Diámetro (cm)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "t_alturacono":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Altura del cono</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "t_salida":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Salida</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_valvula":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Valvula</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_electronivel":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Electronivel</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_dimensiones":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Dimensiones (cm)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;

          case "t_abastecimiento":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Abastecimiento</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 
            
          case "t_valvula":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Valvula</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;  
          
          case "t_boca":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Boca</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "t_capacidad":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Capacidad (L)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "t_capacidades":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Capacidad (L)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "t_energía":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Energía</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "t_duchas":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Duchas</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "t_dualcalefaccion":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Calefacción</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "t_consumo":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Consumo (kcal/h)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "t_recuperacion":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Recuperación (l/h)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "t_pesovacio":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Peso vacío (kg)</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "sku":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">SKU</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "color":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Color</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "line":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Linea</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "material":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Material</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "peso":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Peso</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break; 

          case "aplicacion":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Aplicación</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "t_agujeros":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Agujeros</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "t_material":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Material</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "t_funcionamiento":
          $('.productInformation_specifications').append(`<tr><td class="productInformation_specifications-left">Funcionamiento</td><td class="productInformation_specifications-right">${datos[productID][element]}</td></tr>`);
          break;
          
          case "ventajas":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Ventajas:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "motor":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Motor:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "construccion":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Construcción:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "conexiones":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Conexiones:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "caracteristicas":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Características:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "sistema":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Sistema:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "instalacion":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Instalación:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "especificaciones":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Especificaciones:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break; 

          case "componentes":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Componentes:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "beneficios":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Beneficios:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "funcionamiento":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Funcionamiento:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break; 

          case "mantenimiento":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Mantenimiento:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break; 

          case "accesorios":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break; 

          case "consumidor":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Consumidor:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break; 

          case "instalador":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Instalador:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "recomendaciones":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Recomendaciones:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "apto":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Apto:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "caudal":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Caudal:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break; 

          case "tech":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Tecnología:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break; 

          case "prestaciones":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Prestaciones:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "normas":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Normas:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break;
          
          case "garantía":
          $('.productInformation_detalles').append(`<h4 class="productInformation_section-secondary">Garantía:</h4><p class=" productInformation_text">${datos[productID][element]}</p>`);
          break; 




                     
        }
    }
  }else return;

  
    
  

 
  };

  $('#addToCartBtn').click(function() {
    let name = sessionStorage.getItem('productSelectedName');
    let img = datos[productID].img1;
    let category = categoryExcel;
    const productObject = {name: name, img: img, category: category ,count: 1};

    $('.menu_conteiner_list-cartCounter').css("background-color","red");
      if (sessionStorage.getItem('arrayCarrito') == null){
          arrayCarrito.push(productObject);
          sessionStorage.setItem('arrayCarrito', JSON.stringify(arrayCarrito));
          cartCount = 1
          sessionStorage.setItem('cartCount',(cartCount));
          $('.menu_conteiner_list-cartCounter').html(cartCount)

        } else{
            var getCarritoStorage = sessionStorage.getItem('arrayCarrito');
            var carritoStorageParse = JSON.parse(getCarritoStorage);
            if (carritoStorageParse.some(product => product.name === productObject.name))
            {
              const oldProduct = carritoStorageParse.find(product => product.name === productObject.name);
              carritoStorageParse[carritoStorageParse.indexOf(oldProduct)] = {...productObject, count: oldProduct.count + 1 };
            } else {
              carritoStorageParse.push(productObject);
            }
            sessionStorage.setItem('arrayCarrito', JSON.stringify(carritoStorageParse));
            let getCartCountJSON = sessionStorage.getItem('cartCount');
            let getCartCount = JSON.parse(getCartCountJSON) ;
            getCartCount++
            $('.menu_conteiner_list-cartCounter').html(getCartCount);
            sessionStorage.setItem('cartCount',getCartCount);    

        } 

        location.href="carrito.html" 
}); 

  


  

  







};


 




oReq.send();