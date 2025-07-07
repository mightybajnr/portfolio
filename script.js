const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  sendEmail(name, subject, message);
});

function sendEmail(name, subject, message) {
  emailjs
    .send("service_o2wy0ta", "template_if91zcj", {
      subject: subject,
      name: name,
      message: message,
    })
    .then(() => alert("Email sent successfully!"));
}
