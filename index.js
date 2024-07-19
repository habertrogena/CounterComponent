class MyCounter extends HTMLElement {
  constructor() {
    super();
    // we are going to create a shadow root
    // create elements
    //set default counter value
    // assign ids for styling
    //set text content
    //attach event listeners
    //append elements to container
    //attach container to shadow root
    //attach styling
    //define new element.
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    const counterDisplay = document.createElement("span");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");

    this.counter = 0;

    container.id = 'counter-container';
    counterDisplay.id = 'counter-display';
    incrementButton.id = 'increment-button';
    decrementButton.id = 'decrement-button';

    counterDisplay.textContent = this.counter;
    incrementButton.textContent = '+';
    decrementButton.textContent = '-';

    incrementButton.addEventListener('click', () => this.increment());
    decrementButton.addEventListener('click', () => this.decrement());

    container.appendChild(decrementButton);
    container.appendChild(counterDisplay);
    container.appendChild(incrementButton);

    shadow.appendChild(container);

    style.textContent = `
      #counter-container {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      #counter-display {
        font-size: 1.5em;
        margin: 0 10px;
      }
      #increment-button, #decrement-button {
        font-size: 1.5em;
        padding: 5px 10px;
      }
    `;
    shadow.appendChild(style);
  }
  increment() {
    this.counter++;
    this.updateDisplay();
  }

  decrement() {
    this.counter--;
    this.updateDisplay();
  }

  updateDisplay() {
    this.shadowRoot.querySelector('#counter-display').textContent = this.counter;
  }
}

customElements.define('my-counter', MyCounter);
