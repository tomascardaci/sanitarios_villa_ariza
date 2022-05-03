
let getExcelUrl = sessionStorage.getItem('excelUrl')
let hojaExcel = sessionStorage.getItem('hojaExcel');
let productID = sessionStorage.getItem('productID');



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
   

  $('.productInformation_conteiner').append(`
  
    <div class="productInformation_principal">
    
      <div class="productNameImg">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${datos[productID].img1}" class="d-block w-100" alt="${datos[productID].name}">
          </div>
          <div class="carousel-item">
            <img src="${datos[productID].img2}" class="d-block w-100" alt="${datos[productID].name}">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div> 
      </div>
      
      <div class="productDescription shadow-lg">
        <h2>${datos[productID].name}</h2>
        <h3>${datos[productID].description}</h3>
        <hr>
        <div class="productInformation_addToCart">
          <button id="addToCartBtn">AÑADIR AL CARRITO</button>
        </div>
      </div>

    </div>
    
    <hr>

    <div class="productInformation_secondary">

        <section class="productInformation_section">Especificaciones</section>

            <table class="productInformation_specifications">

                <tr>
                    <td class="productInformation_specifications-left">Marca</td>
                    <td class="productInformation_specifications-right">${datos[productID].brand}</td>
                </tr>

                <tr>
                    <td class="productInformation_specifications-left">Modelo</td>
                    <td class="productInformation_specifications-right">${datos[productID].model}9</td>
                </tr>

                <tr>
                    <td class="productInformation_specifications-left">Presión (m. c. a.)</td>
                    <td class="productInformation_specifications-right">${datos[productID].t_presion}</td>
                </tr>
                
                <tr>
                    <td class="productInformation_specifications-left">Caudal (l/h)</td>
                    <td class="productInformation_specifications-right">${datos[productID].t_caudal}</td>
                </tr>

                <tr>
                    <td class="productInformation_specifications-left">Potencia (HP)</td>
                    <td class="productInformation_specifications-right">${datos[productID].t_potencia}</td>
                </tr>

                <tr>
                    <td class="productInformation_specifications-left">Tensión (V)</td>
                    <td class="productInformation_specifications-right">${datos[productID].t_tension}</td>
                </tr>

                <tr>
                    <td class="productInformation_specifications-left">I (A)</td>
                    <td class="productInformation_specifications-right">${datos[productID].t_amperaje}</td>
                </tr>

                <tr>
                    <td class="productInformation_specifications-left">Conexión</td>
                    <td class="productInformation_specifications-right">${datos[productID].t_conexion}</td>
                </tr>

                <tr>
                    <td class="productInformation_specifications-left">Peso</td>
                    <td class="productInformation_specifications-right">${datos[productID].peso}</td>
                </tr>

                <tr>
                    <td class="productInformation_specifications-left">Dimensiones</td>
                    <td class="productInformation_specifications-right">${datos[productID].dimensiones}</td>
                </tr>

            </table>

            
            <section class="productInformation_section">Ventajas</section>

            <p class=" productInformation_text">${datos[productID].ventajas}</p>

            
            <section class="productInformation_section">Características</section>

            <h4 class="productInformation_section-secondary">Motor:</h4>
            <p class=" productInformation_text">${datos[productID].motor}</p>


            <h4 class="productInformation_section-secondary">Construcción:</h4>
            <p class=" productInformation_text">${datos[productID].construccion}</p>

            
            <h4 class="productInformation_section-secondary">Conexiones:</h4>
            <p class=" productInformation_text">${datos[productID].conexiones}</p>


            <h4 class="productInformation_section-secondary">Detalles:</h4>
            <p class=" productInformation_text">${datos[productID].caracteristicas}</p>


            <h4 class="productInformation_section-secondary">Sistema:</h4>
            <p class=" productInformation_text">${datos[productID].sistema}</p>


            <h4 class="productInformation_section-secondary">instalación:</h4>
            <p class=" productInformation_text">${datos[productID].instalacion}</p>
        </div>
        
    `); 

  $('#addToCartBtn').click(function() {

    $('.menu_conteiner_list-cartCounter').css("background-color","red");
      if (sessionStorage.getItem('arrayCarrito') == null){
          arrayCarrito.push(datos[productID]);
          sessionStorage.setItem('arrayCarrito', JSON.stringify(arrayCarrito));
          cartCount = 1
          sessionStorage.setItem('cartCount',(cartCount));
          $('.menu_conteiner_list-cartCounter').html(cartCount)

        } else{
            var getCarritoStorage = sessionStorage.getItem('arrayCarrito');
            var carritoStorageParse = JSON.parse(getCarritoStorage);
            carritoStorageParse.push(datos[productID]);
            sessionStorage.setItem('arrayCarrito', JSON.stringify(carritoStorageParse));
            let getCartCountJSON = sessionStorage.getItem('cartCount');
            let getCartCount = JSON.parse(getCartCountJSON) ;
            getCartCount++
            $('.menu_conteiner_list-cartCounter').html(getCartCount);
            sessionStorage.setItem('cartCount',getCartCount);    

        } 
  });  

};




oReq.send();