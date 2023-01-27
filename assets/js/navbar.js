/**
 * Searches for an element with id collapsedContent, then toggles its display property between block and none on click
 */
function openNav(){
    var collapsedNavbar = document.getElementById("collapsedContent");
    if (collapsedNavbar.style.display === "block") {
        collapsedNavbar.style.display = "none";
    } else {
        collapsedNavbar.style.display = "block";
    }
}