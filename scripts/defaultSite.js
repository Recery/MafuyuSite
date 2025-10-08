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
        scrollPattern.style.height = document.body.scrollHeight + "px";
        document.body.appendChild(scrollPattern);
    });
}
setDefaultSite();