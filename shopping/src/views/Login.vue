<template>
  <a-layout>
    <a-layout-content>
      <div class="login_container">
        <!-- 登录框 -->
        <a-card>
          <!-- 头像 -->
          <a-avatar :size="130" src="/image/logo.png"></a-avatar>
          <!-- 登录表单 -->
          <a-form>
                <a-form-item :wrapperCol="{span: 24}">
                  <a-input placeholder="用户名" >
                    <template #prefix
                      ><UserOutlined style="color:rgba(0,0,0,.25)"
                    /></template>
                  </a-input>
                </a-form-item>
                <a-form-item :wrapperCol="{span: 24}">
                  <a-input type="password" placeholder="密码">
                    <template #prefix ><LockOutlined style="color:rgba(0,0,0,.25)"
                    /></template>
                  </a-input> </a-form-item
              >
            <a-row>
              <a-col :span="4">
                <a-form-item>
                  <a-button type="primary" html-type="submit">
                    登录
                  </a-button>
                </a-form-item>
              </a-col>
              <a-col :span="4" :offset="16">
                <a-form-item>
                  <a-button type="primary" html-type="submit">
                    重置
                  </a-button>
                </a-form-item></a-col
              >
            </a-row>
          </a-form>
        </a-card>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    LockOutlined
  }
};
</script>

<style lang="less" scoped>
.ant-layout {
  height: 100%;
}
.login_container {
  position: relative;
  background-color: #2b5b6b;
  background-image: url(/image/background.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
}

.ant-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  transform: translate(-50%, -50%);
}

.ant-avatar {
  position: absolute;
  left: 50%;
  top: -75px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #ddd;
  border: 10px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: content-box;
  background-color: #eee;
}

.ant-avatar img {
  border-radius: 50%;
  background-color: #fff;
}

.ant-form {
  margin-top: 80px;
}


</style>