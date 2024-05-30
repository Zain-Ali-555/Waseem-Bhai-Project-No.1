// document.addEventListener('DOMContentLoaded', () => {
//     const registrationForm = document.getElementById('registrationForm');

//     registrationForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const address = document.getElementById('address').value;
//         const phone = document.getElementById('phone').value;
//         const lessonType = document.getElementById('lesson-type').value;
//         const dateTime = document.getElementById('date-time').value;

//         // Mock form submission (replace with actual logic)
//         console.log(`Name: ${name}, Email: ${email}, Address: ${address}, Phone: ${phone}, Lesson Type: ${lessonType}, Date & Time: ${dateTime}`);
//         alert('Thank you for registering!');

//         // Reset form fields after submission
//         registrationForm.reset();
//     });
// });




function initiatePayment() {
    // Simulate payment process (replace with actual payment logic)
    const paymentMethod = document.getElementById('paymentMethod').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billingAddress').value;

    console.log(`Payment Method: ${paymentMethod}`);
    console.log(`Card Number: ${cardNumber}`);
    console.log(`Expiration Date: ${expirationDate}`);
    console.log(`CVV/CVC: ${cvv}`);
    console.log(`Billing Address: ${billingAddress}`);

    alert('Payment Successful!');
}

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const postalCode = document.getElementById('postalCode').value;
        const country = document.getElementById('country').value;
        const mobilePhone = document.getElementById('mobilePhone').value;
        const lessonType = document.getElementById('lessonType').value;
        const dateTime = document.getElementById('dateTime').value;
        const cuisine = document.getElementById('cuisine').value;
        const skillLevel = document.getElementById('skillLevel').value;

        // Mock registration submission (replace with actual logic)
        console.log(`Full Name: ${fullName}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`Address: ${address}, ${city}, ${state}, ${postalCode}, ${country}`);
        console.log(`Mobile Phone: ${mobilePhone}`);
        console.log(`Lesson Type: ${lessonType}`);
        console.log(`Date & Time: ${dateTime}`);
        console.log(`Preferred Cuisine: ${cuisine}`);
        console.log(`Skill Level: ${skillLevel}`);

        alert('Registration Successful!');

        // Reset form fields after submission
        registrationForm.reset();
    });
});
