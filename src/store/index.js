import { createPinia } from 'pinia'
import * as modules from './modules/user'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


export const useUserStore = modules.useUserStore;

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

export default pinia

