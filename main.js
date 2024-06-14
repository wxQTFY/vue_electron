const { app,BrowserWindow } = require('electron')
const path = require('path')
const  WinState  = require ('electron-win-state').default

//调用网站截图
require('./controller/getSource')


const createWindow = () => {
    const winState = new WinState({
        //自定义窗口状态
        defaultWidth:1000,
        defaultHeight:800, 
    })
    const win = new BrowserWindow({
        //自定义窗口状态
        ...winState.winOptions,
        webPreferences: {
            //定义预加载JS
            preload: path.resolve(__dirname, './preload/index.js')
          },
        show:false
    })
    
    
    win.loadURL('http://localhost:5173/')

    win.webContents.openDevTools ()

    winState.manage(win)

    //优雅地显示窗口
    win.once('ready-to-show',() => {
        win.show()
    })

}

app.whenReady().then(() => {
    createWindow()
    
    //如果没有窗口打开，则打开一个宽口（macOS）
    app.on('activate',() => {
        if (BrowserWindow.getAllWindows().length===0)
            createWindow()
    })

    

    //关闭所有窗口退出应用
    app.on('window-all-closed',() => {
        if (process.platform !== 'darwin') app.quit()
    })
})