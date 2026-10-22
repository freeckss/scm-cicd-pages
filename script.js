document.addEventListener("DOMContentLoaded", () => {
  const statusBtn = document.getElementById("statusBtn")
  const output = document.getElementById("output");

  statusBtn.addEventListener("click", () => {
    const timestamp = new Date().toLocaleTimeString();
    output.textContent = `All systems verified clean at ${timestamp}.`;
  });
});