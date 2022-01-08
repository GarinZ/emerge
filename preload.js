/**
 * 预加载器
 * 用于访问渲染器进程(window、document对象)和Node.js
 */

/**
 * 监听WindowOnload方法
 * 拼接版本号
 */
window.addEventListener('DOMContentLoaded', () => {
    // 声明一个innerText替换函数
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }
    // 将每个depency拼接上版本号
    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})