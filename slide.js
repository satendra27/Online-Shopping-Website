
  

    // const product=[
    //   {
    //     id:0;
    //     image:'./phone.avg',
    //     title:'iphone',
    //     price:120,
    //   },
    //   {
    //     id:1;
    //     image:'./phone.avg',
    //     title:'iphone',
    //     price:120,
    //   },
    //   {
    //     id:2;
    //     image:'./phone.avg',
    //     title:'iphone',
    //     price:120,
    //   },
    //   {
    //     id:3;
    //     image:'./phone.avg',
    //     title:'iphone',
    //     price:120,
    //   }
    // ];
    // const catagories=[...new Set(product.map((itme)=>
    //   {return item}))]
    //   let i=0;
    //   document.getElementById('root').innerHTML=catagories.map((item))=>
    //   {
    //     var {image,title,price}=item;
    //     return(
    //       <div class='box'>
    //         <div class='img-box'>
    //           <img class='images' src=${image}></img>
    //         </div>
    //       </div>
    //     )
    //   }


    // cart.js
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function removeFromCart(product) {
  cart = cart.filter(item => item !== product);
  updateCart();
}

function updateCart() {
  // Update the cart display on all pages
  // For example, you could update a cart icon or display the number of items in the cart
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.innerText = cart.length.toString();
  }

  // You can also store the cart in localStorage to persist it across page refreshes
  localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      cartCount.innerText = cart.length.toString();
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Load the cart from localStorage on page load
  window.onload = function () {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
      updateCart();
    }
  };
  


