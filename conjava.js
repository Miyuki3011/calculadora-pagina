const pantalla = document.querySelector(".Pantalla");

function agregar(valor) {


    if (valor === "C") {
        pantalla.textContent = "0";
        return;
    }


    if (valor === "←") {
        if (pantalla.textContent.length === 1|| pantalla.textContent === "Error")  {
            pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
    }

    if (valor === "=") {
        try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch {
            pantalla.textContent = "Error";
            
        }
        return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent ==="Error") {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
}