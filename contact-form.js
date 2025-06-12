document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page reload
    
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xpwrqvbj", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });
      
      if (response.ok) {
        form.reset();
        form.style.display = "none";
        successMessage.style.display = "block";
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form. Please check your network.");
    }
  });
});