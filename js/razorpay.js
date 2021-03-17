// key Id - rzp_test_azGFvOuYYuZj20
// key secret - C9s5VJBx1Y4YCD2ht4bx5jpH
var options = {
    "key": "rzp_test_azGFvOuYYuZj20",
    // Enter the Key ID generated from the Dashboard    
    "amount": "50000",
    // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise    
    "currency": "INR",
    "name": "Donate for Yours",
    "description": "Test Transaction",
    "image": "https://www.clipartmax.com/png/middle/138-1389413_paypal-clipart-donate-button-donate-button-png.png",
    "order_id": "order_9A33XWu170gUtm",
    //This is a sample Order ID. Pass the `id` obtained in the response of Step 1    
    "handler": function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options); rzp1.on('payment.failed', function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});

document.getElementById('razorpay_donate_button').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
}