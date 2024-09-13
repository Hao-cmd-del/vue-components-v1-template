// 引入FileSaver.js
import { saveAs } from 'file-saver';

/**
 * 下载文件
 */
export function downloadFile(name = 'temp.txt', data) {
    var blob = new Blob([data]);
    saveAs(blob, name);
}