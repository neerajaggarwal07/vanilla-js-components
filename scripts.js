import Accordion from "./components/Accordion/accordion.js";
import Carousel from "./components/Carousel/carousel.js";
import Tabs from "./components/Tabs/tabs.js";

function init() {
  const allComponentLink = document.querySelectorAll(".component-link");
  const allComponents = document.querySelectorAll(".component-container");
  renderComponents();

  allComponentLink.forEach((componentLink) =>
    componentLink.addEventListener("click", (event) => {
      const currentElement = event.currentTarget.getAttribute("data-component");

      allComponents.forEach((component) => {
        component.style.display = "none";
      });
      document.getElementById(currentElement).style.display = "block";
    })
  );

  const accordion = document.querySelectorAll(".accordion");
  accordion.forEach((accordion) => new Accordion(accordion));

  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => new Carousel(carousel));

  const tabs = document.querySelectorAll(".tabs");
  tabs.forEach((tabContainer) => new Tabs(tabContainer));
}
function renderComponents(){
    Accordion.render();
    Carousel.render();
    Tabs.render();
}
function getDOMElements() {}
document.addEventListener("DOMContentLoaded", init);
