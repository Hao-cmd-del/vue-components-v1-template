// pinnia
import { defineStore } from 'pinia'
import router from '@/router'
import { ElMessage } from 'element-plus'
export const useUserStore = defineStore('user', {
    persist: true,
    state: () => ({
        user: null,
        token: null,
    }),
    actions: {
        setUser(user) {
            this.user = user
        },
        setToken(token) {
            this.token = token
        },
        logout() {
            ElMessage.success("退出登录");
            this.user = null
            this.token = null
            localStorage.clear()
            setTimeout(() => {
                router.push("/login")
            }, 800);
        }
    },
    getters: {
        getUser: (state) => state.user,
        getToken: (state) => state.token,
    }
})
