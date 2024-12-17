(function() {
    
    emailjs.init("tUWd8NbPyO64bDzq0"); //user ID on EmailJS, 
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const serviceID = "service_wilcton";
    const templateID = "template_a394ytc";

  
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert("Message sent successfully!");
          
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please check your email is correct.");
        });
});
