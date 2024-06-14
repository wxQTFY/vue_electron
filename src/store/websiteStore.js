import { defineStore } from "pinia"

import store from "store2"

const useWebsiteStore = defineStore('websiteStore',{
    state: () => {
        return {
            websites:[]
        }
    },
    actions:{
        add(item){
            this.websites.unshift(item)
            store('websites',this.websites)
        }
    }
})


export default useWebsiteStore