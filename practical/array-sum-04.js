// tính tổng tiền của giỏ hàng
// viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng
// const = cartItemList = [
// { id: 1, product: { id: 1, price: 50000}, quantity: 1 },
// { id: 2, product: { id: 2, price: 100000}, quantity: 2},    
// ];
// calcCartTotal(cartItemList); 250000 = 50000 x 1 + 100000 x 2

export function calcCartTotal(cartItemList) {
    if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < cartItemList.length; i++) {
        const cartItem = cartItemList[i];
        const itemTotal = cartItem.product.price * cartItem.quantity;
        sum += itemTotal;   
    }
    return sum;
}

// cách 2: using reduce
// function calcCartTotal(cartItemList) {
//     if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
//     return cartItemList.reduce((sum, cartItem) => {
//         const itemTotal = cartItem.product.price * cartItem.quantity;
//         return sum + itemTotal;
//     }, 0)
// }