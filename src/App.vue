<template>
  <div id="app">
    <!-- <transition name='el-zoom-in-center'>  -->
      <router-view></router-view> 
     <!-- </transition> -->
  </div>
</template>

<script>
export default {
  created:function(){
    var loading = document.getElementById("initLoading");
    loading.classList.add("animated");
    loading.classList.add("fadeOut");
    // loading.style.display = "none";
    loading.style.zIndex = -1;
    // console.log(loading);
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style lang="less">

#app {
  font-family: Helvetica, sans-serif; 
  height: 100vh;
  // height:100vh;
  // overflow: hidden;
  /* text-align: center; */
}

.el-notification{
  border-radius: 0px;
}

.el-message{
  border-radius: 0px;  
}

</style>
