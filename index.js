const { app, BrowserWindow } = require('electron')
const path = require('path')

/**
 * 加载index.html并开启窗口
 */
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

/**
 * 监听窗口创建事件并返回
 */
app.whenReady().then(() => {
    createWindow()
    // MacOs中，没有窗口的情况下激活应用，就新开一个窗口
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

/**
 * 在Windows/Linux中窗口关闭则关闭应用
 * 在MacOs中关闭窗口后也不关闭应用
 */
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

