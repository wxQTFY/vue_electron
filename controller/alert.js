const { ipcMain,dialog } = require('electron')

const alertMsg= ( msg ) => {
    dialog.showMessageBox({
        message:msg,
        type: 'error',
        title:'错误'
    })   
}
ipcMain.handle('on-alert-event' , ( e,msg ) => {
    const result =  alertMsg(msg)
    return result
})
