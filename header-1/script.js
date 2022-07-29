window.onload = function () {
    setElementSize();
    setAnimation();
};

window.onresize = function () {
    setElementSize();
    setAnimation();
};

function setElementSize() {
    if (window.innerWidth > 992) {
        const brandWidth = document.querySelector('#logo').offsetWidth;
        document.querySelector('.drop').style.width = brandWidth + 'px';
    }
}

function setAnimation() {
    const wrap = document.querySelector('.notification');
    const text = document.querySelector('.notification-text');

    if (wrap.scrollWidth - wrap.offsetWidth > 0) {
        text.style.animation = 'scrolling-text infinite 15s linear';
    } else {
        document.querySelector('.notification-text').style.animation = '';
    }
}
