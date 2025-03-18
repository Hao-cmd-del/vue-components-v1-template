<template>
  <el-table
    class="tablebox"
    v-bind="props"
    v-on="$attrs"
    :cell-style="tableCellStyle"
    :border="props.tableConfig.border"
    :header-cell-style="tableHeaderCellStyle"
    :row-style="tableRowStyle"
    v-loading="loading"
    ref="tableRef"
    :empty-text="emptyText"
  >
    <el-table-column
      v-if="props.tableConfig.selection.show"
      type="selection"
      :reserve-selection="props.tableConfig.selection.reserveSelection || false"
      :width="props.tableConfig.selection.width || 55"
      :fixed="props.tableConfig.selection.fixed"
    ></el-table-column>
    <el-table-column
      v-for="item in props.tableConfig.columns"
      :key="item.prop"
      :width="item.width"
      :min-width="item.minWidth"
      :fixed="item.fixed"
      :label="item.label"
      :align="item.align"
      :prop="item.prop"
      v-role="item.role"
      :show-overflow-tooltip="item.showOverflowTooltip"
    >
      <template #default="scope">
        <!-- 插槽 -->
        <slot
          v-if="item.showSlot"
          :name="`${item.prop}-slot`"
          :scope="scope"
        ></slot>

        <span v-else>
          <span v-if="scope.row[item.prop] && scope.row[item.prop] != 0">{{
            scope.row[item.prop]
          }}</span>
          <span v-else>-</span>
        </span>
        <!-- 默认插槽 -->
        <slot name="action" v-if="item.action" :scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { tableHeaderCellStyle, tableCellStyle } from "@/utils/tableStyle.js";
import { ref } from "vue";
const props = defineProps({
  tableConfig: {
    required: true,
    type: Object,
  },
  emptyText: {
    type: String,
    default: "暂无数据",
  },
});

const tableRef = ref(null);
// 暴露 el-table 的实例给父组件
defineExpose({
  getTableRef: () => tableRef.value,
});
</script>

<style lang="scss" scoped></style>
