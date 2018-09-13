<!-- vue组件模板，渲染组件时替换使用 -->
<template>
  <el-container>
  <el-header height="100px">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="select" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">我的位置</el-menu-item>
      <el-menu-item index="2">位置查询</el-menu-item>
      <el-menu-item index="3">路线查询</el-menu-item>
      <el-menu-item index="4">轨迹查询</el-menu-item>
    </el-menu>
  </el-header>
  <component :is="component"></component>
</el-container>
</template>

<!-- vue组件脚本，使用ts语言，包含组件类 -->
<script lang="ts">

import Component from 'vue-class-component'
import MyPosition from './tag/my.position.vue'
import Vue from 'vue'


@Component({
  components: {
    MyPosition
  }
})
export default class App extends Vue {

    component:string = 'MyPosition';

    activeIndex:string = '1';

    select = (index:string)=>{
      this.activeIndex = index;
      console.log("当前选中下标为："+index);
    }


}

</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">
body{
}
</style>