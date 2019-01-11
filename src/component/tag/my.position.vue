<!-- vue组件模板，渲染组件时替换使用 -->
<template>
    <el-container class="my-position-container">
        <el-aside class="my-position-aside">
            <!--经纬度填写框-->
            <el-form label-width="50px" class="my-position-jdwd">
                <el-form-item label="经度">
                    <el-input placeholder="请填写经度" suffix-icon="el-icon-location" v-model="jd"></el-input>
                </el-form-item>
                <el-form-item label="纬度">
                    <el-input placeholder="请填写纬度" suffix-icon="el-icon-location" v-model="wd"></el-input>
                </el-form-item>
            </el-form>
            <el-form label-width="50px" class="my-position-city">
                <el-form-item label="城市">
                    <el-input placeholder="请填写城市" suffix-icon="el-icon-location" v-model="city"></el-input>
                </el-form-item>
                <el-form-item label="代码">
                    <el-input readonly suffix-icon="el-icon-location" v-model="code"></el-input>
                </el-form-item>
                <el-form-item label="经度">
                    <el-input readonly suffix-icon="el-icon-location" v-model="center.lng"></el-input>
                </el-form-item>
                <el-form-item label="纬度">
                    <el-input readonly suffix-icon="el-icon-location" v-model="center.lat"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="cityLocation">城市定位</el-button>
                </el-form-item>
            </el-form>
        </el-aside>
        <el-main class="my-position-main">
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

    jd: any = null;
    wd: any = null;

    city: any = null;
    code: any = null;
    center:{lat:number,lng:number} = {} as any;

    mounted () {
        this.map = create("map-container");
        let map = this.map;
        
        new BMap.Geolocation().getCurrentPosition((r:any,s:any)=>{
            if(r){
                this.jd = r.longitude
                this.wd = r.latitude
                this.jdwdLocation();
            }else{
                this.$notify({
                    title: '经纬度定位失败',
                    message: "",
                    duration: 3000,
                    type: 'warning'
                })
            }
        },{enableHighAccuracy: true})
      
        new BMap.LocalCity().get((result:any)=>{
            this.city = result.name
            this.center = result.center
            this.code = result.code
            this.cityLocation()
        })
    }

    jdwdLocation(){
        this.map.centerAndZoom(new BMap.Point(this.jd,this.wd), 14);
        this.$notify({
            title: '经纬度定位完成',
            message : `经度：${this.jd}，纬度：${this.wd}`,
            duration: 3000,
            type: 'success'
        });
    }

    cityLocation(){
        this.map.setCenter(this.city);
        this.$notify({
            title: '城市定位完成',
            message: this.city,
            duration: 3000,
            type: 'success'
        });
    }
}

</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">

    .my-position-container{
        width: 100%;
        height: 100%;
    }
    
    .my-position-aside{
        width: 20%;
        height: 100%;
    }

    .my-position-jdwd , .my-position-city {
        width: 80%;
        margin: 20px auto 0px auto;
        padding: 20px;
        border-radius: 5px;
        background: {
            color: white;
        }
    }

    .my-position-main{
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