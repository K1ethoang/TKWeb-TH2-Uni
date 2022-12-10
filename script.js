const form = document.querySelector(".form");

if (form.addEventListener) {
  form.addEventListener("submit", () => alert("Đã gửi thành công!"));
}
