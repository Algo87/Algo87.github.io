// Для отображения popup c текстом - можно раскомм ентировать свойства textTemplate и type:text, а videoId: "MB80ZuIJATI" и type: "video" убрать.
// в этом случае в попапе отобразится html запусанный в свойстве textTemplate (стили для формы не задавала)
const modal = new Popup("#play", {
  videoId: "MB80ZuIJATI",
  // textTemplate: `
  // <form>
  //   <label for='1'>skjfskj1</label><input type='text' id='1' />
  //   <label for='2'>skjfskj4</label><input type='text' id='2' />
  // </form>
  // `,
  type: "video",
  // type: "text",
  onOpen() {
    console.log("onOpen");
  },
  onClose() {
    console.log("onClose");
  },
  onDestroy() {
    console.log("destroy");
  },
});
// modal.destroy();

(function initLazyLoad() {
  registerListener("load", setLazy);
  registerListener("load", lazyLoad);
  registerListener("scroll", lazyLoad);

  let lazy = [];

  function setLazy() {
    lazy = document.querySelectorAll("[data-lazy]");
  }

  function lazyLoad() {
    for (let i = 0; i < lazy.length; i++) {
      let dataLazy = lazy[i].getAttribute("data-lazy");

      if (isInViewport(lazy[i])) {
        let dataSrc = lazy[i].getAttribute("data-src");

        if (dataSrc) {
          if (dataLazy === "img") {
            lazy[i].src = dataSrc;
          } else if (dataLazy === "background") {
            lazy[i].style.backgroundImage = `url("${dataSrc}`;
          }
          lazy[i].removeAttribute("data-src");
        }
      }
    }
    cleanLazy();
  }

  function cleanLazy() {
    lazy = Array.prototype.filter.call(lazy, function (l) {
      return l.getAttribute("data-src");
    });
  }

  function isInViewport(el) {
    let rect = el.getBoundingClientRect();

    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function registerListener(event, func) {
    if (window.addEventListener) {
      window.addEventListener(event, func);
    } else {
      window.attachEvent("on" + event, func);
    }
  }
})();
