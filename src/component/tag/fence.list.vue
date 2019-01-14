<!-- vue组件模板，渲染组件时替换使用 -->
<template>
    <el-aside class="fence-list-aside">
        围栏列表
        <el-button type="primary" @click="createFence">新建围栏</el-button>
        <el-button type="primary" @click="deleteFence">删除围栏</el-button>
    </el-aside>
</template>

<!-- vue组件脚本，使用ts语言，包含组件类 -->
<script lang="ts">

import Component from 'vue-class-component';
import Vue from 'vue'

@Component({})
export default class FenceList extends Vue {

    createFence(){
        this.$router.push("/fence/create")
    }

}

</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">
    
    .fence-list-aside{
        width: 20%;
        height: 100%;
    }

</style>