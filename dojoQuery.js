(function (global) {

  function myAccessorFunction() {
    let dojoElement = document.createElement("dojo");

    dojoElement.click = function (callback) {
      callback()
    }
    dojoElement.hover = function (hoverOn, hoverOff) {
      if(typeof hoverOff != 'function')
        hoverOn()
      else
        hoverOff()
    }
    return dojoElement;

  }

  global.$Dojo = myAccessorFunction;
  return $Dojo()

}(window))
