(function (global) {

  function myAccessorFunction(elementId) {
    this.htmlElement = document.getElementById(elementId);

    htmlElement.click = function (callback) {
      htmlElement.addEventListener("click", callback)
    }
    htmlElement.hover = function (hoverOn, hoverOff) {
      if(typeof hoverOff != 'function') {
        htmlElement.addEventListener("mouseover", hoverOn)
      }
      else {
        htmlElement.addEventListener("mouseout", hoverOff)
      }
    }
    return htmlElement;

  }

  global.$Dojo = myAccessorFunction;

}(window))
