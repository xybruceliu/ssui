$(document).ready(function() {
 
    $('.color-choose input').on('click', function() {
        var color = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + color + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });

var quantity = 0;

function add_to_cart(){
    var quantity = document.getElementById("add-to-cart-qty").value;
    quantity = parseInt(quantity) + parseInt(document.getElementById("cart_quantity").innerHTML) 
    document.getElementById("cart_quantity").innerHTML = quantity;
}
