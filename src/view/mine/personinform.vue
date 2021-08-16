<template>
  <div class="setup">
    <van-nav-bar>
      <template #left>
        <p class="iconfont" style="font-size: 28px" @click="back">&#xe606;</p>
      </template>
    </van-nav-bar>
    <p style="font-size: 32px; font-weight: 900; margin-left: 10px">个人信息</p>
    <van-image
      round
      fit="cover"
      width="75px"
      height="75px"
      :src="require('@/assets/img/head.jpg')"
    />
    <div class="my">
      <van-cell is-link title="会员中心" value="使用会员" />
    </div>
    <div class="safe">
      <van-cell is-link title="用户名" :value="userName" />
      <van-cell is-link title="昵称" :value="nickName" />
      <van-cell is-link title="个人说明" value="这个人很懒" />
    </div>
    <div class="foot">
      <van-cell is-link title="更多个人信息" value="抢积分" />
      <van-cell is-link title="手机号" value="13456728742" />
    </div>
    <div class="quit">
      <van-cell is-link title="收货地址" color="#fbb81b" to="/address" />
    </div>
  </div>
</template>

<script>
import { userApi } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      nickName: "",
      userName: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    back() {
      this.$router.go(-1);
    },
    async init() {
      const res = await userApi();
      console.log(res);
      this.nickName = res.data.nickName;
      this.userName = res.data.userName;
    },
  },
  created() {
    this.init();
  },
  mounted() {},
};
</script>
<style scoped>
.setup {
  width: 100%;
  height: 667px;
  background-color: #f5f5f5;
}
.my,
.safe,
.quit,
.foot {
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
}
.quit .van-cell {
  color: #fbb81b;
}
.van-cell {
  font-size: 16px;
}
.van-image {
  margin-left: 10px;
  border: 2px solid #5e5d62;
}
</style>