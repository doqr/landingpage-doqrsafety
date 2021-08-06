export default function Cookies() {
  const cookieContainer = document.querySelector(".cookies");
  const btnCookie = document.querySelector(".cookies button");

  btnCookie.addEventListener("click", () => {
    cookieContainer.style.display = "none";
    cookieContainer.style.opacity = "0";
  });
}
