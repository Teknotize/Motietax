// document.addEventListener("DOMContentLoaded", function () {
//   emailjs.init("Shlb63OBTO14n9iqh");

//   function sendEmail(event) {
//     event.preventDefault();
//     const email = document.getElementById("email_subscribe").value;

//     if (!email) {
//       alert("Please fill in the email field");
//       return;
//     }

//     const emailData = {
//       from_email: email,
//       subject: `New message from Consultore`,
//       message: `New message from Consultore:\n\n${email}`,
//     };

//     emailjs.send("service_ydkynv8", "template_3s63ppa", emailData).then(
//       function (response) {
//         alert("Subscribed successfully!");
//         document.getElementById("subscribe-form").reset();
//       },
//       function (error) {
//         alert("Oops! Something went wrong. Please try again.");
//       }
//     );
//   }

//   document
//     .getElementById("subscribe-form")
//     .addEventListener("submit", sendEmail);
// });
