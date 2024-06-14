const { contextBridge,ipcRenderer } = require("electron")

const sendUrl = async ( url ) => {
    let result = await ipcRenderer.invoke('on-url-event',url)
    return result
}


contextBridge.exposeInMainWorld('myAPI',{
    sendUrl
})