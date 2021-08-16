<template>
  <div class="register">
    <!-- <van-uploader :after-read="afterRead" v-if="flag" /> -->
    <div class="van-uploader">
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="1"
        :after-read="afterRead"
      />
    </div>

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
      <van-field
        v-model="nickName"
        type="text"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请输入昵称' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" color="#f8a120"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { regApi } from "../../api/user";
import { Toast } from "vant"; //vant组件 头像没有上传的时候会有提示
export default {
  computed: {},
  watch: {
    // avatar() {
    //   if (this.avatar) {
    //     this.flag = false;
    //   } else {
    //     this.flag = true;
    //   }
    // },
  },
  data() {
    return {
      userName: "",
      password: "",
      avatar: "",
      nickName: "",
      // flag: true,
      fileList: [],
    };
  },
  methods: {
    async onSubmit(values) {
      if (this.avatar) {
        console.log({ ...values, avatar: this.avatar });
        const res = await regApi({ ...values, avatar: this.avatar });
        console.log(res);
        if (res.data.code == "success") {
          this.$router.push("/login");
          Toast.fail("注册成功");
        }
      } else {
        // alert("请上传头像");
        Toast.fail("请上传头像");
      }
      // console.log(values);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.avatar = file.content;
    },
  },
};
</script>
<style scoped>
.van-uploader {
  margin-left: 32%;
  margin-top: 10%;
}
.van-form {
  margin-top: 10px;
}
.van-field {
  background-color: transparent;
}
.van-field ::-webkit-input-placeholder {
  color: black;
}
.register {
  width: 100%;
  height: 667px;
  background: url(../../assets/img/yellow.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>