export default class Accordion {
    constructor(element){
        this.accordion = element;
        this.header  = this.accordion.querySelector('.accordion-header');
        this.content = this.accordion.querySelector('.accordion-content');
        this.header.addEventListener('click', () => this.toggle());
        this.isOpen = false;
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.content.style.display = this.isOpen ? 'block' : 'none';
        this.updateAriaAttributes()
        Accordion.closeOtherAccordions(this.accordion)
       
    }
    updateAriaAttributes(){
        this.header.setAttribute('aria-expanded', this.isOpen);
        this.content.setAttribute('aria-hidden', !this.isOpen);

    }
    static closeOtherAccordions(current){
        const allAccordions = document.querySelectorAll('.accordion');
        allAccordions.forEach(otherAccordion => {
            if(otherAccordion !== current){
                otherAccordion.querySelector('.accordion-content').style.display = 'none';
                otherAccordion.querySelector('.accordion-header').setAttribute('aria-expanded',false);
                otherAccordion.querySelector('.accordion-content').setAttribute('aria-hidden', true);
            }
        })

    }

    static render() {
        document.getElementById('accordion').innerHTML = `
            <div class="accordion">
                <div class="accordion-header">Section 1</div>
                <div class="accordion-content">
                    <p>This is the content for section 1.</p>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Section 2</div>
                <div class="accordion-content">
                    <p>This is the content for section 2.</p>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Section 3</div>
                <div class="accordion-content">
                    <p>This is the content for section 3.</p>
                </div>
         </div> `
    }
}




