//$Dojo.test();
/*$.get("https://api.github.com/users/iamthevinn", displayName);

function displayName(data) {
    console.log(data['name'])
}*/

//$Dojo("someIdForSomeButton")
//$Dojo("someOtherIdForSomeOtherButton")

$Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });
$Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") });
