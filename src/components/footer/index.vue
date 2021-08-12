<template>
  <div class="footerx" v-if="this.$route.meta.footShow">
    <van-tabbar v-model="active" active-color="#f8a120">
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="shopcart">购物袋</van-tabbar-item>
      <van-tabbar-item icon="smile-o" to="mine">我的库寺</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>