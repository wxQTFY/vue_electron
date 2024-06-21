import { defineStore } from "pinia"

import store from "store2"

import _ from 'loadsh'
import { filter, find } from "lodash"

const useWebsiteStore = defineStore('websiteStore',{
    state: () => {
        return {
            websites:[]
        }
    },
    actions:{
        add(item){
            const isItem = _.find( this.websites,{ url:item.url}) 
            if(isItem){
                myApi.alert('此网站已经存在')
            }else{
                this.websites.unshift(item)
                store('websites',this.websites)
            }
        },
        init(){
            this.websites = store.get('websites')
        },

        deleteItem(url){
            // this.websites = _.dropWhile(this.websites,{ url }) 存在bug，必须顺序删除，无法随意删除
            this.websites = this.websites.filter((value) => {
               return value.url !== url
            })
            const result = store('websites',this.websites)
        }
    },

    getters:{
        find(){
            return (keywords) => {
                if(keywords === ''){
                    return this.websites
                }else{
                    const result = _.filter(this.websites,(item) => {
                        let partten = new RegExp(keywords,'i')
                        return partten.test(item.title)
                    })
                    return result
                }
           }
        }
    }
})


export default useWebsiteStore