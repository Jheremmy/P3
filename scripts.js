document.addEventListener('DOMContentLoaded', () => {
    const toggleContrastBtn = document.getElementById('BtnContraste');
    const increaseFontBtn = document.getElementById('IncrementoL');
    const decreaseFontBtn = document.getElementById('DisminuirL');
    const body = document.body;
    
    increaseFontBtn.addEventListener('click', () => {
        let fontSize = parseInt(window.getComputedStyle(body).fontSize);
        body.style.fontSize = (fontSize + 1) + 'px';
    });

    decreaseFontBtn.addEventListener('click', () => {
        let fontSize = parseInt(window.getComputedStyle(body).fontSize);
        body.style.fontSize = (fontSize - 1) + 'px';
    });
});