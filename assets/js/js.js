// let http = new XMLHttpRequest();
// http.open('get', 'data/products.json', true);
// http.send();
// http.onload = function(){
//    if(this.readyState == 4 && this.status == 200){
//       let products = JSON.parse(this.responseText);
//       let output = "";
//       for(let item of products){
//          output += `
//             <div class="product">
//                <img src="${item.image}" alt="${item.description}">
//                <p class="title">${item.title}</p>
//                <p class="description">${item.description}</p>
//                <p class="price">
//                   <span>${item.price}</span>
//                   <span>€</span>
//                </p>
//                <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
//             </div>
//          `;
//       }
//       document.querySelector(".products").innerHTML = output;
//    }
// }

$(document).ready(function(){
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    });
    $(document).ready(function(){
		$(".wish-icon i").click(function(){
			$(this).toggleClass("fa-heart fa-heart-o");
		});
	});	