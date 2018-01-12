$Dojo("someIdForSomeButton").click(function () {console.log("The button was clicked!")});
$Dojo("someOtherIdForSomeOtherButton").hover(function () {
  console.log("The button was hovered on!")
});
$Dojo("someOtherIdForSomeOtherButton").hover(
  undefined, function () {
  console.log("The button was hovered off!")
});
