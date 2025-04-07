// Agregar nueva recomendación
function addRecommendation() {
    const inputName = document.getElementById("recommendation_name");
    const inputMsg = document.getElementById("recommendation_input");
    const list = document.getElementById("recommendations_list");

    // Validar mensaje
    if (inputMsg.value.trim() === "") {
        alert("Please enter a message before submitting.");
        return;
    }

    // Crear nuevo contenedor de recomendación
    const newRec = document.createElement("div");
    newRec.className = "recommendation";

    // Texto combinado
    let fullText = inputMsg.value.trim();
    if (inputName.value.trim() !== "") {
        fullText += " — " + inputName.value.trim();
    }

    newRec.textContent = fullText;

    // Agregar al listado
    list.appendChild(newRec);

    // Limpiar campos
    inputName.value = "";
    inputMsg.value = "";

    // Mostrar popup
    showPopup(true);
}

// Mostrar/ocultar popup
function showPopup(status) {
    const popup = document.getElementById("popup");

    if (status === true) {
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);
    } else {
        popup.style.display = "none";
    }
}