<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="userName"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" color="#f8a120"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { logApi } from "../../api/user";
import { setToken } from "../../utils/auth";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async onSubmit(values) {
      console.log(values);
      const res = await logApi({
        userName: this.userName,
        password: this.password,
      });
      console.log(res);
      if (res.data.code == "success") {
        setToken(res.data.token);
        Toast.success("登录成功");
        this.$router.push("/home");
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.van-form {
  margin-top: 200px;
}
.van-field {
  background-color: transparent;
}
.van-field ::-webkit-input-placeholder {
  color: black;
}
.login {
  width: 100%;
  height: 667px;
  background: url(../../assets/img/yellow.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>