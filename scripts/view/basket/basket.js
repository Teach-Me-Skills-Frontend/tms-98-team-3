export class Basket {
    constructor() {
        this.basketModalWindow = document.querySelector(".basket__modal");
        this.basketContent = document.querySelector(".basket__content")
        this.ascentBasket = this.ascentBasket();
        this.escBasket = this.escBasket();
    }

    ascentBasket() {
        document.addEventListener("click", (event) => {
            const className = event.target.className;
            if (className === "header__basket-img") {
                this.onOpen();
            } else if (className === "close") {
                this.onClose();
            } else if (!event.composedPath().includes(this.basketContent)) {
                this.onClose();
            }
        });
    }

    escBasket(){
        document.addEventListener('keyup', (event) => {
            if(event.key === 'Escape'){
            this.onClose()
            }
        })
    }

    onOpen(){
        this.basketModalWindow.style.display = "block";
    }
    
    onClose(){
        this.basketModalWindow.style.display = "none";
    }
}
