<template>
  <div class="order">
    <van-nav-bar>
      <template #left>
        <p class="iconfont" style="font-size: 28px" @click="back">&#xe606;</p>
      </template>
    </van-nav-bar>
    <div
      style="
        padding: 10px;
        background-color: #f2f2f2;
        border-radius: 10px;
        overflow: hidden;
        margin: 5px;
      "
    >
      <span style="font-size: 18px; margin-right: 30px">{{
        addressMsg.receiver
      }}</span
      ><span style="color: #a4a4a4">{{ addressMsg.mobile }}</span>
      <p style="margin-top: 5px">
        {{ addressMsg.regions + addressMsg.address }}
      </p>
    </div>
    <div v-for="(item, index) in products" :key="item._id">
      <van-card
        :num="list[index].quantity"
        :price="item.price"
        :title="item.name"
        :thumb="item.coverImg"
      >
      </van-card>
    </div>
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { proDetailApi } from "../../api/product";
import { getAddressApi, addressApi } from "../../api/address";
import { order } from "../../api/order";
import { Toast } from "vant";

export default {
  components: {},
  data() {
    return {
      list: [],
      total: "",
      addressMsg: {},
      products: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    //获取单条收货地址
    async getaddress() {
      let id = "";
      const res = await getAddressApi();
      //   console.log(res);
      res.data.addresses.forEach((v) => {
        if (v.isDefault) {
          id = v._id;
          //   console.log(id);
        }
      });
      const result = await addressApi(id);
      //   console.log(result);
      this.addressMsg = result.data;
      //   console.log(this.addressMsg);
    },
    product() {
      this.list.forEach(async (v) => {
        const res = await proDetailApi(v.id);
        console.log(res);
        this.products.push(res.data);
      });
      console.log(this.products);
    },
    async onSubmit() {
      let arr = [];
      console.log(this.list);
      this.list.forEach((v) => {
        let o = {
          price: v.price,
          product: v.id,
          quantity: v.quantity,
        };
        arr.push(o);
      });
      let obj = {
        receiver: this.addressMsg.receiver,
        regions: this.addressMsg.regions,
        address: this.addressMsg.address,
        orderDetails: arr,
      };
      const res = await order(obj);
      console.log(res);
      Toast("订单提交成功");
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getaddress();
    // console.log(this.$store.state.orderCart);
    this.list = this.$store.state.orderCart;
    this.total = this.$store.state.total;
    // console.log(this.total);
    this.product();
  },
  mounted() {},
};
</script>
<style scoped>
</style>