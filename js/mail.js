function sendEmail(){

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "deepakgowda890455@gmail.com",
    Password : "0902913BECD6549ABCC3F878F6F888BABA7F",
    To : 'manojgowda.j.s93800@gmail.com',
    From : "deepakgowda890455@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("ok")
);
}
