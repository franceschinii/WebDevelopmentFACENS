function calculatePrice() {
  const fabricationCost = parseFloat(
    document.getElementById("fabricationCost").value
  );
  const distributorMarkup = parseFloat(
    document.getElementById("distributorMarkup").value
  );
  const taxesPercentage = parseFloat(
    document.getElementById("taxesPercentage").value
  );
  const finalPrice =
    fabricationCost * (1 + distributorMarkup / 100 + taxesPercentage / 100);
  document.getElementById("finalPrice").innerText = finalPrice.toFixed(2);
}

document
  .getElementById("fabricationCost")
  .addEventListener("change", calculatePrice);
document
  .getElementById("distributorMarkup")
  .addEventListener("change", calculatePrice);
document
  .getElementById("taxesPercentage")
  .addEventListener("change", calculatePrice);
