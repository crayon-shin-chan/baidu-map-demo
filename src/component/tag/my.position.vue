<!-- vue组件模板，渲染组件时替换使用 -->
<template>
  <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
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
export default class MyPosition extends Vue {

    map: any = null;

    mounted () {
        this.map = create("map-container");
        let map = this.map;
        /* 百度地图获取地理位置失败
        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r:any,s:any){
            console.log('定位完成')
            console.log(r)
            console.log(s)
            let mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            alert('您的位置：'+r.point.lng+','+r.point.lat);
        },{enableHighAccuracy: false})
        */
      let city = new BMap.LocalCity();
      city.get(function(result:any){
          console.log('您的城市信息为：');
          console.log(result);
          map.setCenter(result.name);
      })
    }
}

</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">

    /* 去掉百度地图logo */
    .anchorBL{
        display:none;
    }

    .map-container{
        width:100%;
        height: 500px;
    }

</style>