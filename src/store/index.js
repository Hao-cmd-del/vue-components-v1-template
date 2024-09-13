import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入小仓库
import User from './User'
import carManage from './carManage'
const store = new Vuex.Store({
    // 实现Vuex仓库模块式开发数据存储
    modules: {
        // 定义一个模块
        User,
        carManage
    }
})

export default store