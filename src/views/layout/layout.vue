<template>
  <el-container style="height:100%">
    <!-- <me-aside /> -->
    <!-- <el-aside> -->
    <me-aside />
    <!-- </el-aside>   -->
    <el-container class="right-container">
      <el-header class="tmp-topbar">
        <topnav />
      </el-header>
      <el-main class="app-main">
        <keep-alive >
          <router-view />
        </keep-alive>        
      </el-main> 
    </el-container> 
  </el-container>
</template>

<script>
  import aside from './aside';
  import topnav from './topnav';

  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      'me-aside':aside,
      'topnav': topnav
    },    
  }
</script>

<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu--collapse {
    width: 64px;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  } 

  .tmp-topbar{
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    height: 34px;
    width: 100%;
    height: 50px;
  }


  

</style>