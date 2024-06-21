import { ref } from 'vue'

const currentIndex = ref(0)

const useIndex = () => {

    const currentIndex = ref(0)

    const handleItemClick = (i,url) => {
        currentIndex.value = i
        myApi.open(url)
    }

    return {
        currentIndex,
        handleItemClick
    }

}

export default useIndex