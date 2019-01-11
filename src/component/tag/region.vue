<!-- vue组件模板，渲染组件时替换使用 -->
<template>
    <el-container class="region-container">
        <el-aside class="region-aside">
            <el-tree :props="props" :load="load" lazy > </el-tree>
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
import regions from '../../util/region.util'

@Component({})
export default class Region extends Vue {

    map: any = null;

    regions: any = regions;

    props: any = {
        label: 'name',
        children: 'citys'
    };

    mounted () {
        this.map = create("map-container");
        let map = this.map;

    }

    load(node:any, resolve:any , reject:any){
        if(node.level == 0){
            return resolve([{name:"直辖市",data:"municipalities",disabled:false},{name:"省级行政区",data:"provinces"},{name:"其它",data:"other"}])
        }else if(node.level == 1){
            let list = this.regions[node.data.data]
            if(node.data.data == "municipalities"){
                return resolve(list.map((item:any)=>{return {name:item.n}}));
            }else if(node.data.data == "provinces"){
                return resolve(list.map((item:any,index:number)=>{return {name:item.n,data:index}}))
            }else{
                return resolve(list.map((item:any)=>{return {name:item.n}}));
            }
        }else if(node.level == 2){
            let province = this.regions["provinces"][node.data.data]
            return resolve(province.cities.map((item:any)=>{return {name:item.n}}))
        }else{
        }
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