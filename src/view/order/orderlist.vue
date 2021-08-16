<template>
  <div class="orderlist">
    <van-nav-bar>
      <template #left>
        <p class="iconfont" style="font-size: 28px" @click="back">&#xe606;</p>
      </template>
    </van-nav-bar>
    <div v-for="(item, index) in list" :key="index" class="order">
      <div
        style="width: 80px; height: 80px"
        class="imgbox"
        v-for="(v, i) in item"
        :key="i"
      >
        <img :src="v.product.coverImg" alt="" width="80px" height="80px" />
      </div>
      <div class="spanbox">
        <span>共{{ item.length }}件商品</span>
        <span>总计{{ total[index] }}元</span>
      </div>
    </div>
  </div>
</template>

<script>
import { orderlist, orderdetail } from "../../api/order";
import { proDetailApi } from "../../api/product";
export default {
  components: {},
  data() {
    return {
      arr: [],
      list: [],
      total: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async init() {
      const res = await orderlist();
      res.data.orders.forEach((v) => {
        this.arr.push(v._id);
      });
      console.log(this.arr);
      let resArr = [];

      this.arr.forEach(async (v, i) => {
        let res = await orderdetail(v);
        console.log(res);
        this.total.push(res.data.order.price);
        resArr.push(res.data.details);
        console.log(resArr[i]);
        if (resArr.length == this.arr.length) {
          let id = resArr[0][0]._id;
          const res = await proDetailApi(id);
          console.log(res);
          console.log(resArr);
          this.list = resArr;
          //   let listArr = [];
          //   resArr.forEach((v) => {
          //     let a = [];
          //     v.forEach((obj) => {
          //       console.log(obj.product);
          //       a.push(obj.product);
          //     });
          //     listArr.push(a);
          //   });
          //   console.log(listArr);
        }
      });
      console.log(this.total);
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.init();
  },
  mounted() {},
};
</script>
<style scoped>
.orderlist {
  padding: 0 15px 15px 15px;
}
.order {
  width: 100%;
  height: 90px;
  background-color: #fafafa;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
}
.order .imgbox {
  border-radius: 10px;
  float: left;
  overflow: hidden;
  margin: 0 5px;
  margin-top: 5px;
}
.order span {
  display: block;
  width: 80px;

  font-size: 14px;
}
.order span:nth-of-type(2) {
  margin-top: 50px;
}
.order .spanbox {
  width: 100px;
  float: right;
  height: 80px;
}
</style>