// 对外暴露一个函数
// 存储token
// TOKEN 是名字 用于获取token和删除本地存储
export const setToken = (token) => {
    localStorage.setItem('TOKEN', token)
}

// 获取token
export const getToken = () => {
    return localStorage.getItem('TOKEN')
}

// 清除本地存储token
export const removeToken = () => {
    return localStorage.removeItem('TOKEN')
}