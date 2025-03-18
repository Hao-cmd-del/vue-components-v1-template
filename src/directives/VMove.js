/**
 * 滑动指令 
 * 边界：基于浏览器
 */
export const VMove = (el, bind) => {
    console.log(el, 'eee');
    let moveElement = el.firstElementChild;
    // 获取元素的宽度和高度
    let elWidth = el.offsetWidth;
    let elHeight = el.offsetHeight;
    // 获取浏览器窗口的宽度和高度
    let parentWidth = window.innerWidth;
    let parentHeight = window.innerHeight;
    // 鼠标按下事件
    moveElement.addEventListener('mousedown', (e) => {
        // 减去鼠标在元素内部的偏移量
        let offsetX = e.clientX - el.offsetLeft;
        let offsetY = e.clientY - el.offsetTop;
        let onMouseMove = (e) => {
            // 移动元素
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;
            // 设置边界
            if (newLeft < 0) {
                newLeft = 0;
            } else if (newLeft > parentWidth - elWidth) {
                newLeft = parentWidth - elWidth;
            }
            if (newTop < 0) {
                newTop = 0;
            } else if (newTop > parentHeight - elHeight) {
                newTop = parentHeight - elHeight;
            }
            el.style.left = `${newLeft }px`;
            el.style.top = `${newTop }px`;
        };
        // 鼠标移动事件
        document.addEventListener('mousemove', onMouseMove)
        // 鼠标松开事件
        document.addEventListener('mouseup', (e) => {
            console.log(e, 'mouseup');
            // 清除移动事件
            document.removeEventListener('mousemove', onMouseMove)
        })
    })
}   