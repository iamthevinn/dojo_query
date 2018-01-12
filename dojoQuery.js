(function (global) {

    function myAccessorFunction(elementId) {
        console.log("elementId: " + elementId)
        let returnObject = {}
        returnObject.click = function (callback) {
            callback()
        }
        returnObject.hover = function (callback) {
            callback()
        }
        return returnObject;
        
    }

    global.$Dojo = myAccessorFunction;
    
}(window))
