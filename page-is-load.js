document.addEventListener("DOMContentLoaded", function () {
    // Yükleyici ve içerik elementlerini al
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Eğer loader varsa, onu gizle
    if (loader) {
        setTimeout(() => {
            // Bekleme süresi ekleyerek daha akıcı geçiş sağlar
            loader.classList.add("hidden"); 
            document.body.classList.remove("loading");
        }, 500); // 0.5 saniye gecikme (isteğe bağlı artırılabilir)
    }
});