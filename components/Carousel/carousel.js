export default class Carousel {
    constructor(element) {
        this.carousel = element;
        this.track = this.carousel.querySelector('.carousel-track');
        this.items = Array.from(this.track.children);
        this.prevButton = this.carousel.querySelector('.carousel-button.prev');
        this.nextButton = this.carousel.querySelector('.carousel-button.next');
        this.init()
       
        
    }
    init(){
        this.currentIndex = 0;
        this.addEventListener()
        this.update();
    }

    addEventListener() {
        this.prevButton.addEventListener('click', () => this.showPrev());
        this.nextButton.addEventListener('click', () => this.showNext());
    }
    update() {
        const itemWidth = this.items[0].getBoundingClientRect().width;
        const offset = -this.currentIndex * itemWidth;
        this.track.style.transform = `translateX(${offset}px)`;

        this.prevButton.disabled = this.currentIndex === 0;
        this.nextButton.disabled = this.currentIndex === this.items.length - 1;
    }

    showPrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.update();
        }
    }

    showNext() {
        if (this.currentIndex < this.items.length - 1) {
            this.currentIndex++;
            this.update();
        }
    }
    static render() {
        document.getElementById('carousel').innerHTML = `
        <div class="carousel">
        <div class="carousel-track">
            <div class="carousel-item"> This is slide 1</div>
            <div class="carousel-item"> This is slide 2</div>
            <div class="carousel-item"> This is slide 3</div>

        </div>
        <button class="carousel-button prev">Prev</button>
        <button class="carousel-button next">Next</button>

    </div> `
    } 
}

