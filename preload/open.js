const { contextBridge,ipcRenderer } = require("electron")

const close = ( ) => {
    ipcRenderer.invoke('on-close-event')
}

const fileWirte = (path,data) => {
    console.log(11)
    ipcRenderer.invoke('on-fileWrite-event')
}
contextBridge.exposeInMainWorld('myApi',{
    close,
    fileWirte
})