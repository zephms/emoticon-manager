let ipcRenderer = require('electron').ipcRenderer;
var max = document.getElementById('max');
if (max) {
    max.addEventListener('click', () => {
        //发送最大化命令
        ipcRenderer.send('window-max');
        //最大化图形切换
        if (max.getAttribute('src') == '../imgs/max.png') {
            max.setAttribute('src', '../imgs/maxed.png');
        } else {
            max.setAttribute('src', '../imgs/max.png');
        }
    })
}

var min = document.getElementById('min');
if (min) {
    min.addEventListener('click', () => {
        //发送最小化命令
        ipcRenderer.send('window-min');
    })
}

var close = document.getElementById('close');
if (close) {
    close.addEventListener('click', () => {
        //发送关闭命令
        ipcRenderer.send('window-close');
    })
}
