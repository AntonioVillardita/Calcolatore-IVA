
const inputPrezzo = document.getElementById("prezzo");
const selectIva = document.getElementById("selectIva");
const prezzoConIva = document.getElementById("pricePlus");
const campoIva = document.getElementById("iva");

function calcola(){
    const prezzo = parseFloat(inputPrezzo.value) || 0;
    const ivaScelta = parseFloat(selectIva.value);
    const soloIva = parseFloat(iva);

    const calcoloIva = (prezzo * ivaScelta) / 100;
    const totale = prezzo + calcoloIva;

    campoIva.value = "€" + calcoloIva.toFixed(2).replace(".", ",");
    prezzoConIva.value = "€" + totale.toFixed(2).replace(".", ",");
}

inputPrezzo.addEventListener("input", calcola);
selectIva.addEventListener("change", calcola);
