//Ẩn khi số lượng nhỏ hơn 0
var inputQuantity = document.getElementById("inputQuantity");
var quantityError = document.getElementById("quantityError");

inputQuantity.addEventListener("input", function () {
    var value = parseInt(this.value);
    if (isNaN(value) || value <= 0) {
        this.classList.add("is-invalid");
        quantityError.style.display = "block";
    } else {
        this.classList.remove("is-invalid");
        quantityError.style.display = "none";
    }
});