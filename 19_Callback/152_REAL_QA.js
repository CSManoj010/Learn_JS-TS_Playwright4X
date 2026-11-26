
// ==========================================
// 1. LOGIN USER
// ==========================================

function loginUser(email, password, callback) {

    console.log("Checking login credentials...");

    if (email === "pramod@example.com" && password === "password123") {

        let user = {
            id: 101,
            email: email
        };

        callback(null, user);

    } else {

        callback("Invalid email or password", null);

    }
}


// ==========================================
// 2. GET USER PROFILE
// ==========================================

function getUserProfile(userId, callback) {

    let profile = {
        name: "Pramod",
        age: 25
    };

    callback(null, profile);
}


// ==========================================
// 3. GET USER ORDERS
// ==========================================

function getUserOrders(userId, callback) {

    let orders = [
        { id: 501 }
    ];

    callback(null, orders);
}


// ==========================================
// 4. GET ORDER DETAILS
// ==========================================

function getOrderDetails(orderId, callback) {

    let order = {
        id: orderId,
        paymentId: 601,
        shippingId: 701,
        productId: 801
    };

    callback(null, order);
}


// ==========================================
// 5. GET PAYMENT DETAILS
// ==========================================

function getPaymentDetails(paymentId, callback) {

    let payment = {
        id: paymentId,
        amount: 1500
    };

    callback(null, payment);
}


// ==========================================
// 6. GET SHIPPING DETAILS
// ==========================================

function getShippingDetails(shippingId, callback) {

    let shipping = {
        id: shippingId,
        address: "Bangalore"
    };

    callback(null, shipping);
}


// ==========================================
// 7. GET PRODUCT DETAILS
// ==========================================

function getProductDetails(productId, callback) {

    let product = {
        id: productId,
        name: "Laptop"
    };

    callback(null, product);
}


// ==========================================
// 8. SEND CONFIRMATION EMAIL
// ==========================================

function sendConfirmationEmail(
    email,
    order,
    payment,
    shipping,
    product,
    callback
) {

    console.log("Sending confirmation email to:", email);

    callback(null, "Email sent successfully");
}


// ==========================================
// 9. UPDATE NOTIFICATION STATUS
// ==========================================

function updateNotificationStatus(userId, callback) {

    callback(null, "Notification updated");
}


// ==========================================
// 10. GENERATE FINAL REPORT
// ==========================================

function generateReport(
    user,
    profile,
    order,
    payment,
    shipping,
    product,
    callback
) {

    let report = {
        user: user.email,
        customer: profile.name,
        orderId: order.id,
        payment: payment.amount,
        product: product.name,
        shipping: shipping.address
    };

    callback(null, report);
}


// ==========================================
// MAIN PROGRAM - CALLBACK HELL
// ==========================================

loginUser("pramod@example.com", "password123", function (loginError, user) {

    if (loginError) {
        console.log("Login failed:", loginError);
        return;
    }

    console.log("User logged in:", user.id);


    getUserProfile(user.id, function (profileError, profile) {

        if (profileError) {
            console.log("Failed to get profile:", profileError);
            return;
        }

        console.log("Profile received");


        getUserOrders(user.id, function (ordersError, orders) {

            if (ordersError) {
                console.log("Failed to get orders:", ordersError);
                return;
            }

            console.log("Orders received");

            // Check whether orders exist

            if (!orders || orders.length === 0) {
                console.log("No orders found");
                return;
            }


            getOrderDetails(orders[0].id, function (orderError, order) {

                if (orderError) {
                    console.log("Failed to get order:", orderError);
                    return;
                }

                if (!order) {
                    console.log("Order not found");
                    return;
                }

                console.log("Order details received");


                getPaymentDetails(order.paymentId, function (paymentError, payment) {

                    if (paymentError) {
                        console.log("Failed to get payment:", paymentError);
                        return;
                    }

                    console.log("Payment details received");


                    getShippingDetails(order.shippingId, function (shippingError, shipping) {

                        if (shippingError) {
                            console.log("Failed to get shipping:", shippingError);
                            return;
                        }

                        console.log("Shipping details received");


                        getProductDetails(order.productId, function (productError, product) {

                            if (productError) {
                                console.log("Failed to get product:", productError);
                                return;
                            }

                            console.log("Product details received");


                            sendConfirmationEmail(
                                user.email,
                                order,
                                payment,
                                shipping,
                                product,
                                function (emailError, emailResult) {

                                    if (emailError) {
                                        console.log("Failed to send email:", emailError);
                                        return;
                                    }

                                    console.log("Confirmation email sent");


                                    updateNotificationStatus(
                                        user.id,
                                        function (notificationError, result) {

                                            if (notificationError) {
                                                console.log("Failed to update notification:", notificationError);
                                                return;
                                            }

                                            console.log("Notification status updated");


                                            generateReport(
                                                user,
                                                profile,
                                                order,
                                                payment,
                                                shipping,
                                                product,
                                                function (reportError, report) {

                                                    if (reportError) {
                                                        console.log("Failed to generate report:", reportError);
                                                        return;
                                                    }

                                                    console.log("Everything completed!");

                                                    console.log("Final Report:", report);

                                                }
                                            );

                                        }
                                    );

                                }
                            );

                        });

                    });

                });

            });

        });

    });

});
