export default class Card {
  /**
   * Creates a new Card component.
   *
   * @class
   */
  constructor(element) {
    /**
     * The container element for the card.
     * @type {HTMLElement}
     */
   

    this.element = element;
  }

  static async fetchProductData() {
    const response = await fetch(`https://fakestoreapi.com/products/1`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  }

  static async render() {
    try {
      const productData = await Card.fetchProductData();
      const createElement = document.createElement("div");
      createElement.classList.add("product-card");
      createElement.setAttribute("data-id", productData.id);
      createElement.setAttribute(
        "aria-labelledby",
        `product-${this.productId}-title`
      );
      createElement.innerHTML = `
                    <div class="product-image"><img src="${productData.image}" style="width: 200px;"></img></div>
                    <div class="product-details">
                        <h3 class="product-title">${productData.title}</h3>
                        <p class="product-title">${productData.description}</p>
                    </div>
               
                 `;
      console.log(createElement);
      document.getElementById("card").append(createElement);
    } catch (error) {
      console.log(error);
    }
  }
}
