<template>
  <div class="znsb">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :gutter="8" :border="false">
      <van-grid-item
        v-for="(item, index) in classify"
        :key="index"
        :to="item.link"
      >
        <div
          style="
            width: 65px;
            height: 65px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px #ddd2cc solid;
          "
        >
          <img :src="item.src" alt="" style="margin: 0 auto" />
        </div>
        <p style="font-weight: normal">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>
    <div class="waterfall-container" v-if="products">
      <div
        class="waterfall-item"
        v-for="item in products"
        :key="item._id"
        style="height: 250px; margin-bottom: 10px"
        @click="godetail(item._id)"
      >
        <div style="width: 150px; height: 150px; overflow: hidden">
          <img :src="item.coverImg" alt="" width="150px" />
        </div>

        <p>{{ item.name }}</p>
        <p style="width: 60px; float: left">￥{{ item.price }}</p>
        <span
          style="
            float: left;
            width: 45px;
            text-align: center;
            margin-top: 5px;
            border: 1px solid red;
            color: red;
          "
          >一口价</span
        >
        <p style="clear: both">￥{{ item.price + 5000 }}</p>
        <span>自营 </span>
        <span>大陆 </span>
      </div>
    </div>
  </div>
</template>

<script>
import { categoriesApi } from "../../api/product";
export default {
  components: {},
  data() {
    return {
      products: [],
      images: [
        "https://img.youpin.mi-img.com/shopmain/bb62db06b4bc33650d59a68ca4b01316.jpg",
        "https://img.youpin.mi-img.com/shopmain/5700d050997db25ec8433fece151f8fb.jpeg?w=800&h=800",
        "https://img.youpin.mi-img.com/shopmain/633147d13e40d5f212c9c3d810d3b215.jpg",
        "https://img.youpin.mi-img.com/shopmain/50100f8436f2f52f4bc1f3261912ebba.jpg?w=800&h=800",
        "https://img.youpin.mi-img.com/shopmain/5d7d535628297de89405712446af1cc0.jpg",
        "https://img.youpin.mi-img.com/shopmain/f7f05ad61b87f9c17c0addd37153f947.jpg?w=800&h=800",
        "https://img.youpin.mi-img.com/shopmain/5d7d535628297de89405712446af1cc0.jpg",
        "https://img.youpin.mi-img.com/shopmain/f7f05ad61b87f9c17c0addd37153f947.jpg?w=800&h=800",
      ],
      classify: [
        {
          name: "口红",
          src: "https://img.youpin.mi-img.com/shopmain/bb62db06b4bc33650d59a68ca4b01316.jpg",
          link: "/home/kh",
        },
        {
          name: "电视",
          src: "https://img.youpin.mi-img.com/shopmain/5700d050997db25ec8433fece151f8fb.jpeg?w=800&h=800",
          link: "/home/ds",
        },
        {
          name: "台灯",
          src: "https://img.youpin.mi-img.com/shopmain/633147d13e40d5f212c9c3d810d3b215.jpg",
          link: "/home/dj",
        },
        {
          name: "耳机",
          src: "https://img.youpin.mi-img.com/shopmain/50100f8436f2f52f4bc1f3261912ebba.jpg?w=800&h=800",
          link: "/home/ej",
        },
        {
          name: "智能手表",
          src: "https://img.youpin.mi-img.com/shopmain/5d7d535628297de89405712446af1cc0.jpg",
          link: "/home/znsb",
        },
        {
          name: "手机",
          src: "https://img.youpin.mi-img.com/shopmain/f7f05ad61b87f9c17c0addd37153f947.jpg?w=800&h=800",
          link: "/home/ds",
        },
        {
          name: "科技手表",
          src: "https://img.youpin.mi-img.com/shopmain/8acef3696a22ce6d31a3f89ad62c2643.jpg",
          link: "/home/znsb",
        },
        {
          name: "小米",
          src: "https://img.youpin.mi-img.com/shopmain/0a0374d07ce0d29b8043e1bea35f3fb4.jpg?w=800&h=800",
          link: "/home/ds",
        },
      ],
      itemize: "口红",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async init() {
      const res = await categoriesApi({ name: "耳机" });
      console.log(res);
      this.products = res.data.products;
    },
    godetail(id) {
      // this.$store.dispatch("goDetail", id);
      this.$router.push("/detail/" + id);
    },
  },
  created() {
    this.init();
    this.$store.state.data = false;
  },
  mounted() {
    let a = document.querySelectorAll(".van-grid-item__content--center");
    a.forEach((v) => {
      v.style.borderRadius = "10px";
      v.style.overflow = "hidden";
    });
  },
};
</script>
<style scoped>
img {
  width: 100%;
  margin: 0 auto;
  margin-top: -80px;
}
.van-swipe {
  overflow: hidden;
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.van-swipe-item {
  height: 200px;
  border-radius: 10px;
}
.waterfall-container {
  /*分几列*/
  column-count: 2;
  overflow: hidden;
  margin: 5px;
  margin-bottom: 40px;
}

.waterfall-item {
  /*不留白，不知道什么意思可以取消这个样式试试*/
  break-inside: avoid;
  border: 1px gainsboro solid;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
}
.waterfall-item p:nth-of-type(1) {
  width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
}
.waterfall-container img {
  margin: 0 auto;
  margin-top: 5px;
}
.waterfall-container div {
  margin: 0 auto;
}
.waterfall-container p {
  font-weight: normal;
  line-height: 25px;
  margin-left: 5px;
}
.waterfall-container p:nth-of-type(3) {
  text-decoration: line-through;
  color: #888888;
}
.waterfall-container span {
  display: block;
  float: left;
  color: #825c3c;
  margin-right: 10px;
  margin-left: 5px;
}
</style>