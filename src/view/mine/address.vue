<template>
  <div class="address">
    <van-nav-bar>
      <template #left>
        <p class="iconfont" style="font-size: 28px" @click="back">&#xe606;</p>
      </template>
    </van-nav-bar>
    <div v-if="!list && !flag">
      <van-empty description="还没有您的地址信息" />
    </div>
    <div v-if="list">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
    <van-address-edit
      v-if="flag"
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import {
  getAddressApi,
  addAddressApi,
  editAddressApi,
  deletaAddressApi,
} from "../../api/address";
import { areaList } from "@vant/area-data";
export default {
  components: {},

  computed: {},
  watch: {},

  data() {
    return {
      flag: false,
      areaList,
      searchResult: [],
      chosenAddressId: "1",
      list: [],
    };
  },
  methods: {
    onAdd() {
      //   Toast("新增地址");
      this.list = this.flag;
      this.flag = true;
    },
    async onEdit(item) {
      //   Toast("编辑地址:" + index)
      //   console.log(item);
      //   const res =await editAddressApi(item.id,)
      this.list = this.flag;
      this.flag = true;
      //   this.$store.state.addressid
      console.log(item);
      this.$store.state.addressid = item.id;
      console.log(this.$store.state.addressid);
    },
    back() {
      this.$store.state.addressid = "";

      this.$router.go(-1);
    },
    async init() {
      const res = await getAddressApi();
      console.log(res);
      res.data.addresses.forEach((v) => {
        let obj = {
          id: v._id,
          name: v.receiver,
          tel: v.mobile,
          address: v.regions + v.address,
          isDefault: v.isDefault,
        };
        this.list.push(obj);
      });
      console.log(this.list);
    },
    async onSave(content) {
      console.log(content);
      let obj = {
        receiver: content.name,
        mobile: content.tel,
        regions: content.province + content.city + content.county,
        address: content.addressDetail,
        isDefault: content.isDefault,
      };

      if (!this.$store.state.addressid) {
        const res = await addAddressApi(obj);
        console.log(res);
        // if (obj.isDefault) {
        //   this.$store.state.defaultAddress = res.data.info._id;
        //   console.log(this.$store.state.defaultAddress);
        // }
      }
      console.log(obj);
      if (this.$store.state.addressid) {
        const res = await editAddressApi(this.$store.state.addressid, obj);
        console.log(res);
        this.$store.state.addressid = "";
      }
    },
    async onDelete() {
      Toast("删除成功");
      const res = await deletaAddressApi(this.$store.state.addressid);
      console.log(res);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  created() {
    this.init();
  },
  mounted() {},
};
</script>
<style scoped>
</style>