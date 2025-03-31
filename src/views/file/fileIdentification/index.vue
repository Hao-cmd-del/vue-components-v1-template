<template>
  <div class="file-identification">
    <div class="content-wrapper">
      <!-- 左侧图片区域 -->
      <div class="image-section">
        <div class="upload-area" @click="triggerUpload" v-if="!imageUrl">
          <el-icon :size="48"><Upload /></el-icon>
          <p>点击上传图片到此处</p>
        </div>
        <div class="image-preview-container" v-else>
          <img :src="imageUrl" class="preview-image" />
          <div class="image-actions">
            <el-button type="primary" @click="triggerUpload"
              >重新上传</el-button
            >
            <el-button type="danger" @click="clearImage">清除图片</el-button>
          </div>
        </div>
        <input
          type="file"
          ref="fileInput"
          @change="handleImageUpload"
          accept="image/*"
          style="display: none"
        />
      </div>

      <!-- 右侧识别结果区域 -->
      <div class="result-section">
        <div class="result-header">
          <h3>识别结果</h3>
          <el-button
            type="primary"
            :loading="isRecognizing"
            @click="startRecognition"
          >
            开始识别
          </el-button>
        </div>
        <div class="result-content">
          <el-input
            v-model="recognizedText"
            type="textarea"
            :rows="10"
            placeholder="识别结果将在这里显示..."
            readonly
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Upload } from "@element-plus/icons-vue";
import { createWorker } from "tesseract.js";
import { ElMessage } from "element-plus";

const imageUrl = ref("");
const recognizedText = ref("");
const isRecognizing = ref(false);
const fileInput = ref(null);
let worker = null;

const triggerUpload = () => {
  fileInput.value.click();
};

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
    recognizedText.value = ""; // 清除之前的识别结果
  }
};

const startRecognition = async () => {
  if (!imageUrl.value) {
    ElMessage.warning("请先上传图片");
    return;
  }

  isRecognizing.value = true;
  try {
    if (!worker) {
      worker = await createWorker("chi_sim");
    }
    const {
      data: { text },
    } = await worker.recognize(imageUrl.value);
    console.log(text, "识别结果");
    recognizedText.value = text;
  } catch (error) {
    ElMessage.error("识别失败，请重试");
    console.error(error);
  } finally {
    isRecognizing.value = false;
  }
};

const clearImage = () => {
  imageUrl.value = "";
  recognizedText.value = "";
  // 重置 input 的值，确保能重复选择同一张图片
  if (fileInput.value) {
    fileInput.value.value = "";
  }
};

// 组件卸载时清理worker
onBeforeUnmount(async () => {
  if (worker) {
    await worker.terminate();
  }
});
</script>

<style scoped>
.file-identification {
  padding: 20px;
  height: 100%;
}

.content-wrapper {
  display: flex;
  gap: 20px;
  height: calc(100vh - 100px);
}

.image-section,
.result-section {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.upload-area {
  height: 100%;
  border: 2px dashed #dcdfe6;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.3s;
}

.upload-area:hover {
  border-color: #409eff;
}

.upload-area i {
  font-size: 48px;
  color: #909399;
}

.upload-area p {
  margin-top: 10px;
  color: #909399;
}

.image-preview-container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.preview-image {
  flex: 1;
  width: 100%;
  height: calc(100% - 50px);
  object-fit: contain;
  margin-bottom: 10px;
}

.image-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 10px 0;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.result-header h3 {
  margin: 0;
  color: #303133;
}

.result-content {
  height: calc(100% - 60px);
}
</style>
