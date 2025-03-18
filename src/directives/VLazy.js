/**
 * 懒加载指令
 */
// 用不到其他生命周期所以直接使用函数模式就可以了
export const VLazy = async (el, binding) => {
  const def = await import("@/assets/vue.svg");
  el.src = def.default;
  // 划到可视区域的时候加载图片
  // IntersectionObserver 交叉观察器

  const observer = new IntersectionObserver((entries) => {
    //entries[0].intersectionRatio 可是区域的比例
    if (entries[0].intersectionRatio > 0) {
      setTimeout(() => {
        el.src = binding.value;
        // 移除观察器
        observer.unobserve(el);
      }, 1000);
    }
  });
  observer.observe(el);
};
