const containerProduct = document.querySelector(".description-product");
    async function getRequest(id){
        let respons = await fetch('../posts/novostx2/index.json')
        let content = await respons.json();
        let shouldSkip = false;
        content.forEach((item =>{
            if(item.id == id){
                shouldSkip = true;
                render(item);
            }
        }))
        if(!shouldSkip){
            window.location = "404.html"
        }
    }
    function getParams(){
        const url = decodeURIComponent(window.location.search).substring(1);
        const params = url.split("=")[1];
        getRequest(params);
        
      }

      getParams();

 function render (date){
    containerProduct.insertAdjacentHTML('afterbegin', 
    `
            <div class="info">
            <div class="product">
                <img ${date.text} alt="">
                <div class="product-text">
                    <h1 class="product-text__header">${date.name}</h1>
                    <p class="product-text__description">${date.subTitle}</p>
                    <!-- <a href="#" class="button-download">${date.action}</a> -->
                </div>
            </div>
            </div>
        <p class="description-product__text">${date.text}</p>
            <!-- <div class="description-product__images">
            <img src="./img/Frame 69.png" alt="">
            <img src="./img/Frame 70.png" alt="">
            </div> -->
            <a href="#" class="button-download">${date.action}</a>
        `
    )
  }
