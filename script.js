window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }

  });
}
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");

  // Define cor da borda conforme o tipo
  if (type === "success") toast.style.borderLeft = "6px solid #28a745";
  else if (type === "error") toast.style.borderLeft = "6px solid #dc3545";
  else toast.style.borderLeft = "6px solid #007bff";

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}