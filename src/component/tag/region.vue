<!-- vue组件模板，渲染组件时替换使用 -->
<template>
    <el-container class="region-container">
        <el-aside class="region-aside">
            aaaaa
        </el-aside>
        <el-main class="region-main">
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
export default class Region extends Vue {

    map: any = null;

    mounted () {
        this.map = create("map-container");
        let map = this.map;

    }


}

</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">

    .region-container{
        width: 100%;
        height: 100%;
    }
    
    .region-aside{
        width: 20%;
        height: 100%;
    }


    .region-main{
        width: 80%;
        height: 100%;
        padding: 0px;
    }

    /* 去掉百度地图logo */
    .anchorBL{
        display:none;
    }

</style>