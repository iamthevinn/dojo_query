(function (global) {

  function myAccessorFunction(elementId) {
    let htmlElement = document.createElement("html");
    
    htmlElement.click = function (callback) {
      callback()
    }
    htmlElement.hover = function (hoverOn, hoverOff) {
      if(typeof hoverOff != 'function')
        hoverOn()
      else
        hoverOff()
    }
    return htmlElement;

  }

  global.$Dojo = myAccessorFunction;
  return $Dojo()

}(window))
