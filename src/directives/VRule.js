/**
 * 权限按钮
 */

// mock后台返回数据
const permissionList = [
    "xiaoxin-bt:shop:create",
    "xiaoxin-bt:shop:edit",
    "xiaoxin-bt:shop:delete",
];

export const VRule = (el, bind) => {
    console.log(el, bind);

    if (!bind.value) {
        return;
    }
    const { value } = bind; // 获取权限

    const userId = localStorage.getItem("userId"); // 获取用户id
    if (permissionList.includes(`${userId }:${ value}`)) {
        return;
    } else {
        // el.style.display = "none";
        el.remove();
    }
};
