<template>
  <div class="viewBox">
    <div class="container" ref="containerRef">
      <img
        src="https://inews.gtimg.com/om_bt/OAVMydtx9BsJxf5i_thi4Oll9sR1px-Esmtv6UHSxoisEAA/641"
        alt=""
      />
      <img
        src="https://inews.gtimg.com/om_bt/OAVMydtx9BsJxf5i_thi4Oll9sR1px-Esmtv6UHSxoisEAA/641"
        alt=""
      />
      <img
        src="https://inews.gtimg.com/om_bt/OAVMydtx9BsJxf5i_thi4Oll9sR1px-Esmtv6UHSxoisEAA/641"
        alt=""
      />
      <img
        src="https://inews.gtimg.com/om_bt/OAVMydtx9BsJxf5i_thi4Oll9sR1px-Esmtv6UHSxoisEAA/641"
        alt=""
      />
      <img
        src="https://inews.gtimg.com/om_bt/OAVMydtx9BsJxf5i_thi4Oll9sR1px-Esmtv6UHSxoisEAA/641"
        alt=""
      />
      <img
        src="https://inews.gtimg.com/om_bt/OAVMydtx9BsJxf5i_thi4Oll9sR1px-Esmtv6UHSxoisEAA/641"
        alt=""
      />
      <img
        src="https://inews.gtimg.com/om_bt/OAVMydtx9BsJxf5i_thi4Oll9sR1px-Esmtv6UHSxoisEAA/641"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, nextTick } from "vue";
const containerRef = ref(null);
const resize_body = () => {
  let height = containerRef.value.offsetHeight;
  document.body.style.height = height + "px";
};
const scroll = () => {
  // 设置容器位置
  // scrollY 是页面滚动距离 全局的
  containerRef.value.style.transform = `translateY(${-scrollY}px)`;
};

onMounted(() => {
  window.addEventListener("load", resize_body);
  window.addEventListener("resize", resize_body);
  window.addEventListener("scroll", scroll);
});
</script>
<style  scoped>
.viewBox {
  position: fixed;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.container {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.15s ease;
}
img {
  width: 1000px;
  height: 600px;
  margin: 30px;
}
</style>
