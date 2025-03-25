// Instead of defining a fuction with promise return value we can create it as a promise object
// async funtion : defining will be as same as normal funtion but the return value will be resolve and thre throw or any
// error will be the reject of the promise

async function createCart(items) {
    if (items < 1) throw 'Cart creation failed: No items selected';
    console.log(`Cart created with ${items} items`);
    // just for convenience
    let cart = items;
    return cart;
}

async function orderCart(cart) {
    const orderId = "#ORD-" + Math.floor(Math.random() * 1000);
    console.log(`Order ${orderId} created`);
    return orderId;
}

async function processPayment(orderId) {
    if (orderId === undefined) throw 'Order ID is required';
    const paymentId = "PAY-" + Math.floor(Math.random() * 1000);
    console.log(`Payment processed for order ${orderId}: ${paymentId}`);
    return paymentId;
}

async function trackOrder(payment) {
    if (payment === undefined) throw 'Payment ID is required';
    const trackingId = "TRK-" + Math.floor(Math.random() * 1000);
    console.log(`Order shipped with payment ${payment}, tracking #${trackingId}`);
}

let items = 0;
createCart(items)
    .then(cart => orderCart(cart))
    .then(orderId => processPayment(orderId))
    .then(paymentId => trackOrder(paymentId))
    .catch(error => console.error('Error in order process:', error));