document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Lấy giá trị của trường nhập liệu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Kiểm tra thông tin đăng nhập
    if ((username === "Phuoc_123" && password === "Phuoc123") || (username === "Vu_123" && password === "Vu123") || (username === "Ky_123" && password === "Ky123") || (username === "Tung_123" && password === "Tung123") || (username === "Phuc_123" && password === "Phuc123")) {
      // Đăng nhập thành công
      alert("Đăng nhập thành công!");
      window.location.href="./index1.html";
    }
    else if(username === "Phuoc_1234" && password === "Phuoc1234"){
      alert("Đăng nhập thành công với tư cách là admin!");
      window.location.href="./productAdmin.html";
    }
    else {
      // Đăng nhập thất bại
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });