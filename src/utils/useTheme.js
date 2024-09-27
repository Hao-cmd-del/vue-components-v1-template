import { ref, watchEffect } from "vue"

// 存储切换主题的key
const LOCAL_KEY = '__theme__'

// 获取当前主题，默认为light
const theme = ref(localStorage.getItem(LOCAL_KEY) || 'light')

/**
 * 跟随系统切换主题
 */
const match = matchMedia('(prefers-color-scheme: dark)')
// 变化的时候，重新设置主题
match.addEventListener('change', followSystemTheme())

// 跟随系统主题
function followSystemTheme() {
    if (match.matches) {
        document.documentElement.dataset.theme = 'dark'
    } else {
        document.documentElement.dataset.theme = 'light'
    }
}


/**
 * 监听主题变化，并存储到localStorage
 */
watchEffect(() => {
    localStorage.setItem(LOCAL_KEY, theme.value)
    if (theme.value === 'OS') {
        followSystemTheme()
    } else {
        document.documentElement.dataset.theme = theme.value
    }
})


export default function useTheme() {
    return { theme }
}