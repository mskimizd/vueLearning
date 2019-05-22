<template>
  <el-scrollbar style="height:100%;width:200px;min-width:200px;">
  <div class="logo">
    <span class="image">
      <img src="../../assets/image/logo.png" />
    </span>
    <span style="letter-spacing: 2px;">测试系统</span>
  </div>
<el-menu style="height:100vh" router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#304156"
text-color="#fff" active-text-color="#409eff" :collapse-transition="false" :collapse="isCollapse">
<sidebar-item v-for="route in routerData" :key="route.name" :item="route" 
/>
</el-menu>
</el-scrollbar>
</template>

<script>
  import SidebarItem from "./sidebarItem";

  import Config from "~/config";

  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    computed: {
      routerData() {
        return this.$store.state.sidemenus
      }
    }, 
    watch: {
        '$route': 'changeRoute'
    },       
    mounted: function () {


    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      changeRoute (to, from) {
        // console.log(this.$route);
      },
    },
    components: {
      "sidebar-item": SidebarItem
    }
  };
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
.el-menu--collapse {
  width: 64px;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}

.logo{
  position: relative;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 60px;
    line-height: 60px;
    background: #425375;
    color: #fdfdfd;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    overflow: hidden;
    box-sizing: border-box;
    .image{
      position: relative;
      top:4px;
      margin-right: 10px;
    }
}
</style>