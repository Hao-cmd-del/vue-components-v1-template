import FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
import { nextTick } from 'vue'



const exportToExcel = async (element, name) => {
    // 设置导出的内容是否只做解析，不进行格式转换 false：要解析， true:不解析
    const xlsxParam = { raw: true }
    let wb
    if (typeof element === 'string') { // 导出单个表格
        wb = XLSX.utils.table_to_book(document.getElementById(element), xlsxParam)
    } else { // 遍历导出多个表格
        wb = XLSX.utils.book_new();
        element.forEach((item) => XLSX.utils.book_append_sheet(wb, XLSX.utils.table_to_sheet(document.getElementById(item.eleById), xlsxParam), item.title))
    }

    // 导出excel文件名
    const fileName = `${name || new Date().getTime()}.xlsx`

    const wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
    })
    try {
        // 下载保存文件
        FileSaver.saveAs(new Blob([wbout], {
            type: 'application/octet-stream'
        }), fileName)
    } catch (e) {
        console.log(e, wbout)
    }
    return wbout
}
export default exportToExcel
