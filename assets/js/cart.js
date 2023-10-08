
var cartVisible = false;

// getting the site ready by using  DOMContentLoaded function
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  // declearing the delete a product function
  var buttonseliminateItem = document.getElementsByClassName("btn-eliminate");
  for (var i = 0; i < buttonseliminateItem.length; i++) {
    var button = buttonseliminateItem[i];
    button.addEventListener("click", eliminateItemcart);
  }

  //declearing the increment inputblock function
  var buttonsincrementinputblock = document.getElementsByClassName(
    "increment-inputblock"
  );
  for (var i = 0; i < buttonsincrementinputblock.length; i++) {
    var button = buttonsincrementinputblock[i];
    button.addEventListener("click", incrementinputblock);
  }

  //Declearing the decrement inputblock function
  var buttonsdecrementinputblock = document.getElementsByClassName(
    "decrement-inputblock"
  );
  for (var i = 0; i < buttonsdecrementinputblock.length; i++) {
    var button = buttonsdecrementinputblock[i];
    button.addEventListener("click", decrementinputblock);
  }
  // Clearing the cart list

  var buttonsAgregarAlcart = document.getElementsByClassName("button-item");
  for (var i = 0; i < buttonsAgregarAlcart.length; i++) {
    var button = buttonsAgregarAlcart[i];
    button.addEventListener("click", addAllItemsToCart);
  }

  //================================================================
  document
    .getElementsByClassName("btn-clear")[0]
    .addEventListener("click", clearClicked);
}
// =================================================================
function clearClicked() {
  // alert("Your cart has been cleared");
  sureClear.style.display = "none"
  //Elimino todos los elmentos del cart
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  var aniSucClear = document.querySelector(".aniSucClear")
  aniSucClear.classList.add("active")
  setTimeout(() => {
    aniSucClear.classList.remove("active")
  },4800 );
  actualTotalcart();
  AddStyleToCart();
}
// =================================================================
function addAllItemsToCart(event) {
  var button = event.target;
  var item = button.parentElement;
  var title = item.getElementsByClassName("title-item")[0].innerText;
  var price = item.getElementsByClassName("price-item")[0].innerText;
  var imagenSrc = item.getElementsByClassName("img-item")[0].src;
  // console.log(imagenSrc);
  AllCartItemAguments(title, price, imagenSrc);
  
  var AddedOne = document.querySelector(".AddedOne")
  AddedOne.classList.add("active")
  setTimeout(() => {
    AddedOne.classList.remove("active")
  },1000 );



  // var faEye = item.getElementsByClassName("tab-Veiwlinks")[0]
  // faEye.classList.add("active")

  cartVisibility();
}


//   Funcion cart toggler button
function cartVisibility() {
  cartVisible = true;
  // var cart = document.getElementsByClassName("cart")[0];
  // cart.style.marginRight = "0";
  // cart.style.opacity = "1";

  
  // var items = document.getElementsByClassName("container-items")[0];
  // items.style.width = "60%";
}

