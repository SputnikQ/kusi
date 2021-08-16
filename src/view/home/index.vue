<template>
  <div class="home">
    <div class="big">
      <p>精品生活方式平台</p>
      <ul>
        <li>正品货源</li>
        <li>权威鉴定</li>
        <li>奢侈养护一站式服务</li>
      </ul>
      <van-sticky @change="isFixed">
        <div class="head" ref="head">
          <van-search disabled placeholder="请输入搜索关键词" />
          <span class="iconfont carme">&#xe633;</span>
          <span class="iconfont masg">&#xe61e;</span>
        </div>
      </van-sticky>
      <van-tabs
        v-model="active"
        background="transparent"
        color="#f7a01f"
        @click="getcategories(active)"
      >
        <router-view></router-view>
        <van-tab
          :title="item.name"
          v-for="(item, index) in titles"
          :name="item.name"
          :key="index"
          :to="item.src"
        >
        </van-tab>
      </van-tabs>

      <van-swipe :autoplay="3000" v-if="this.$store.state.data == active">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="contain" v-if="this.$store.state.data == active">
      <van-grid :gutter="8" :border="false">
        <van-grid-item
          v-for="(item, index) in classify"
          :key="index"
          @click="goclass(item.link)"
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
      <van-sticky>
        <van-tabs
          v-model="itemize"
          background="#fbb81b"
          color="transparent"
          @click="getsort(itemize)"
        >
          <van-tab
            :title="item.name"
            v-for="(item, index) in classify"
            :key="index"
            :name="item.name"
          >
          </van-tab>
        </van-tabs>
      </van-sticky>
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
  </div>
</template>

<script>
import "../../assets/icon/iconfont.css";
import { get } from "../../utils/request";

import { categoriesApi } from "../../api/product";
export default {
  components: {},
  data() {
    return {
      products: [],
      titles: [
        { name: "手机", src: "/home" },
        { name: "智能手表", src: "/home/znsb" },
        { name: "耳机", src: "/home/ej" },
        { name: "电视", src: "/home/ds" },
        { name: "灯具", src: "/home/dj" },
        { name: "口红", src: "/home/kh" },
      ],
      active: "手机",
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
      flag: this.$store.state.data,
      itemize: "口红",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async init() {
      const res = await get("/api/v1/products", {
        per: 60,
      });
      console.log(res);
      this.products = res.data.products;
    },

    isFixed(flag) {
      console.log(flag);
      if (flag) {
        this.$refs.head.style.backgroundColor = "white";
      } else {
        this.$refs.head.style.backgroundColor = "transparent";
      }
    },
    async getcategories(name) {
      //
      console.log(name);
      if (name == "手机") {
        this.$store.state.data = "手机";
      }
    },
    async getsort(name) {
      const res = await categoriesApi({ name: name });
      console.log(res);
      this.products = res.data.products;
      console.log(name);
    },
    goclass(src) {
      this.$router.push(src);
      this.$store.state.data = false;
    },
    godetail(id) {
      // this.$store.dispatch("goDetail", id);
      this.$router.push("/detail/" + id);
    },
  },
  created() {
    this.init();
    this.$store.state.data = "手机";
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
.head {
  position: relative;
  width: 100%;
}
.big {
  /* background: url(../../assets/img/pink.jpg) no-repeat; */
  padding-bottom: 20px;
  background-color: #fbb81b;
  width: 100%;
}
.carme {
  position: absolute;

  right: 20%;
  top: 20px;
}
.van-search {
  width: 88%;
  background-color: transparent;
}
.masg {
  position: absolute;
  right: 3%;
  top: 20px;
}
p {
  font-size: 10px;
  font-weight: 900;
}
ul {
  width: 100%;
  overflow: hidden;
}
ul li {
  float: left;
  border-right: 1px black solid;
  line-height: 1;
  padding: 0 4px;
}
ul li:nth-of-type(3) {
  border: none;
}
ul li:nth-of-type(1) {
  padding: 0;
}
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