<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img src="@/assets/logo.png" alt="标题logo" class="logo" />
        <h2>用户注册</h2>
      </div>

      <el-form
        :model="registerForm"
        :rules="registerRules"
        ref="registerFormRef"
      >
        <el-form-item prop="username">
          <el-input
            v-model="registerForm.username"
            prefix-icon="User"
            placeholder="请输入用户名"
          />
        </el-form-item>

        <el-form-item prop="phone">
          <el-input
            v-model="registerForm.phone"
            prefix-icon="Phone"
            placeholder="请输入手机号"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="registerForm.password"
            prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            @keyup.enter="handleRegister"
          />
        </el-form-item>

        <el-form-item prop="confirmPassword">
          <el-input
            v-model="registerForm.confirmPassword"
            prefix-icon="Lock"
            type="password"
            placeholder="请确认密码"
            @keyup.enter="handleRegister"
          />
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            @click="handleRegister"
            class="login-button"
          >
            注册
          </el-button>
        </el-form-item>

        <div class="login-link">
          已有账号？<router-link to="/login">立即登录</router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
const loading = ref(false);
const registerFormRef = ref(null);

const registerForm = reactive({
  username: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (registerForm.confirmPassword !== "") {
      registerFormRef.value?.validateField("confirmPassword");
    }
    callback();
  }
};

const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== registerForm.password) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
};

const registerRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
  ],
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, validator: validatePass, trigger: "blur" },
    { min: 6, message: "密码长度不能小于6位", trigger: "blur" },
  ],
  confirmPassword: [
    { required: true, validator: validatePass2, trigger: "blur" },
  ],
};

const handleRegister = async () => {
  if (!registerFormRef.value) return;

  try {
    loading.value = true;
    await registerFormRef.value.validate();
    // TODO: 调用注册接口
    ElMessage.success("注册成功");
    router.push("/login");
    return;
    // const res = await register(registerForm);
    // if (res.code === 200) {
    //   ElMessage.success("注册成功");
    //   router.push("/login");
    // } else {
    //   ElMessage.error(res.message || "注册失败");
    // }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e6f3ff 0%, #f0f9ff 100%);

  .login-box {
    width: 400px;
    padding: 40px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

    .login-header {
      text-align: center;
      margin-bottom: 40px;

      .logo {
        width: 80px;
        margin-bottom: 16px;
      }

      h2 {
        color: #2c3e50;
        font-size: 24px;
        margin: 0;
      }
    }

    .login-button {
      width: 100%;
    }

    .login-link {
      text-align: center;
      margin-top: 16px;
      color: #606266;

      a {
        color: #409eff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
