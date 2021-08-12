<template>
  <div class="classify">
    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
      @click-nav="get"
    >
      <template #content>
        <van-grid :border="false" :column-num="3">
          <van-grid-item
            v-for="(item, index) in tupian"
            :key="index"
            @click="getclass"
          >
            <van-image :src="item" />
          </van-grid-item>
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { categoriesApi } from "../../api/product";
export default {
  components: {},
  data() {
    return {
      active: 0,
      tupian: [
        "https://img.youpin.mi-img.com/shopmain/54f8dd55ef55902183d1060c7ad1f2c0.jpg",
        "https://img.youpin.mi-img.com/shopmain/dde4d3cd388fd33d23eadacf5dab91e9.jpg",
        "https://img.youpin.mi-img.com/shopmain/92551031cd0fa719a146d0d53a6fe5dc.jpg",
      ],
      items: [
        { text: "口红" },
        { text: "台灯" },
        { text: "电视" },
        { text: "耳机" },
        { text: "智能手表" },
        { text: "手机" },
      ],
      image: [
        [
          "https://img.youpin.mi-img.com/shopmain/54f8dd55ef55902183d1060c7ad1f2c0.jpg",
          "https://img.youpin.mi-img.com/shopmain/dde4d3cd388fd33d23eadacf5dab91e9.jpg",
          "https://img.youpin.mi-img.com/shopmain/92551031cd0fa719a146d0d53a6fe5dc.jpg",
        ],
        [
          "https://img.youpin.mi-img.com/shopmain/47eee69e0ab7e4caba42af571745c60f.jpg",
          "https://img.youpin.mi-img.com/shopmain/dde4d3cd388fd33d23eadacf5dab91e9.jpg",
          "https://img.youpin.mi-img.com/shopmain/b0e1498670402bb2d37bd2d0d05a1830.jpg",
        ],
        [
          "https://img.youpin.mi-img.com/shopmain/0fdb86960454ee78bf006912b717f71f.jpg?w=800&h=800",
          "https://img.youpin.mi-img.com/shopmain/b0961702aa97d9f691e9fd52d896240d.jpg?w=800&h=800",
          "https://img.youpin.mi-img.com/shopmain/45c3c122f4267adf311836c0f34b0964.jpg?w=800&h=800",
        ],
        [
          "https://img.youpin.mi-img.com/shopmain/ac6a6504478de1054b115d8f7ddb942b.jpg",
          "https://img.youpin.mi-img.com/shopmain/50100f8436f2f52f4bc1f3261912ebba.jpg?w=800&h=800",
          "https://img.youpin.mi-img.com/shopmain/5fe40d90687c8409412f23be44658634.jpg?w=800&h=800",
        ],

        [
          " https://img.youpin.mi-img.com/shopmain/7c019d4cfdc299aa2363dde4985e4c39.jpg",
          "https://img.youpin.mi-img.com/shopmain/1c9a1782dbf3774b746383f41446d9ff.jpg?w=800&h=800",
          "https://img.youpin.mi-img.com/shopmain/7988922de13bc763959c638461f4a0e5.jpg",
        ],
        [
          " https://img.youpin.mi-img.com/shopmain/32919e719c7d8887b4f6f5067e447ca5.jpeg?w=800&h=800",
          "https://img.youpin.mi-img.com/shopmain/b2773993a2471b96399383797508159d.jpg?w=800&h=800",
          "https://img.youpin.mi-img.com/shopmain/5f535026c1020c6863e5c9c51f6f3ec9.jpg?w=800&h=800",
        ],
      ],
      id: 0,
    };
  },
  computed: {},
  watch: {},

  methods: {
    get(id) {
      console.log(id);
      this.tupian = this.image[id];
      this.id = id;
    },
    async getclass() {
      const res = await categoriesApi({ name: this.items[this.id].text });
      console.log(this.items[this.id].text);
      console.log(res);
      if (this.id == 0) {
        this.$router.push("/home/kh");
      }
      if (this.id == 1) {
        this.$router.push("/home/dj");
      }
      if (this.id == 2) {
        this.$router.push("/home/ds");
      }
      if (this.id == 3) {
        this.$router.push("/home/ej");
      }
      if (this.id == 4) {
        this.$router.push("/home/znsb");
      }
      if (this.id == 5) {
        this.$router.push("/home");
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>