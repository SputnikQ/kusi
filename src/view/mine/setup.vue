<template>
  <div class="setup">
    <van-nav-bar title="设置">
      <template #left>
        <p class="iconfont" style="font-size: 28px" @click="back">&#xe606;</p>
      </template>
    </van-nav-bar>
    <div class="my">
      <van-cell is-link title="个人信息" to="/personinform" />
    </div>
    <div class="safe">
      <van-cell is-link title="账户安全" />
      <van-cell is-link title="账号绑定" />
      <van-cell is-link title="隐私设置" />
    </div>
    <div class="foot">
      <van-cell is-link title="关于寺库" />
      <van-cell is-link title="消费者告知书" />
    </div>
    <div class="quit">
      <van-cell is-link title="退出账户" color="#fbb81b" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  created() {},
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
</style>