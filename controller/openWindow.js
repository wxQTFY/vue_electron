const { ipcMain, BrowserWindow } = require ('electron')
const  WinState  = require ('electron-win-state').default
const path = require('path')
const fs = require('fs')

//调用图片保存
const saveas = require('./saveas')

const cssText = `width:80px; height:30px; background-color:blue; line-height:30px; position:fixed; bottom:100px; right:20px;z-index:1000;color:#fff;text-align:center;cursor:default`

const js = `
      const div = document.createElement("div");
      div.innerHTML = '关闭窗口'
      div.style.cssText = '${cssText}'
      div.addEventListener("click",() => { myApi.close() })
      document.body.appendChild(div)
`
let win = null
const openWindow = (url) => {
    const winState = new WinState({
        //自定义窗口状态
        defaultWidth:1000,
        defaultHeight:800, 
        electronStoreOptions:{
             name: 'window-state-open'
       }
    })
     win = new BrowserWindow({
            //自定义窗口状态
        ...winState.winOptions,
        webPreferences: {
            // //定义预加载JS
            preload: path.resolve(__dirname, '../preload/open.js'),
            nodeIntegration: true
        },
        show:false
    })
    win.loadURL(url)
    win.webContents.openDevTools ()

    winState.manage(win)
    win.webContents.executeJavaScript(js).catch(() =>{})

    //优雅地显示窗口
    win.once('ready-to-show',() => {
        win.show()
    })

    //右键点击保存图片
    win.webContents.on('context-menu',(e,args) => {
        saveas(args.srcURL)
    })

}



ipcMain.handle('on-open-event',(e,url) => {

    openWindow(url)

})

ipcMain.handle('on-close-event',(e) => {

    win.close()

})

ipcMain.handle('on-fileWrite-event',async (e,path,data) => {
    const { filePath,canceled } = await dialog.showSaveDialog({
        title:'图片另存为',
        defaultPath:path.resolve(__dirname,'../public/uploads/'+ imgName +'.'+ imgtype )
    })
    if(!canceled){
        console.log(10)
        console.log(myApi.fileWirte())
        myApi.fileWirte(filePath,chunk)
        console.log(100)
       
    }
    console.log("数据写入成功!!!！")
    fs.writeSync(path,data,(err) => {
        if(err){
            console.log(err)
        }
        console.log("success!!!！")
    })
})
