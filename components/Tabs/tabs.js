export default class Tabs {
  constructor(element) {
    this.tabsContainer = element;
    this.tabList = this.tabsContainer.querySelector(".tab-list");
    this.tabs = Array.from(this.tabList.querySelectorAll(".tab"));
    this.panels = Array.from(this.tabsContainer.querySelectorAll(".tab-panel"));

    this.addEventListener();
  }

  addEventListener() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        this.panels.forEach((panel) => {
          panel.setAttribute("aria-hidden", true);
        });

        const panel = this.tabsContainer.querySelector(
          `#${tab.getAttribute("aria-controls")}`
        );
        panel.setAttribute("aria-hidden", "false");
      });
    });
  }

 

  static render() {
    document.getElementById("tabs").innerHTML = `
        <div class="tabs" id="tabs1">
        <ul class="tab-list">
            <li> <button id="tab1" role="tab" class="tab" aria-controls="panel1" aria-selected="true"> Tab 1</button></li>
            <li> <button id="tab2" role="tab" class="tab" aria-controls="panel2" aria-selected="false">Tab 2 </button></li>
            <li> <button id="tab3" role="tab" class="tab" aria-controls="panel3" aria-selected="false">Tab 3 </button></li>

         </ul> 
         <div id="panel1" class="tab-panel" role="tabpanel" aria-labelledby="tab1" aria-hidden="false">
            <p>This is the content for tab 1.</p>
        </div>
        <div id="panel2" class="tab-panel" role="tabpanel" aria-labelledby="tab2" aria-hidden="true">
            <p>This is the content for tab 2.</p>
        </div>
        <div id="panel3" class="tab-panel" role="tabpanel" aria-labelledby="tab3" aria-hidden="true">
            <p>This is the content for tab 3.</p>
        </div>
        </div>`;
  }
}
