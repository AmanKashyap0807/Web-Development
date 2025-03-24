// PROMISE SOLUTION - Solving callback hell with promises
// Demonstrates how promises create cleaner, more maintainable code

// Create cart function returns a promise instead of accepting callbacks
function createCart() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const items = Math.floor(Math.random() * 10) + 1;
            if (items > 0) {
                console.log(`Cart created with ${items} items`);
                resolve(items);
            } else {
                reject('Cart creation failed: No items selected');
            }
        }, 1000);
    });
}

// Each function returns a promise instead of accepting callbacks
function placeOrder(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderId = "ORD-" + Math.floor(Math.random() * 1000);
            console.log(`Order #${orderId} created for ${items} items`);
            resolve(orderId);
        }, 1000);
    });
}

function processPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paymentId = "PAYMENT-" + Math.floor(Math.random() * 1000);
            console.log(`Payment ${paymentId} processed for order ${orderId}`);
            resolve(paymentId);
        }, 1000);
    });
}

function shipOrder(paymentId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trackingId = "TRK-" + Math.floor(Math.random() * 1000);
            console.log(`Order shipped with payment ${paymentId}, tracking #${trackingId}`);
            resolve(trackingId);
        }, 1000);
    });
}

// Clean promise chain - flows vertically instead of horizontally
createCart()
    .then(items => placeOrder(items))
    .then(orderId => processPayment(orderId))
    .then(paymentId => shipOrder(paymentId))
    .then(trackingId => {
        console.log(`Order delivered with tracking #${trackingId} - thank you!`);
    })
    .catch(error => {
        console.error('Error in order process:', error);
    });

// Benefits of promises:
// 1. Clean, readable code that flows vertically
// 2. Centralized error handling with .catch()
// 3. Easy to reason about the sequence of operations
// 4. Simple to add more steps or modify existing ones

// setTimeout is used for visualizing the asynchronous nature of promises
// In real-world scenarios, promises are used with actual async operations