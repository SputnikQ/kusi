<template>
  <div class="mine">
    <div class="header">
      <div class="lf" style="width: 80px">
        <van-image round fit="cover" width="70px" height="70px" :src="qwer" />
      </div>

      <div class="modl">
        <span class="spname">{{ name }}</span>
        <van-tag round type="primary" size="large" color="#fbb81b"
          >试用会员</van-tag
        >
      </div>
      <div class="rig">
        <ul>
          <li class="iconfont">&#xe644;</li>
          <li class="iconfont">&#xe687;</li>
          <li class="iconfont" @click="goset">&#xe673;</li>
          <li class="iconfont">&#xe61e;</li>
        </ul>
      </div>
      <ul class="my">
        <li>
          <p>0</p>
          <p>我的收藏</p>
        </li>
        <li>
          <p>0</p>
          <p>我的关注</p>
        </li>
        <li>
          <p>0</p>
          <p>我的浏览</p>
        </li>
        <li>
          <p>0</p>
          <p>优惠券</p>
        </li>
      </ul>
    </div>
    <div class="contain">
      <div class="myorder">
        <van-cell
          is-link
          title="我的订单"
          @click="show = true"
          title-style="font-size:16px;font-weight:800"
          value="全部订单"
        />
        <ul>
          <li @click="goorder">
            <van-icon name="card" size="36" color="#feb81c" />
            <p style="line-height: 1; margin-top: 1px">请付款</p>
          </li>
          <li>
            <p class="iconfont" style="font-size: 38px; color: #feb81c">
              &#xe612;
            </p>
            <p style="line-height: 1">待收货</p>
          </li>
          <li>
            <p
              class="iconfont"
              style="font-size: 31px; color: #feb81c; margin-top: 5px"
            >
              &#xe61b;
            </p>
            <p style="line-height: 1; margin-top: 2px">待评价</p>
          </li>
          <li>
            <p
              class="iconfont"
              style="font-size: 26px; color: #feb81c; margin-top: 6px"
            >
              &#xe60e;
            </p>
            <p style="line-height: 1; margin-top: 6px">退货单</p>
          </li>
        </ul>
      </div>
      <div class="myrich">
        <van-cell
          is-link
          title="我的资产"
          @click="show = true"
          title-style="font-size:16px;font-weight:800"
          value="全部资产"
        />
        <ul>
          <li>
            <p>0</p>
            <p>积分</p>
            <p>每日签到领积分</p>
          </li>
          <li>
            <p>0</p>
            <p>礼品卡</p>
            <p>高端礼赠首选</p>
          </li>
          <li>
            <p>0</p>
            <p>库支票</p>
            <p>最高十二期免息</p>
          </li>
          <li>
            <p>0</p>
            <p>聚合分期</p>
            <p>多种分期方式</p>
          </li>
        </ul>
      </div>
      <div class="myserve">
        <van-cell
          is-link
          title="我的服务"
          @click="show = true"
          title-style="font-size:16px;font-weight:800"
          value="全部服务"
        />
        <van-grid square>
          <van-grid-item
            v-for="value in 16"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import { userApi } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      name: "",
      qwer: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async init() {
      const res = await userApi();
      console.log(res);
      this.name = res.data.nickName;
      this.qwer = res.data.avatar;
    },
    goset() {
      this.$router.push("/setup");
    },
    goorder() {
      this.$router.push("/orderlist");
    },
  },
  created() {
    this.init();
  },
  mounted() {},
};
</script>
<style scoped>
.header {
  padding: 20px 10px;
  background-color: #1a191e;
  height: 140px;
}
.van-image {
  border: 2px #5e5d62 solid;
}
.lf {
  float: left;
}
.modl .van-tag {
  margin-top: 3px;
}
.modl .spname {
  float: left;
  display: block;
  font-size: 24px;
  margin-top: 10px;
  color: #fefefe;
  width: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.modl {
  float: left;
  width: 90px;
  height: 75px;
  overflow: hidden;
}

.rig ul {
  float: right;
  width: 165px;
}
.rig ul li {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 30px;
  color: #fbb81b;
}
.my {
  width: 100%;
  height: 75px;
  clear: both;
}
.my li {
  float: left;
  text-align: center;
  width: 25%;
}
.my li p:nth-of-type(1) {
  font-size: 22px;
  font-weight: 800;
  color: #fefefe;
  margin-top: 10px;
}
.my li p:nth-of-type(2) {
  font-size: 14px;
  color: #fefefe;
}
.contain {
  background-color: #f5f5f5;
  overflow: hidden;
}
.myorder {
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
}
.myorder ul {
  width: 100%;
  height: 80px;
  background-color: white;
}
.myorder ul li {
  font-weight: 800;
  float: left;
  width: 25%;
  text-align: center;
}
.myorder ul li p:nth-of-type(2) {
  font-size: 14px;
}
.myorder ul li p {
  font-size: 14px;
}

.myrich {
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
}
.myrich ul {
  width: 100%;
  height: 80px;
  background-color: white;
}
.myrich ul li {
  font-weight: 800;
  float: left;
  width: 25%;
  text-align: center;
}
.myrich ul li p:nth-of-type(2) {
  font-size: 14px;
  font-weight: 800;
  line-height: 22px;
}
.myrich ul li p:nth-of-type(1) {
  font-size: 16px;
  font-weight: 800;
  color: #fbb81b;
  line-height: 30px;
}
.myrich ul li p:nth-of-type(3) {
  font-weight: normal;
  line-height: 22px;
}
.myserve {
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
  margin-bottom: 65px;
}
</style>