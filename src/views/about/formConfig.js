/**
 * 封装Form表单配置
 */
import { ref } from "vue";

export const formList = ref({
    // 添加form的配置
    formConfig: {
        labelWidth: "80px",
        labelPosition: "right",
        size: "default",
        formStyle: {
            width: "100%",
        },
        // 按钮
        btnList: [
            {
                type: "primary",
                text: "提交",
            },
            {
                type: "default",
                text: "重置",
            }
        ]
    },
    // form表单校验
    formRules: {
        name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
        activeTime: [
            {
                type: "date",
                required: true,
                message: "请选择日期",
                trigger: "change",
            },
        ],
        isSuccess: [
            {
                required: true,
                message: "请选择是否成功",
                trigger: "change",
            },
        ],
        activityType: [
            {
                type: "array",
                required: true,
                message: "请至少选择一个活动性质",
                trigger: "change",
            },
        ],
        isSwitch: [
            {
                required: true,
                message: "请选择是否开关",
                trigger: "change",
            },
        ],
    },
    // form表单展示组件
    formDataType: [
        // input
        {
            type: "input",
            meta: {
                width: "200px",
                label: "活动名称",
                placeholder: "请输入活动名称",
                prop: "name",
                disabled: false,
                prepend: "http://",
            },
        },
        // option
        {
            type: "select",
            meta: {
                width: "200px",
                label: "活动名称",
                placeholder: "请输入活动名称",
                prop: "region",
                disabled: false,
                options: [
                    {
                        label: "选项1",
                        value: "1",
                    },
                    {
                        label: "选项2",
                        value: "2",
                    },
                ],
            },
        },
        // 开始时间
        // timePicker
        {
            type: "timePicker",
            meta: {
                width: "200px",
                label: "活动时间",
                placeholder: "请输入活动时间",
                prop: "activeTime",
                disabled: false,
                type: "datetime", // 格式 datetimerange datetime
                format: "YYYY-MM-DD",
                valueFormat: "YYYY-MM-DD HH:mm:ss",
                dateFormat: "YYYY-MM-DD HH:mm:ss",
                timeFormat: "HH:mm",
            },
        },
        // radio
        {
            type: "radio",
            meta: {
                width: "200px",
                label: "是否成功",
                placeholder: "是否成功",
                prop: "isSuccess",
                disabled: false,
                options: [
                    {
                        label: "是",
                        value: "1",
                    },
                    {
                        label: "否",
                        value: "2",
                    },
                ],
            },
        },
        // checkbox
        {
            type: "checkbox",
            meta: {
                width: "200px",
                label: "活动类型",
                placeholder: "请输入活动类型",
                prop: "activityType",
                disabled: false,
                options: [
                    {
                        label: "类型1",
                        value: "类型1",
                    },
                    {
                        label: "类型2",
                        value: "类型2",
                    },
                ],
            },
        },
        // switch
        {
            type: "switch",
            meta: {
                width: "200px",
                label: "开关",
                prop: "isSwitch",
                disabled: false,
            },
        },
    ],
    // 表单数据
    formData: {
        name: "",
        region: "",
        activeTime: "",
        isSuccess: "",
        activityType: [],
        isSwitch: "",
    },
});

