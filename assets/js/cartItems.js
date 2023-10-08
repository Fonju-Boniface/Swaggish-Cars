
const Lambor = [
    {
        title:"Lambor 1",
        img: "../imgs/lamborBg.png",
        price: 2050
    },
    {
        title:"Lambor 2 ",
        img: "https://images.pexels.com/photos/15857477/pexels-photo-15857477/free-photo-of-red-walls-of-tunnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price: 2000
    }
]








const lamborgini = document.querySelector("#LamborList");
  
window.addEventListener("DOMContentLoaded", function () {
  const lamborInHtml = Lambor.map((LamborGi, index) => {
    return `
    <div class="prevprice item">
        <img src="https://images.pexels.com/photos/15857477/pexels-photo-15857477/free-photo-of-red-walls-of-tunnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="baby fabric shoes" width="30" 
        class="img-item scaleNone" />
        <h4 class="title-item scaleNone">baby fabric shoes</h4>
        <h2 class="price-item scaleNone">4.00</h2>

        
        <button class="button-item">Add this product</button>
      </div>
        `;
  });

  lamborgini.innerHTML = lamborInHtml;
});
