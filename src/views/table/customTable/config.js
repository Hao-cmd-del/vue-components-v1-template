import { ref } from "vue";
import { ElMessage } from "element-plus";

/**
 * 提交
 * @param {*} formData 表单数据
 */
const handleSubmit = async (formData) => {
  try {
    // 这里可以调用API提交数据
    console.log("提交的数据：", formData);
    ElMessage.success("提交成功");
  } catch (error) {
    ElMessage.error("提交失败");
  }
};

/**
 * 重置
 * @param {*} formRef 表单实例
 */
const handleReset = (formRef) => {
  if (!formRef) return;
  formRef.ruleFormRef.value.resetFields();
  ElMessage.info("表单已重置");
};

/**
 * 搜索
 * @param {*} formData 表单数据
 */
const handleSearch = (formData) => {
  console.log("搜索数据：", formData);
};

// 表单配置
export const formConfig = ref({
  formConfig: {
    labelWidth: "",
    formStyle: {
      width: "100%",
    },
    btnList: [
      {
        text: "提交",
        type: "primary",
        click: handleSubmit,
      },
      {
        type: "success",
        text: "搜索",
        click: handleSearch,
      },
      {
        text: "重置",
        type: "danger",
        click: (_, formRef) => handleReset(formRef),
      },
    ],
  },
  formData: {
    name: "",
    sex: "",
    time: "",
    isSwitch: "",
    activityType: [],
    region: "",
  },
  formRules: {
    name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
    sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
    time: [{ required: true, message: "请选择日期", trigger: "blur" }],
    isSwitch: [{ required: true, message: "请选择开关", trigger: "blur" }],
    activityType: [
      { required: true, message: "请选择活动类型", trigger: "blur" },
    ],
  },
  formDataType: [
    // input
    {
      type: "input",
      label: "输入框",
      meta: {
        prop: "name",
        placeholder: "请输入姓名",
      },
    },
    // select
    {
      type: "select",
      label: "选择框",
      meta: {
        prop: "sex",
        placeholder: "请选择性别",
        options: [
          {
            label: "男",
            value: "男",
          },
          {
            label: "女",
            value: "女",
          },
        ],
      },
    },
    // timePicker
    {
      type: "timePicker",
      label: "日期选择器",
      meta: {
        prop: "time",
        placeholder: "请选择日期",
        type: "datetimerange",
        format: "YYYY-MM-DD",
        valueFormat: "YYYY-MM-DD",
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm:ss",
      },
    },
    // radio
    {
      type: "radio",
      label: "单选框",
      meta: {
        prop: "region",
        options: [
          {
            label: "活动类型1",
            value: "1",
          },
          {
            label: "活动类型2",
            value: "2",
          },
        ],
      },
    },
    // checkbox
    {
      type: "checkbox",
      label: "多选框",
      meta: {
        prop: "activityType",
        options: [
          {
            label: "活动类型1",
            value: "1",
          },
          {
            label: "活动类型2",
            value: "2",
          },
        ],
      },
    },
    // switch
    {
      type: "switch",
      label: "开关",
      meta: {
        prop: "isSwitch",
      },
    },
  ],
});
