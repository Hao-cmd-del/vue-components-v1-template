<template>
  <div class="container">
    <!-- 表单 -->
    <el-form
      ref="ruleFormRef"
      :style="`max-width:${formList.formConfig.formStyle.width}`"
      :model="formList.formData"
      :rules="formList.formRules"
      :label-width="formList.formConfig.labelWidth"
      class="demo-ruleForm"
      :size="formSize"
      :inline="inline"
      status-icon
    >
      <template v-for="(item, index) in formList.formDataType" :key="index">
        <el-form-item :label="item.label" :prop="item.meta.prop">
          <component
            :is="formMap[item.type]"
            :meta="item.meta"
            :object="formList.formData"
          />
        </el-form-item>
      </template>

      <el-form-item>
        <el-button
          :type="btnItem.type"
          @click="handleButtonClick(btnItem)"
          v-for="(btnItem, index) in formList.formConfig.btnList"
          :key="index"
          >{{ btnItem.text }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import inputCom from "./model/inputCom.vue";
import selectCom from "./model/selectCom.vue";
import dateTimePickerCom from "./model/dateTimePickerCom.vue";
import radioCom from "./model/radioCom.vue";
import checkboxCom from "./model/checkBoxCom.vue";
import switchCom from "./model/switchCom.vue";

import { ref, defineProps } from "vue";
const ruleFormRef = ref(null);
const props = defineProps({
  formList: {
    type: Object,
    default: () => {},
  },
  inline: {
    type: Boolean,
    default: false,
  },
});
/**
 * 按钮点击事件
 * @param {*} btnItem 按钮配置
 */
const handleButtonClick = async (btnItem) => {
  if (btnItem.text === "提交" || btnItem.text === "新增") {
    try {
      //  校验
      await ruleFormRef.value.validate((valid) => {
        if (valid) {
          //  提交
          btnItem.click(props.formList.formData);
        } else {
          return false;
        }
      });
    } catch (error) {
      console.error("表单验证失败:", error);
      return false;
    }
  } else {
    btnItem.click(props.formList.formData, { ruleFormRef });
  }
};
const formMap = {
  input: inputCom,
  select: selectCom,
  timePicker: dateTimePickerCom,
  radio: radioCom,
  checkbox: checkboxCom,
  switch: switchCom,
};

// 暴露方法给父组件
defineExpose({
  ruleFormRef,
  validate: () => ruleFormRef.value?.validate(),
  resetFields: () => ruleFormRef.value?.resetFields(),
  clearValidate: (props) => ruleFormRef.value?.clearValidate(props),
});
</script>
<style lang="scss" scoped></style>