//Adding product in to the cart
function AllCartItemAguments(title, price, imagenSrc) {
  var item = document.createElement("div");
  item.classList.add = "item";
  var itemscart = document.getElementsByClassName("cart-items")[0];



  // Checking if a product is already added to the cart
  var numOfItemsInCart = itemscart.getElementsByClassName("cart-item-title");
  for (var i = 0; i < numOfItemsInCart.length; i++) {
    if (numOfItemsInCart[i].innerText == title) {
      // alert("You already have this " + title + " in your cart.");

     let AlertExist = document.querySelector("#AlertExist")
     let setd = document.querySelector(".setd")
     AlertExist.classList.add("AlertExistAct")
     setd.innerHTML = `<img src="${imagenSrc}">
     <h1 class="display"><b>${title} </b> already exist in your cart. </h1>
     <p>you can't add it again.</p>`
     AddedOne.classList.remove("active")

    //  item.getElementsByClassName("tab-Veiwlinks")[0]
    //  faEye.classList.remove("active")
     
      return;
    } 
  }
  var itemcartContenido = `
        <div class="cart-item display">
            <img src="${imagenSrc}" alt="">
            <div class="cart-item-detalles display">
                <span class="cart-item-title">${title}</span>
                <div class="selector-inputblock display">
                    <i class="fa-solid fa-minus decrement-inputblock display"></i>
                    <input type="text" value="1" class="cart-item-inputblock" disabled>
                    <i class="fa-solid fa-plus increment-inputblock display"></i>
                </div>
                <div class="prices display">
                <span class="spnt">Cost: </span>
                <span class="cart-item-price"> ${price}</span><b class="colorbrown">USD</b>
                </div>
            </div>
            <button class="btn-eliminate">
                Remove Car
            </button>
        </div>
    `;
  item.innerHTML = itemcartContenido;
  itemscart.append(item);
//   console.log(itemcartContenido[0].length);


  item
    .getElementsByClassName("btn-eliminate")[0]
    .addEventListener("click", eliminateItemcart);

  var buttondecrementinputblock = item.getElementsByClassName(
    "decrement-inputblock"
  )[0];
  buttondecrementinputblock.addEventListener("click", decrementinputblock);

  //Updating the input counter holder
  var buttonincrementinputblock = item.getElementsByClassName(
    "increment-inputblock"
  )[0];
  buttonincrementinputblock.addEventListener("click", incrementinputblock);

  actualTotalcart();
}
//  incrementing the product quantity counter
function incrementinputblock(event) {
  var buttonClicked = event.target;
  var selector = buttonClicked.parentElement;
  console.log(selector.getElementsByClassName("cart-item-inputblock")[0].value);
  var inputblockActual = selector.getElementsByClassName(
    "cart-item-inputblock"
  )[0].value;
  inputblockActual++;
  selector.getElementsByClassName("cart-item-inputblock")[0].value =
    inputblockActual;
  actualTotalcart();
}
//  decrementing the product quantity counter
function decrementinputblock(event) {
  var buttonClicked = event.target;
  var selector = buttonClicked.parentElement;
  console.log(selector.getElementsByClassName("cart-item-inputblock")[0].value);
  var inputblockActual = selector.getElementsByClassName(
    "cart-item-inputblock"
  )[0].value;
  inputblockActual--;
  if (inputblockActual >= 1) {
    selector.getElementsByClassName("cart-item-inputblock")[0].value =
      inputblockActual;
    actualTotalcart();
  }
}
//removing a product from the cart            ===== 
function eliminateItemcart(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  actualTotalcart();
  AddStyleToCart();


  var RemoveOne = document.querySelector(".RemoveOne")
  RemoveOne.classList.add("active")
  // aniSucClear.classList.remove("active")
  setTimeout(() => {
    RemoveOne.classList.remove("active")
  },1000 );
  
}
// adding the css style for cart list appearence
function AddStyleToCart() {
  var cartItems = document.getElementsByClassName("cart-items")[0];
  if (cartItems.childElementCount == 0) {
    // var cart = document.getElementsByClassName("cart")[0];
    // cart.style.marginRight = "-100%";
    // cart.style.opacity = "0";
    // cartVisible = false;
    // cartItems.innerHTML = "redd"/

    // var items = document.getElementsByClassName("container-items")[0];
   
  }
}

// cart
// getting the length of the cart items
function actualTotalcart() {
  //seleccionamos el container cart
  var cartcontainer = document.getElementsByClassName("cart")[0];
  var cartItems = cartcontainer.getElementsByClassName("cart-item");
  var total = 0;
    console.log(cartItems.length);

    let dean = document.querySelectorAll("#CartLenght");

dean.forEach((ProNameUse) => {
  let textchange = cartItems.length;
  ProNameUse.textContent = textchange;
});
    let Plural = document.querySelectorAll("#CartPlu");

    Plural.forEach((ProPlur) => {
  let textchange = cartItems.length;
  if (textchange <= 1) {
    ProPlur.textContent = " product";
  } else{
    ProPlur.textContent = " products";
  }
  // ProPlur.textContent = textchange;
});
let IsEmpty = document.querySelector("#ShowMessageField")
if (cartItems.length >= 1) {
  IsEmpty.classList.remove("OKAY");
} else {
  IsEmpty.classList.add("OKAY");
  var aniSucClear = document.querySelector(".aniSucClear")
  aniSucClear.classList.add("active")
  setTimeout(() => {
    aniSucClear.classList.remove("active")
  },4800 );
  RemoveOne.classList.remove("active")

}
  //recorremos cada elemento del cart para actualizar el total
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var priceElemento = item.getElementsByClassName("cart-item-price")[0];
    //quitamos el simobolo peso y el punto de milesimos.
    var price = parseFloat(
      priceElemento.innerText.replace("$", "").replace(",")
    );
    var inputblockItem = item.getElementsByClassName("cart-item-inputblock")[0];
    console.log(price);
    var inputblock = inputblockItem.value;
    total = total + price * inputblock;
  }
  total = Math.round(total * 100) / 100;
  let topTotal = total.toLocaleString("us") + ".00";
  document.getElementsByClassName("cart-price-total")[0].innerText = topTotal+" USD";


  // let Currency = document.querySelector("#currency").value;
  let GranT = document.querySelectorAll("#grandTotal");

  GranT.forEach((TotalChange) => {
    let Totalchangs = topTotal;
    
    TotalChange.innerHTML = Totalchangs;
  });
}
// grandTotal


let IsEmpty = document.querySelector("#ShowMessageField")
IsEmpty.classList.add("OKAY");

let CloseExistAlert = document.querySelector("#CloseExistAlert")
CloseExistAlert.addEventListener("click", () =>{
  AlertExist.classList.remove("AlertExistAct")

})



let Unclear = document.querySelector(".Unclear")
let sureClear = document.querySelector(".sureClear")
// let ClearAll = document.querySelector(".ClearAll")
Unclear.addEventListener("click", () =>{
  sureClear.style.display = "none"
})
let ClearAll = document.querySelector(".ClearAll")
ClearAll.addEventListener("click", () =>{
  sureClear.style.display = "flex"
})
z