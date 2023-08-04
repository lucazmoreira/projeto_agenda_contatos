const form = document.getElementById("contactForm");
const contactsList = document.getElementById("contactsList");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name.trim() === "" || phone.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const contactItem = document.createElement("div");
  contactItem.innerHTML = `
    <strong>${name}</strong>
    <p>Telefone: ${phone}</p>
    <hr>
  `;

  contactsList.appendChild(contactItem);

  form.reset();
});
