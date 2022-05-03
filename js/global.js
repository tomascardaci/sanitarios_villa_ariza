$(document).ready(function() {
    let setCartCount = sessionStorage.getItem('cartCount');
    if (sessionStorage.getItem('cartCount') == null){
        $('.menu_conteiner_list-cartCounter').css("background-color","#2d4b55");
        $('.menu_conteiner_list-cartCounter').html(0);
    } else{
        $('.menu_conteiner_list-cartCounter').css("background-color","red");
        $('.menu_conteiner_list-cartCounter').html(setCartCount);

    }
});