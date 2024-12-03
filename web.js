function addToCart(productId) {
    var cart = document.getElementById('cart');
    var cartItems = document.getElementById('cartItems');
    var product = document.getElementById(productId);
    var item = document.createElement('li');
    item.textContent = product.querySelector('h2').textContent + ' - ¥' + product.querySelector('p').textContent;
    cartItems.appendChild(item);
    cart.style.display = 'block';
    console.log(item.textContent);
}

function checkout() {
    alert('结账成功！');
    // 这里可以添加结账的逻辑，比如发送数据到服务器等
}