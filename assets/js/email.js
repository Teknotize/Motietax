// // emailjs.init("Shlb63OBTO14n9iqh");

// // function sendEmail(event) {
// //   event.preventDefault();

// //   const name = document.getElementById("name").value;
// //   const email = document.getElementById("email").value;
// //   const message = document.getElementById("message").value;
// //   const phone = document.getElementById("phone").value;

// //   if (!name || !email || !message) {
// //     alert("Please fill in all fields");
// //     return;
// //   }

// //   // Send email to the user
// //   emailjs.send("YOUR_SERVICE_ID", "template_for_user", {
// //     from_name: name,
// //     from_email: email,
// //     phone: phone,
// //     message: message,
// //   });

// //   emailjs
// //     .send("service_ydkynv8", "template_bixtc7d", {
// //       from_name: name,
// //       from_email: email,
// //       phone: phone,
// //       message: message,
// //     })
// //     .then(
// //       function (response) {
// //         alert("Your Message Was Sent Successfully!");
// //         document.getElementById("contact-form").reset();
// //       },
// //       function (error) {
// //         alert("Oops! Something Went Wrong");
// //       }
// //     );
// // }

// // document.getElementById("contact-form").addEventListener("submit", sendEmail);
// emailjs.init("Shlb63OBTO14n9iqh");

// function sendEmail(event) {
//   event.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   const phone = document.getElementById("phone").value;

//   if (!name || !email || !message) {
//     alert("Please fill in all fields");
//     return;
//   }

//   // Send email to the user using a predefined template
//   emailjs.send("service_ydkynv8", "template_bixtc7d", {
//     from_name: name,
//     from_email: email,
//     phone: phone,
//     message: message,
//   });

//   // Send email to another recipient with a custom message
//   const customMessage = `
//     Hello,

//     This is a custom message sent from the contact form:

//     Name: ${name}
//     Email: ${email}
//     Phone: ${phone}
//     Message: ${message}

//     Regards,
//     Your Company`;

//   // Include the custom message in the Body parameter
//   emailjs
//     .send("service_ydkynv8", "template_bixtc7d", {
//       from_name: "abc",
//       from_email: "zainali5002@gmail.com",
//       to_email: "zainali5002@gmail.com",
//       subject: "Message from Contact Form",
//       Body: customMessage, // Pass the custom message as the Body
//     })
//     .then(
//       function (response) {
//         alert("Your Message Was Sent Successfully!");
//         document.getElementById("contact-form").reset();
//       },
//       function (error) {
//         alert("Oops! Something Went Wrong");
//       }
//     );
// }

// document.getElementById("contact-form").addEventListener("submit", sendEmail);
