<!-- vue组件模板，渲染组件时替换使用 -->
<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <el-menu default-active="myposition" mode="horizontal" router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="myposition">我的位置</el-menu-item>
        <el-menu-item index="region">行政区域</el-menu-item>
        <el-menu-item index="2">位置查询</el-menu-item>
        <el-menu-item index="3">路线查询</el-menu-item>
        <el-menu-item index="4">轨迹查询</el-menu-item>
      </el-menu>
    </el-header>
  <!--动态组件，无法传递参数-->
    <router-view></router-view>
  </el-container>
</template>

<!-- vue组件脚本，使用ts语言，包含组件类 -->
<script lang="ts">

import Component from 'vue-class-component'
import MyPosition from './tag/my.position.vue'
import Region from './tag/region.vue'
import Vue from 'vue'


@Component({})
export default class App extends Vue {

}

</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">

  /* 整体背景色 */
  .app-container{
    height: 100%;
    background: {
      color:rgba(86, 172, 6, 0.753);
    }
  }

  .app-header{
    height: 90px;
    margin: 0px;
    padding: 0px;
  }

</style>