const { Menu,dialog } = require('electron')
const { default: imageType } = require('image-type')
const got = require('got').default
const imagetype = require('image-type')
const path = require('path')
const randomstring = require('randomstring')


const saveas = async (srcURL) => {
    if(srcURL){
        const contextMenu = Menu.buildFromTemplate([
            {
                label:'图片另存为...',
                click:  () => {
                    got.get(srcURL).then(async (response) => {
                        //将文件内容转换成二进制流
                        const  chunk = Buffer.from(response.rawBody)
                        //获取图片类型
                        const imgtype = imagetype(chunk).ext
                        //使用随机字符串给图片命名
                        const imgName = randomstring.generate(10)

                        myApi.fileWirte(chunk)
                        //打开本地对话框，并filePath、canceled参数
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
                    }).catch((e) => {})

                }
            }
        ])
        contextMenu.popup()
    }
}

module.exports = saveas