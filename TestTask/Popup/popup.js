const getTemplate = (options) => {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <div class="popup__bg"></div>
    <div class="popup__inner">
      
        <input type="checkbox"/>
        <input type="text"/>
        <button class="popup__close-btn" data-close="true"></button>
      <div class="popup__video-container">
        <iframe
          class="popup__video"
          src=${options.videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <input type="checkbox"/>
        <input type="text"/>

      </div>
    </div>
`;
  return popup;
};

const _focusElements = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  "select:not([disabled]):not([aria-hidden])",
  "textarea:not([disabled]):not([aria-hidden])",
  "button:not([disabled]):not([aria-hidden])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  '[tabindex]:not([tabindex^="-"])',
];

export class Popup {
  constructor(selector, options) {
    this.init(selector, options);
  }

  init(selector, options) {
    this.options = options;
    this.$play = document.querySelector(selector);
    this.$popup = getTemplate(options);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.listener = this.listener.bind(this);
    this.focusContol = this.focusContol.bind(this);

    this.#setup();
    this.destroyed = false;
    this.opened = false;
    this.closed = false;
    this.focusEl;
  }

  focusContol() {
    const nodes = this.$popup.querySelectorAll(_focusElements);
    console.log(nodes);
    if (this.closed && this.$play) {
      console.log(this.$play);
      this.$play.focus();
    } else {
      if (nodes.length) {
        console.log();
        nodes[0].focus();
      }
    }
  }

  #render() {
    document.body.appendChild(this.$popup);
  }

  #setup() {
    this.$play.addEventListener("click", this.open);
    this.$popup.addEventListener("click", this.listener);
    document.addEventListener("keydown", this.listener);
  }

  listener(event) {
    if (
      event.target.dataset.close ||
      (event.keyCode === 27 && this.opened === true)
    ) {
      this.close();
    }
  }

  open() {
    if (this.destroyed) {
      console.log("Popup was destroyed!");
      return;
    }
    this.opened = true;
    this.closed = false;
    typeof this.options.onOpen === "function" && this.options.onOpen();
    this.#render();
    this.$popup.classList.add("open");
    this.focusContol();
  }

  close() {
    this.opened = false;
    this.closed = true;
    typeof this.options.onClose === "function" && this.options.onClose();
    this.$popup.classList.remove("open");
    this.focusContol();
  }

  destroy() {
    this.destroyed = true;
    // this.$play.removeEventListener("click", this.open);
    this.$popup.removeEventListener("click", this.listener);
  }
}
