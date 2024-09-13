<template>
  <el-table
    class="tablebox"
    v-bind="props"
    v-on="$attrs"
    :cell-style="tableCellStyle"
    :header-cell-style="tableHeaderCellStyle"
    :row-style="tableRowStyle"
    v-loading="pageInfo.loading"
  >
    <slot> </slot>
  </el-table>
</template>

<script>
import { tableHeaderCellStyle, tableCellStyle } from "@/utlis/tableStyle.js";
import { pageMixin } from "@/mixins/pageMixin.js";
export default {
  mixins: [pageMixin],
  setup() {
    const tableRowStyle = (row, totalRows) => {
      return {
        background:
          row.rowIndex % 2 === 0
            ? "rgba(255,255,255,1)"
            : "rgba(237,237,237,1)",
        height: "37px", // 设置每一行的高度为平均分配后的视口高度
      };
    };

    return {
      tableRowStyle,
      tableHeaderCellStyle,
      tableCellStyle,
    };
  },
};
</script>
<style lang="scss" scoped>
.tablebox {
  border: 1px solid #444b5f !important;
  overflow-y: hidden;
  height: calc(100vh - (160px + 70px + 100px));
}
/* 假设固定行数为10 */
:deep(.el-table__cell) {
  padding: 0;
}
//  :deep(.el-table__header-wrapper) {
//     height: 20px;
//   }
</style>
