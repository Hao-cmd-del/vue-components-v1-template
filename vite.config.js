import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default (({ command, mode }) => {
  console.log(command, mode, 'command, mode');
  let PropxUrl = loadEnv(mode, process.cwd()).VITE_APP_API_URL

  return defineConfig({
    plugins: [vue()],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name]-[hash].js',
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames(assetInfo) {
            if (assetInfo.name.endsWith('.css')) {
              return 'css/[name]-[hash].css'
            }
            const imgExit = [
              '.png',
              '.jpg',
              '.jpeg',
              '.gif',
              '.ico',
              '.svg'
            ]
            if (imgExit.some(ext => assetInfo.name.endsWith(imgExit))) {
              return 'imgs/[name]-[hash].[ext]'
            }
            return 'assets/[name]-[hash].[ext]'
          }
        }
      }
    },
    // 配置@
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      // host: '0.0.0.0', // 设置主机地址
      proxy: {
        '/api': {
          target: PropxUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
})


