<template>
  <div >
    <template v-if="!item.children">
      <el-menu-item :index="item.path">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{item.meta.cname}}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="item.name||item.path">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{item.meta.cname}}</span>
      </template>

      <template v-for="child in item.children" >
        <sidebar-item  v-if="child.children&&child.children.length>0" :item="child" :key="child.path"/>

        <el-menu-item v-else :index="child.path" :key="child.name">
          <i :class="child.meta.icon"></i>
          <span slot="title">{{child.meta.cname}}</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
  import Path from 'path'
    import SidebarItem from "./sidebarItem";

  export default {
    name:"sidebar-item",
    props: {
      // route object
      item: {
        type: Object,
        required: true
      },
    },
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      "sidebar-item": SidebarItem
    }
  }
</script>

<style lang="less">
.el-menu-item i{
  color:#eee;
  font-size:16px;
}

.el-submenu__title i {
  color:#eee;
}

</style>