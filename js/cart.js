//Ẩn khi trong giỏ hàng bằng 0
var inputQuantity1 = document.getElementById("inputQuantity1");
var inputQuantity2 = document.getElementById("inputQuantity2");
var inputQuantity3 = document.getElementById("inputQuantity3");
var tr1 = document.getElementsByTagName("tr")[1];
var tr2 = document.getElementsByTagName("tr")[2];
var tr3 = document.getElementsByTagName("tr")[3];

// Thêm sự kiện "change" cho các phần tử input số lượng
inputQuantity1.addEventListener("change", function () {
    var inputValue = parseInt(this.value);
    if (inputValue < 0) {
        alert("Số lượng không được âm. Vui lòng nhập lại.");
        this.value = 1;
        var priceCell = tr1.cells[2];
        var price = priceCell.innerText.replace("₫", "").replace(",", "").replace(",", "");
        var totalPriceCell = tr1.cells[4];
        var totalPrice = price * this.value;
        totalPriceCell.innerText = formatPrice(totalPrice);
        updateTotalPrice();
    } else if (inputValue === 0) {
        var confirmation = confirm("Bạn có muốn bỏ sản phẩm này?");
        if (confirmation) {
            tr1.style.display = "none";
        } else {
            this.value = 1;
            var priceCell = tr1.cells[2];
            var price = priceCell.innerText.replace("₫", "").replace(",", "").replace(",", "");
            var totalPriceCell = tr1.cells[4];
            var totalPrice = price * this.value;
            totalPriceCell.innerText = formatPrice(totalPrice);
            updateTotalPrice();
        }
    }
});

inputQuantity2.addEventListener("change", function () {
    var inputValue = parseInt(this.value);
    if (inputValue < 0) {
        alert("Số lượng không được âm. Vui lòng nhập lại.");
        this.value = 1;
        var priceCell = tr2.cells[2];
        var price = priceCell.innerText.replace("₫", "").replace(",", "").replace(",", "");
        var totalPriceCell = tr2.cells[4];
        var totalPrice = price * this.value;
        totalPriceCell.innerText = formatPrice(totalPrice);
        updateTotalPrice();
    } else if (inputValue === 0) {
        var confirmation = confirm("Bạn có muốn bỏ sản phẩm này?");
        if (confirmation) {
            tr1.style.display = "none";
        } else {
            this.value = 1;
            var priceCell = tr2.cells[2];
            var price = priceCell.innerText.replace("₫", "").replace(",", "").replace(",", "");
            var totalPriceCell = tr2.cells[4];
            var totalPrice = price * this.value;
            totalPriceCell.innerText = formatPrice(totalPrice);
            updateTotalPrice();
        }
    }
});

inputQuantity3.addEventListener("change", function () {
    var inputValue = parseInt(this.value);
    if (inputValue < 0) {
        alert("Số lượng không được âm. Vui lòng nhập lại.");
        this.value = 1;
        var priceCell = tr3.cells[2];
        var price = priceCell.innerText.replace("₫", "").replace(",", "").replace(",", "");
        var totalPriceCell = tr3.cells[4];
        var totalPrice = price * this.value;
        totalPriceCell.innerText = formatPrice(totalPrice);
        updateTotalPrice();
    } else if (inputValue === 0) {
        var confirmation = confirm("Bạn có muốn bỏ sản phẩm này?");
        if (confirmation) {
            tr1.style.display = "none";
        } else {
            this.value = 1;
            var priceCell = tr3.cells[2];
            var price = priceCell.innerText.replace("₫", "").replace(",", "").replace(",", "");
            var totalPriceCell = tr3.cells[4];
            var totalPrice = price * this.value;
            totalPriceCell.innerText = formatPrice(totalPrice);
            updateTotalPrice();
        }
    }
});
//cập nhật tổng tiền và thành tiền khi tăng số lượng
var deleteButtons = document.getElementsByClassName("delete-button");
var inputQuantities = document.getElementsByClassName("input-quantity");
var totalPriceElement = document.getElementById("totalPrice");

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
        var confirmation = confirm("Bạn có muốn xóa sản phẩm này?");
        if (confirmation) {
            var row = this.parentNode.parentNode;
            row.style.display = "none";
            updateTotalPrice();
        }
    });
}

for (var i = 0; i < inputQuantities.length; i++) {
    inputQuantities[i].addEventListener("input", function () {
        var row = this.parentNode.parentNode;
        var priceCell = row.cells[2];
        var quantity = this.value;
        var price = priceCell.innerText.replace("₫", "").replace(",", "").replace(",", "");
        var totalPriceCell = row.cells[4];
        var totalPrice = price * quantity;
        totalPriceCell.innerText = formatPrice(totalPrice);
        updateTotalPrice();
    });
}

function updateTotalPrice() {
    var rows = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    var total = 0;
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (row.style.display !== "none") {
            var totalPriceCell = row.cells[4];
            var totalPrice = totalPriceCell.innerText.replace("₫", "").replace(/\./g, "").replace(/,/g, "");
            console.log(totalPrice);
            total += parseInt(totalPrice);
        }
    }
    totalPriceElement.innerText = formatPrice(total);
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
var buy = document.getElementById("buyButton");

buy.addEventListener("click", function () {
    var name = document.getElementById("txtName").value;
    if (name === "") {
        // Trường input rỗng, không hiển thị thông báo
        return;
    }
    alert("Cảm ơn bạn đã mua sản phẩm bên chúng tôi! Vui lòng bạn hãy ra shop nhận hàng(Địa chỉ shop trong liên hệ!) hoặc chúng tôi sẽ ship cho bạn nếu bạn ở ngoài thành phố.:))");
});