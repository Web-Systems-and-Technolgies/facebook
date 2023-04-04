// window.onload = (event) => {
//   let myAlert = document.querySelector(".toast");
//   let bsAlert = new bootstrap.Toast(myAlert);
//   bsAlert.show();
// };
const toastButton = document.querySelector("#toast-button");
const toastContent = document.querySelector(".toast");

if (toastButton) {
  toastButton.addEventListener("click", function () {
    const toast = new bootstrap.Toast(toastContent);
    toast.show();
  });
}
