/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const setBackgroundBtn1 = document.getElementById('set-background-one');
const setBackgroundBtn2 = document.getElementById('set-background-two');

showBtn.addEventListener('click', () => {
    window.electronAPI.toggleVisibility(true);
});

hideBtn.addEventListener('click', () => {
    window.electronAPI.toggleVisibility(false);
});

setBackgroundBtn1.addEventListener('click', () => {
    window.electronAPI.setBackground('blue');
});

setBackgroundBtn2.addEventListener('click', () => {
    window.electronAPI.setBackground('yellow');
});