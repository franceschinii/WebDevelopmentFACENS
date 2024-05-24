const apiUrl = "https://664fdd2fec9b4a4a603005b6.mockapi.io/usuario";

async function saveData() {
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("phone").value;

  const data = { nome, email, telefone };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Dados salvos com sucesso!");
      document.getElementById("dataForm").reset();
    } else {
      alert("Falha ao salvar os dados.");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Ocorreu um erro.");
  }
}

async function syncData() {
  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      const dataTableBody = document
        .getElementById("dataTable")
        .querySelector("tbody");
      dataTableBody.innerHTML = "";

      data.forEach((item) => {
        const row = dataTableBody.insertRow();
        const cellNome = row.insertCell(0);
        const cellEmail = row.insertCell(1);
        const cellTelefone = row.insertCell(2);

        cellNome.textContent = item.nome;
        cellEmail.textContent = item.email;
        cellTelefone.textContent = item.telefone;
      });
    } else {
      alert("Falha ao buscar os dados.");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Ocorreu um erro.");
  }
}
