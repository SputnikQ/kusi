<template>
  <div class="cart">
    <div class="cartlist" v-if="list">
      <div v-for="item in list" :key="item._id">
        <!-- item.checked是自己添加的 -->
        <van-checkbox v-model="item.checked" />
        <van-card
          :num="item.quantity"
          :price="item.product.price"
          :title="item.product.name"
          :thumb="item.product.coverImg"
        >
          <template #footer>
            <van-button size="mini" v-show="item.checked" @click="del(item._id)"
              >删除</van-button
            >
            <van-button size="mini" @click="addProduct(item.product._id, 1)"
              >&nbsp;+&nbsp;</van-button
            >
            <van-button
              size="mini"
              @click="item.quantity > 1 ? addProduct(item.product._id, -1) : ''"
              >&nbsp; - &nbsp;</van-button
            >
          </template>
        </van-card>
      </div>
    </div>
    <van-submit-bar :price="sumPrice" button-text="立即结算" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <van-icon name="delete" v-show="checked"></van-icon>
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
import { loadCartlist } from "../../api/cart";
import { addToCart } from "../../api/cart";
import { delCart } from "../../api/cart";
import { order } from "../../api/order";
export default {
  components: {},
  data() {
    return {
      list: [], //接收购物车列表
      // checked: true, //复选框
    };
  },
  computed: {
    //不支持异步
    checked: {
      set(flag) {
        // return this.list.forEach((item) => (item.checked = flag));
        console.log("点击了全选框");
        console.log(flag);
        //动态添加属性
        this.list.map((item) => this.$set(item, "checked", flag));
        // return flag;
      },
      get() {
        return (
          this.list.length ==
          this.list.filter((item) => item.checked == true).length
        );
      },
    },
    sumPrice() {
      return this.list
        .filter((item) => {
          return item.checked == true;
        })
        .reduce(function (pre, cur) {
          return pre + cur.product.price * cur.quantity * 100;
        }, 0);
    },
    selectCart() {
      let arr = [];
      this.list.forEach((item) => {
        if (item.checked) {
          let obj = {
            quantity: item.quantity,
            product: item._id,
            price: item.product.price,
          };
          arr.push(obj);
        }
      });
      return arr;
    },
  },
  watch: {},

  methods: {
    async getCart() {
      const res = await loadCartlist("/api/v1/shop_carts");
      console.log(res);
      if (res.status == 200) {
        this.list = res.data;
      }
    },
    //提交订单
    async onSubmit() {
      //要判断有没有收货人 没有要跳到新增收货人页面
      console.log(this.selectCart);
      const res = await order({
        receiver: "sputnik",
        regions: "宇宙",
        address: "地球",
        orderDetails: this.selectCart,
      });
      console.log(res);
    },
    //删除购物车单个商品信息
    async del(id) {
      console.log(1);
      const res = await delCart(id);
      console.log(res);
      if (res.status == 200) {
        Toast.success("删除成功");
        await this.getCart();
      }
    },
    async addProduct(id, num) {
      const res = await addToCart(id, num);
      console.log(res);
      this.list.forEach((item) => {
        if (item.product._id == id) {
          item.quantity = item.quantity + num;
        }
      });
    },
  },
  created() {
    this.getCart();
  },
  mounted() {},
};
</script>
<style scoped>
.cartlist {
  padding-bottom: 50px;
}
</style>