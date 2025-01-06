/**
 * 生产环境提示用户更新页面
 */

// 保存旧的html代码字符串
let oldHtml;

// 从服务端获取最新的html代码
async function fetchHtml() {
    // fetch('/index.html')获取的就是html文件，
    // 再用text()转为字符串
    // 加上时间戳避免缓存
    return await fetch(`/index.html?timestamp=${+new Date()}`).then((res) =>
        res.text()
    );
}

// 判断需不需要更新
async function needUpdate() {
    const newHtml = await fetchHtml();
    // 默认不需要更新
    let result = false;
    if (oldHtml && oldHtml !== newHtml) {
        // 有旧值，并且新旧值不同，才需要更新
        result = true;
    }
    // 没有旧值，或者新旧值一样，就无需更新

    // 无论用户更不更新版本，都更新旧值，
    // 这样当用户选择不更新时就不会再提示了
    // 除非刷新页面
    oldHtml = newHtml;
    return result;
}

// 递归调用，3秒一次
function autoRefresh() {
    setTimeout(async () => {
        if (await needUpdate()) {
            console.log("需要更新");
            const res = confirm("有新版本，点击确定更新");
            if (res) {
                location.reload();
            }
        }
        autoRefresh();
    }, 3000);
}

// 获取环境变量
const env = import.meta.env.VITE_APP_DEV;
if (env != "dev") {
    autoRefresh();
}
