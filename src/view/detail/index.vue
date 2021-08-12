<template>
  <div class="detail">
    <div v-if="product">
      <img :src="product.coverImg" alt="" />
      <span>￥</span><span>{{ product.price }}</span
      ><span>￥{{ product.price + 500 }}</span> <span>一口价</span
      ><span>包邮</span>
      <van-cell is-link value-class="ny">
        <p>查看</p>

        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <van-tag type="danger" color="#ffe9d2">库支票</van-tag>
          <span class="custom-title"
            >分期优惠 每月低至￥{{ product.price / 10 }}</span
          >
        </template>
      </van-cell>
      <van-tag type="primary" color="#232323">当季新品</van-tag>
      <p class="desc">{{ product.name }}</p>
      <ul>
        <li>大陆</li>
        <li>自营</li>
      </ul>
      <ul>
        <li>假一赔十</li>
        <li>会员免邮</li>
        <li>专业鉴定</li>
        <li>不支持七天退换</li>
      </ul>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" to="/shopcart" />
        <van-goods-action-icon icon="shop-o" text="已收藏" />
        <van-goods-action-button
          type="warning"
          color="#1a191e"
          text="加入购物车"
          @click="onAddCartClicked(product._id)"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          color="#f7a01f"
          @click="show = true"
        />
      </van-goods-action>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import { proDetailApi } from "../../api/product";
import { addToCart } from "../../api/cart";
export default {
  components: {},
  data() {
    return {
      product: "",
      show: false,
      goodsId: "679797",
      quota: 5,
      quotaUsed: 0,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "种类", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "限量", // skuValueName：规格值名称
                imgUrl: "", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "", // 用于预览显示的规格类目图片
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 10, // 当前 sku 组合对应的库存
          },
        ],
        price: "",
        stock_num: 100, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        picture: "",
      },
    };
  },
  computed: {},
  watch: {},

  methods: {
    async getdetail(id) {
      const res = await proDetailApi(id);
      console.log(res);
      this.product = res.data;
      this.goodsId = id;
      this.sku.tree[0].v[0].imgUrl = this.product.coverImg;
      this.sku.tree[0].v[0].previewImgUrl = this.product.coverImg;
      this.sku.list[0].price = this.product.price * 100;
      this.goods.picture = this.product.coverImg;
      this.sku.price = this.product.price;
    },
    onBuyClicked(data) {
      console.log(data);
    },
    async onAddCartClicked(data) {
      console.log(data);
      if (data.goodsId) {
        const res = await addToCart(data.goodsId, data.selectedNum);
        console.log(res);
      } else {
        const res = await addToCart(data, 1);
        console.log(res);
      }
    },
  },
  created() {
    this.getdetail(this.$route.params.id);
  },
  mounted() {},
};
</script>
<style scoped>
img {
  width: 100%;
  margin-bottom: 20px;
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}
.van-cell {
  background-color: #3c384f;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.van-cell .van-tag {
  color: #4a4259;
  margin: 0;
  position: absolute;
  left: 10px;
  top: 13px;
}

.van-cell p {
  width: 30px;
  height: 20px;
  /* background: tomato; */
  position: absolute;
  right: 10px;
}
.detail span:nth-of-type(1) {
  font-size: 14px;
}
.detail span:nth-of-type(2) {
  font-size: 20px;
  font-weight: 800;
}
.detail span:nth-of-type(3) {
  text-decoration: line-through;
  font-size: 14px;
  color: #989898;
  margin-left: 5px;
}
.detail span:nth-of-type(4) {
  display: inline-block;
  border: 1px solid red;
  color: red;
  font-weight: 700;
  margin-left: 5px;
}
.detail span:nth-of-type(5) {
  display: inline-block;
  border: 1px solid red;
  color: red;
  font-weight: 700;
  margin-left: 10px;
}
.van-cell span {
  color: white;
  font-size: 14px;
  margin-left: 5px;
  position: relative;
  white-space: nowrap;
  float: left;
  position: absolute;
  left: 60px;
  font-weight: normal;
}
.detail div .custom-title {
  font-weight: normal;
  font-size: 16px;
}
.van-tag {
  color: #dfc796;
}
.desc {
  font-size: 16px;
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 20px;
  margin-bottom: 20px;
}
.detail ul {
  list-style: circle inside;
}
ul li {
  float: left;
  margin-left: 5px;
}
</style>