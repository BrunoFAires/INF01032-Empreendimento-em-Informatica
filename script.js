const form = document.querySelector("#contactForm");

  
async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

	try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbywgHaxMhLS-3JMD8z2psv4oT3xBfi6XTP2logpbSPBHH5pLs3xoqpgeaDNcZqov0FV/exec", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}
  
form.addEventListener("submit", (event) => {
 var botao = document.getElementById('sendFormButton');
  botao.disabled = true;
event.preventDefault();
sendData()
	.then(response => alert("Obrigado. O seu interesse foi registrado com sucesso!" ))
  .then(() => { window.location.reload(); });
});


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);

