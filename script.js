// ================= NAVIGATION MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// ================= FAQ =================

function toggleFAQ(button) {

    const faq = button.parentElement;

    faq.classList.toggle("active");

}


// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all the fields.");

        return;
    }

    alert(
        "Thank you, " + name +
        "! Your message has been submitted successfully."
    );

    document.getElementById("contactForm").reset();

});