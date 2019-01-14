<!-- vue组件模板，渲染组件时替换使用 -->
<template>
    <el-container class="region-container">
        <el-aside class="region-aside">
            <el-tree :props="props" :load="load" @node-click="onNodeClick" accordion lazy highlight-current class="region-tree"> </el-tree>
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
            if(node.parent.data.data != "provinces"){
                return resolve([])
            }
            let province = this.regions["provinces"][node.data.data]
            return resolve(province.cities.map((item:any)=>{return {name:item.n}}))
        }else{
            return resolve([])
        }
    }

    onNodeClick(data:any,node:any){
        if(node.level <= 1){
            return
        }
        let name = node.data.name;
        let parent = node.parent
        while(parent&&parent.data&&parent.level>1){
            name = parent.data.name + name
            parent = parent.parent
        }
        new BMap.Boundary().get(name,(rs)=>{
            let pointss:BMap.Point[][] = rs.boundaries.map((item:any)=>item.split(";").map((str:string)=>new BMap.Point(+str.split(",")[0],+str.split(",")[1])))
            let points:BMap.Point[] = [];
            pointss.forEach(ps=>points = points.concat(ps))
            console.log(points)
            this.map.clearOverlays()
            this.map.addOverlay(new BMap.Polygon(points,{strokeColor:"green",strokeWeight:2}))
            this.map.setViewport(points)
        })

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

    .region-tree{
        width: 80%;
        margin: 20px auto 0px auto;
        padding: 20px;
        border-radius: 5px;
        background: {
            color: white;
        }
    }


    .region-main{
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