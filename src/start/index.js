const { globSync } = require("glob")
const fs = require("fs")
function start() {
  console.log("[自动获取全部可显示页面]")
  let files = globSync("./src/views/**/*.vue")
  files = files.map((item) => {
    return item.replace(/\\/g, "/")
  })
  let str = ""
  files.forEach((item) => {
    let n = item.replace('src/', '@/');
    str += `"${n}":()=>import("${n}"),\r\n`
  })
  fs.writeFileSync("./src/router/all.router.js", `
    export const ROUTERSDATA = {
    ${str}
    }`)
  console.log("[./src/router/all.router.js 写入]")
}

start();