(function () {

    [...document.querySelectorAll(".control")].forEach(button => {

        button.addEventListener("click", function () {

            document
                .querySelector(".active-btn")
                .classList.remove("active-btn");

            this.classList.add("active-btn");

            document
                .querySelector(".active")
                .classList.remove("active");

            document
                .getElementById(this.dataset.id)
                .classList.add("active");

        });

    });

    document
        .querySelector(".theme-btn")
        .addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

        });

})();


// EMAILJS CODE

emailjs.init({
    publicKey: "1LLHk8bPKAS9cww1O",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_nm031dk",
        "template_bwktsd7",
        this
    )
    .then(() => {

        alert("Message Sent Successfully!");
        form.reset();

    })
    .catch((error) => {

        alert("Failed to Send Message");
        console.log(error);

    });

});