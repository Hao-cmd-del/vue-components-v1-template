import { onMounted, onUnmounted } from "vue"

// 创建观察者实例
const ob = new ResizeObserver(entries => {
    entries.forEach(entry => {
        const { width, height } = entry.contentRect;
        console.log(width, height);
    })
})

export default {
    onMounted() {
        ob.observe(document.body)
    },

    onUnmounted() {
        ob.unobserve(document.body)
    }
}