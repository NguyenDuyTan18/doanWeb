// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(id, name, price) {
    
    // Lấy giỏ hàng từ localStorage hoặc khởi tạo giỏ hàng rỗng nếu chưa có
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    let existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        // Nếu sản phẩm đã có, tăng số lượng
        existingProduct.quantity += 1;
    } else {
        // Nếu sản phẩm chưa có, thêm sản phẩm mới với số lượng 1
        cart.push({ id, name, price, quantity: 1 });
    }

    // Lưu giỏ hàng mới vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm sản phẩm vào giỏ hàng!");
}
// Tìm kiếm Id và update Local [] mới sau đó dùng chuỗi để xóa 
function DeleteCart(element){
    console.log(element.parentElement.parentElement.children[1].textContent)
    let updateDeleteCart = [];
    let customerCart = JSON.parse(localStorage.getItem("cart"));
    customerCart.forEach(item =>{
        if(item.id != element.parentElement.parentElement.children[1].textContent) {
            updateDeleteCart.push(item)
        }
    })
    localStorage.setItem("cart", JSON.stringify(updateDeleteCart));
    location.reload();
}

// Hàm hiển thị giỏ hàng trên trang giỏ hàng
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-container");
    let showMoney = document.querySelector('.showMN');
    // Kiểm tra nếu giỏ hàng rỗng
    if (cart.length === 0) {
        return;
    }
    // Tạo danh sách sản phẩm trong giỏ hàng
   total= no = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartContainer.innerHTML += `
            <tr>
            
                <td>${++no}</td>
                <td style="display:none;">${item.id}</td>
                <td>${item.name}</td>
                <td>${formatCurrency(item.price)}</td>
                <td>${item.quantity}</td>
                <td>${formatCurrency(item.price * item.quantity)}</td>
                <td style="text-align: center;">
                    <button class="btn" onclick = "DeleteCart(this)"><i class="fa-solid fa-trash"></i></button>
                </td>
            
            </tr>
           
            
        `;
    });
    showMoney.innerHTML = `<p> ${formatCurrency(total)} </p>`;
    
}

const formatCurrency = (value, locale = "vi-VN") =>{
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'VND'
    }).format(value)
}
