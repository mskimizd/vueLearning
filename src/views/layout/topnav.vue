<template>
    <div>
        <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
            <el-menu-item  :index="tm.path" v-for="tm in topmenus" v-if="tm.isTop">
                <span>{{tm.meta.cname}}</span>
            </el-menu-item>
        </el-menu>






    </div>
</template>

<script>


  export default {
    data() {
      return {
        activeIndex:"",
        topmenus: []
      }
    },      
    watch: {
        '$route': 'changeRoute'
    },
    mounted () {
        for( let r of this.$router.options.routes){
            if(r.isTop){
                this.topmenus.push(r)
            }
        }
        this.topmenus = this.$router.options.routes;
        this.activeIndex = this.$route.matched[0].path;
        this.generateAsideMenu(this.$route.matched[0].name);
        if(this.$route.matched.length==1){ 
            this.$router.push(this.getFirstActiveMenu(this.$store.state.sidemenus).path);
        }        
    },          
    methods: {
      changeRoute (to, from) {
          this.generateAsideMenu(to.name);
          if(to.matched.length==1){
              this.$router.push(this.getFirstActiveMenu(this.$store.state.sidemenus).path);
          }
      },
      getFirstActiveMenu(menus){
        for( let m of menus){
            if(m.children){
                return this.getFirstActiveMenu(m.children);
            }else{
                return m;
            }
        }
      },
      generateAsideMenu(topMenuName){
        for( let r of this.$router.options.routes){
            if(r.name == topMenuName){
                this.$store.commit('setmenu', r.children);
            }
        }          
      }
    }     
  }

</script>

<style lang="less">

</style>