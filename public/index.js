handleResize = () => {
    const target = document.getElementById('grid');
    const width = Math.min(window.innerWidth, window.screen.width);
    const height = Math.min(window.innerHeight, window.screen.height);

    target.style.width = width + "px";
    target.style.height = height + "px";
};

window.onload = handleResize;
window.addEventListener('resize', handleResize);