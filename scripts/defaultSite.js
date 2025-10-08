function setDefaultSite() {
    // aplicar hoja de estilos
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "styles/default.css";
    document.head.appendChild(link);

    const scrollPattern = document.createElement("div");
    scrollPattern.className = "scroll-pattern";
    window.addEventListener("load", () => {
        const bodyHeight = document.body.scrollHeight;
        const vhInPx = window.innerHeight / 100;
        const bodyHeightInVh = bodyHeight / vhInPx;

        scrollPattern.style.height = bodyHeightInVh + "vh";
        document.body.appendChild(scrollPattern);
    });
}
setDefaultSite();