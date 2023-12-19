const originalArray = [2, 8, 32, 128, 512, 2048];
const newArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  newArray.push(originalArray[i]);
}

console.log("Original Array:", originalArray);
console.log("New Array:", newArray);

document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.getElementById("buttons-container");
  const modal = document.getElementById("myModal");

  for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    button.textContent = `Button ${i}`;
    button.addEventListener("click", function () {
      showModal(`You clicked on Button ${i}`);
    });

    buttonsContainer.appendChild(button);
  }

  function showModal(message) {
    const modalContent = document.getElementById("modal-content");
    modalContent.textContent = message;
    modal.style.display = "block";
  }

  document.getElementById("close-btn").addEventListener("click", function () {
    modal.style.display = "none";
  });
});
