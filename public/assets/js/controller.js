class Controller {
    constructor() {
        console.log("executing constructor")
        //   this.delegate(document, "submit", ".create-form", this.createQuote.bind(this));
        //   this.delegate(document, "click", ".delquote", this.deleteQuote.bind(this));
        //   this.delegate(document, "submit", ".update-form", this.updateQuote.bind(this));
    }
  
    // https://stackoverflow.com/questions/30880757/javascript-equivalent-to-on
    delegate(el, evt, sel, handler) {
      el.addEventListener(evt, function(event) {
          let t = event.target;
          while (t && t !== this) {
            if (t.matches(sel)) {
              handler.call(t, event);
            }
            t = t.parentNode;
          }
      });
    };
}