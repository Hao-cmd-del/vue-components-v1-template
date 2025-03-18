<template>
  <div>
    <newTable :tableConfig="tableConfig" :loading="loading"></newTable>
  </div>
</template>

<script setup>
import newTable from "@/components/newTable/index.vue";
import { ref } from "vue";
const tableConfig = ref({
  columns: [
    {
      label: "ID",
      prop: "id",
      width: "",
      align: "",
    },
    {
      label: "中标会员",
      prop: "allocationStatus",
      width: "",
      align: "",
      showSlot: true,
    },
    {
      label: "操作",
      width: "",
      align: "center",
      showSlot: true,
      action: true,
    },
  ],

  selection: {
    show: true,
    width: "55",
    fixed: true,
  },
  border: true,
});
const pageInfo = ref({
  pageSize: 10,
  pageNum: 1,
  total: 0,
});
const loading = ref(false);
</script>
