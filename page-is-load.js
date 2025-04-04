  // Sayfa yüklenmeden önce scroll'ı gizle
  document.documentElement.classList.add("loading");

  window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";

    setTimeout(function () {
      preloader.style.display = "none";
      document.documentElement.classList.remove("loading"); // Scroll'u geri getir
    }, 500);
  });
