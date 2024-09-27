import { ref, watchEffect } from "vue"

// 存储切换主题的key
const LOCAL_KEY = '__theme__'

const theme = ref(localStorage.getItem(LOCAL_KEY) || 'light')

watchEffect(() => {
    if (localStorage.getItem(LOCAL_KEY)) {
        document.documentElement.dataset.theme = theme.value
    }

    localStorage.setItem(LOCAL_KEY, theme.value)
})


export default function useTheme() {
    return { theme }
}