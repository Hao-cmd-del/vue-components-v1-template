<template>
  <div class="upload-container">
    <!-- {{ fileList }} -->
    <el-upload
      ref="upload"
      v-model:file-list="fileList"
      list-type="picture-card"
      :action="FILE_URL"
      :on-remove="handleRemove"
      :name="name"
      :limit="limit"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-exceed="handleExceed"
      :on-preview="handlePictureCardPreview"
      :disabled="isShowImage"
      :before-upload="beforeUpload"
      accept="image/*"
      :multiple="limit > 1"
      :show-file-list="limit > 1"
    >
      <el-image v-if="imageUrl" :src="imageUrl" class="avatar" fit="cover" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </div>

  <el-dialog v-model="dialogVisible">
    <!--  -->
    <el-image
      :src="dialogImageUrl"
      :preview-src-list="_fileList"
      alt="Preview Image"
      style="width: 100%"
    />
  </el-dialog>
</template>
<script setup>
import { ElMessage } from "element-plus";
import { nextTick, onMounted, ref, watch, computed } from "vue";
const props = defineProps({
  modelValue: {
    default: () => "",
    type: Array || String,
  },
  // 模式 1:string,string 2:string[]
  mode: {
    default: 2,
    type: Number,
  },
  limit: {
    default: 1,
    type: Number,
  },
  name: {
    default: "uploadFile",
    type: String,
  },
  isShowImage: {
    default: false,
    type: Boolean,
  },
});

const _fileList = computed(() => {
  return fileList.value.map((item) => {
    return item.url;
  });
});

const emit = defineEmits(["update:modelValue"]);
const FILE_URL = "/file/uploadFile";
const fileList = ref([]);
const handleRemove = (uploadFile, uploadFiles) => {
  handleEmit();
};
const handleExceed = () => {
  ElMessage({
    message: "超出上传数量限制",
    type: "error",
  });
};
watch(
  () => props.modelValue,
  () => {
    handleInit();
  }
);
const handleInit = () => {
  let v = props.modelValue;
  let arr = [];
  if (props.mode == 1) {
    if (v == null || v == undefined) {
      v = "";
    }
    arr = v.split(",");
  } else {
    if (v == null || v == undefined) {
      v = [];
    }
    arr = v;
  }
  console.log(v, "vvvvvvvvv");
  if (arr && props.limit > 1) {
    arr = arr.filter((item) => {
      return item;
    });
    fileList.value = arr.map((item) => {
      return {
        url: item,
        name: item,
      };
    });
  } else {
    imageUrl.value = arr;
  }
};

/**
 * 处理
 */
const handleEmit = () => {
  nextTick(() => {
    let value = null;
    if (props.limit > 1) {
      value = fileList.value
        .filter((item) => {
          return item.status == "success" || !item.status;
        })
        .map((item) => {
          return item.response ? item.response.entity.fileUrl : item.url;
        });
      if (props.mode == 1) {
        value = value.join(",");
      }
    } else {
      value = value = imageUrl.value;
    }
    emit("update:modelValue", value);
  });
};
const imageUrl = ref("");
const handleSuccess = (response, file, fileList) => {
  if (props.limit == 1) {
    imageUrl.value = response.entity.fileUrl;
    handleEmit();
    return;
  }

  console.log(fileList.map((item) => item.status));
  let len = fileList
    .map((item) => {
      return item.status ? item.status : "success";
    })
    .filter((item) => {
      return item == "success";
    }).length;
  if (len == fileList.length) {
    handleEmit();
  }
};

const beforeUpload = (file) => {
  console.log(file, "fielfllfelel");

  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    ElMessage.error("只能上传图片文件!");
  }
  return isImage;
};
// const handleChange = () => {
//   console.log("change[=================]");
//   handleEmit();
// }
onMounted(() => {
  console.log("[upload image]");
  console.log(props.modelValue);
  handleInit();
});

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const handlePictureCardPreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url;
  dialogVisible.value = true;
};

// 计算limit 如果等于1的话就false 反之就返回limit
const limit = computed(() => {
  return props.limit == 1 ? false : props.limit;
});
</script>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar {
  width: 100%;
  height: 100%;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.el-upload.is-disabled {
  display: none;
}
</style>
