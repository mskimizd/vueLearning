<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="box-card" :body-style="{background:'#409EFF'}">
            <div class="dashboard-card">
              <span>ES</span>
              <span>111</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card"  :body-style="{background:'#67C23A'}">  
            <div class="dashboard-card">
              <span>MYSQL</span>
              <span>222</span>            
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card" :body-style="{background:'#EB9E05'}">
            <div class="dashboard-card">
              <span>HBASE</span>
              <span>333</span>              
            </div>
          </el-card>
        </el-col>
      </el-row> 
              
    </div>
</template>

<script>
  import Config from "~/config";

  export default {
    data() {
      return {};
    },
    mounted: function() {

    },
    methods: {

    },    
  }

</script>

<style lang="less">
  .dashboard-card{
    display:flex;
    justify-content: space-between;
    color:#fff;
    font-size:24px;
    height:80px;
    line-height: 80px;
  }

  .dashboard-list{
    list-style:none;
    margin:0;
    padding:0;
    li{
      display:flex;
    }
    img{
      width:100px;
    }
  }
</style>