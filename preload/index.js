const { contextBridge,ipcRenderer } = require("electron")

const sendUrl = async ( url ) => {
    let result = await ipcRenderer.invoke('on-url-event',url)
    return result
}

const alert = ( msg ) => {
    let result = ipcRenderer.invoke('on-alert-event',msg)
    return result
}

const open = ( url ) => {
    ipcRenderer.invoke('on-open-event',url)
}


contextBridge.exposeInMainWorld('myApi',{
    sendUrl,
    alert,
    open
})