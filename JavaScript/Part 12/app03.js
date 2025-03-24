// CALLBACK HELL EXAMPLE - The pyramid of doom
// This demonstrates how nested callbacks create messy, hard-to-read code

function createCart(items, callback) {
    setTimeout(() => {
        console.log(`Cart created with ${items} items`);
        // Nesting begins here - first level
        callback(items, function (orderId, callback) {
            console.log(`Order #${orderId} created`);
            // Second level of nesting
            callback(orderId, function (paymentInfo, callback) {
                console.log(`Payment processed: ${paymentInfo}`);
                // Third level of nesting
                callback(function (trackingId) {
                    console.log(`Order shipped with tracking #${trackingId}`);
                    // Fourth level of nesting
                    setTimeout(() => {
                        console.log("Order delivered - thank you!");
                    }, 1000);
                });
            });
        });
    }, 1000);
}

// Executing the callback chain
createCart(5, function (items, orderCallback) {
    const orderId = "ORD-" + Math.floor(Math.random() * 1000);
    orderCallback(orderId, function (orderId, paymentCallback) {
        const paymentInfo = "PAYMENT-" + Math.floor(Math.random() * 1000);
        paymentCallback(paymentInfo, function (shipCallback) {
            const trackingId = "TRK-" + Math.floor(Math.random() * 1000);
            shipCallback(trackingId);
        });
    });
});

// Problems with this approach:
// 1. Hard to read and maintain (pyramid structure)
// 2. Error handling is difficult
// 3. Code grows horizontally instead of vertically
// 4. Difficult to reason about the flow

