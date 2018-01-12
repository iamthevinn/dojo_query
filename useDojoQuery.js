function buttonClick() {
  $Dojo("someIdForSomeButton").click(function () {console.log("The button was clicked!")});
}
function onHover() {
$Dojo("someOtherIdForSomeOtherButton").hover(function () {
  console.log("The button was hovered on!")
});
}

function offHover() {
  $Dojo("someOtherIdForSomeOtherButton").hover(
    undefined, function () {
    console.log("The button was hovered off!")
  });
}
