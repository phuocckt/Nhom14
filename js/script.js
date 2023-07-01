function showLargeImage(image) {
    var largeImage = document.getElementById("largeImage");
    largeImage.src = image.src;
}
function showLargeImage(image) {
    var largeImage = document.getElementById("largeImage");
    largeImage.src = image.src;
    largeImage.classList.add("slide-right");
    setTimeout(function() {
        largeImage.classList.remove("slide-right");
    }, 300);
}
var image = document.getElementById("largeImage");

    image.addEventListener("mousemove", function(event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        var rect = image.getBoundingClientRect();
        var imageX = rect.left + window.pageXOffset;
        var imageY = rect.top + window.pageYOffset;

        var offsetX = mouseX - imageX;
        var offsetY = mouseY - imageY;

        image.style.transformOrigin = offsetX + "px " + offsetY + "px";
});