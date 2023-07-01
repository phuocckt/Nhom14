 // Lấy giá trị từ các trường nhập liệu
window.addEventListener('load', function() {
    // Xử lý sự kiện submit form
    document.getElementById('editForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form
        
        // Lấy giá trị từ các trường nhập liệu
        var productID = document.getElementById('productID').value;
        var productSKU = document.getElementById('productSKU').value;
        var productNAME = document.getElementById('productNAME').value;
        var productDescription = document.getElementById('productDescription').value;
        var productPRICE = document.getElementById('productPRICE').value;
        var productSTOCK = document.getElementById('productSTOCK').value;
        var productType = document.getElementById('productType').value;
        var productIMAGE = document.getElementById('productIMAGE').value;
        var productSTATUS = document.getElementById('productSTATUS').value;
        var productACTIONS = document.getElementById('productACTIONS').value;
        
        // Kiểm tra dữ liệu nhập đủ và hợp lệ
        if (productID.trim() === '') {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        
        if (productSKU.trim() === '' || isNaN(productSKU)) {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        if (productDescription.trim() === '') {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        if (productNAME.trim() === '') {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        if (productPRICE.trim() === '') {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        if (productSTOCK.trim() === '') {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        if (productType.trim() === '') {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        // if (productSTATUS.trim() === '') {
        //     alert('Vui lòng nhập thông tin sản phẩm.');
        //     return;
        // }
        if (productIMAGE.trim() === '') {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        if (productACTIONS.trim() === '') {
            alert('Vui lòng nhập thông tin sản phẩm.');
            return;
        }
        if (parseFloat(productID) < 0) {
            alert('Giá sản phẩm không được âm.');
            return;
        }
        
        // Nếu dữ liệu hợp lệ, tiến hành gửi dữ liệu đến máy chủ hoặc cơ sở dữ liệu để thêm/sửa sản phẩm
        
        // Reset form sau khi gửi dữ liệu thành công (nếu cần)
        document.getElementById('editForm').reset();
        
        // Hiển thị thông báo thành công (nếu cần)
        alert('Dữ liệu đã được lưu thành công!');
    });
});


