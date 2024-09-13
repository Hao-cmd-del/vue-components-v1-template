/** 统一处理 Cookie */

import Cookies from "js-cookie"
export const getCookie = (name) => {
    return Cookies.get(name)
}
export const setCookie = (name,value) => {
    Cookies.set(name, value)
}
export const removeCookie = (name) => {
    Cookies.remove(name)
}
