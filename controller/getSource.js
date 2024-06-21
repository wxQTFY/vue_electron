const { ipcMain, BrowserWindow } = require ('electron')

const getSource = ( url ) => {
    return new Promise(( resolve,reject ) => {
        const win = new BrowserWindow({
            width:800,
            height:800,

            show:false,
            webPreferences:{
                offscreen: true
            }
        })
        win.loadURL(url)
        win.webContents.on('did-finish-load',async () => {
            const title = win.getTitle()
            try{
                //NativeImage图片
                const image = await win.webContents.capturePage()
                console.log(image)
                
                if (image.isEmpty()) {
                    resolve({
                        msg:'站点错误，请重新输入'
                    }
                    )
                } else {
                    const screenshot = image.toDataURL()
                    resolve({
                        title,
                        screenshot,
                        url
                    })  
                }
                
            }catch(e){
                reject(e)
            }
        })
    })
}

ipcMain.handle('on-url-event' , async( e,url ) => {
    const result = await getSource(url)
    return result
})
