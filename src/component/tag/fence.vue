<!-- vue组件模板，渲染组件时替换使用 -->
<template>
    <el-container class="fence-container">
        <!--边栏使用子路由-->
        <router-view></router-view>
        <el-main class="fence-main">
            <div id="map-container" class="map-container">
            </div>
        </el-main>
    </el-container>
</template>

<!-- vue组件脚本，使用ts语言，包含组件类 -->
<script lang="ts">

import { create } from '../../util/baidu.map.util';
import Component from 'vue-class-component';
import * as BMap from 'BMap';
import Vue from 'vue'

@Component({})
export default class Fence extends Vue {

    map: any = null;


    mounted () {
        this.map = create("map-container");
    }

}

</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">

    .fence-container{
        width: 100%;
        height: 100%;
    }
    

    .fence-main{
        width: 80%;
        height: 100%;
        padding: 0px;
    }

    .map-container{
        width: 100%;
        height: 100%;
    }

    /* 去掉百度地图logo */
    .anchorBL{
        display:none;
    }

</style>