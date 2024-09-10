document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var message = document.getElementById('message').value.trim();
    var size = document.getElementById('rollNo').value.trim();

    if (!name || !mobile || !message || !size) {
        alert("Please fill in all fields.");
        return;
    }

    var receiptDetails = `
        <strong>Name:</strong> ${name}<br>
        <strong>Mobile Number:</strong> ${mobile}<br>
        <strong>Message on T-Shirt:</strong> ${message}<br>
        <strong>Size:</strong> ${size}<br>
    `;

    document.getElementById('receiptDetails').innerHTML = receiptDetails;

    var currentDateTime = new Date();
    document.getElementById('dateGenerated').innerText = `Order placed on: ${currentDateTime.toLocaleString()}`;

    document.getElementById('receipt').style.display = 'block';

    document.getElementById('orderForm').reset();
});
