const API_URL = "https://script.google.com/macros/s/AKfycbxEjXWRsp9bguw-rjiVDD6wh4ifu2mzs8G53D6lxtPR8qzjxljX3zY6wHrjmy5Vcbrx/exec";

async function mulaiRedirect() {
    const status = document.getElementById("status");
    const loader = document.getElementById("loader");

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.success && data.url) {
            status.textContent = "Grup tersedia: " + data.nama;
            loader.style.display = "none";

            setTimeout(() => {
                window.location.href = data.url;
            }, 2000);

        } else {
            status.textContent = data.message || "Seluruh grup sedang penuh.";
            loader.style.display = "none";
        }

    } catch (error) {
        status.textContent =
            "Terjadi kendala saat menghubungkan ke server. Silakan coba kembali.";
        loader.style.display = "none";

        console.error("Kesalahan:", error);
    }
}

mulaiRedirect();
