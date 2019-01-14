/** 百度地图模块 */
declare module 'BMap' {
    /** 地图类 */
    export class Map{
        constructor(id:string,options:any);
        enableScrollWheelZoom(is:boolean):void;
        enableAutoResize():void;
        addControl(control:any):any;
        centerAndZoom(point:any, level:number):void;
    }
    /** 地图类型控制器 */
    export const MapTypeControl:any
    /** 导航控制器 */
    export const NavigationControl:any
    /** 缩放控制器 */
    export const ScaleControl:any
    /** 点类 */
    export class Point{
        constructor(lat:number,lng:number);
    }
    /** 多边形覆盖物 */
    export class Polygon{
        constructor(points: Array<Point>, opts: PolygonOptions)
    }
    /** 多边形构造函数选项 */
    export type PolygonOptions = {
        /** 边线颜色 */
        strokeColor:string,
        /** 填充颜色 */
        fillColor:string,
        /** 边线宽度 */
        strokeWeight:number,
        /** 边线透明度 */
        strokeOpacity:number,
        /** 填充透明度 */
        fillOpacity:number,
        /** 边线样式 */
        strokeStyle:string,
        /** 是否在调用map.clearOverlays时清除此覆盖物 */
        enableMassClear:boolean,
        /** 是否启用线编辑，默认为false */
        enableEditing:boolean,
        /** 是否响应点击事件，默认为true */
        enableClicking:boolean
    }
    /** 折线类 */
    export class Polyline{
        constructor(points: Array<Point>, opts: PolylineOptions);
    }
    /** 折线构造函数选项类型 */
    export type PolylineOptions = {
        /** 折线颜色 */     
        strokeColor:string,
        /** 折线宽度，以像素为单位 */
        strokeWeight:number,
        /** 折线透明度 */
        strokeOpacity:number,
        /** 折线的样式，solid或dashed */
        strokeStyle:string,
        /** 是否在调用map.clearOverlays清除此覆盖物，默认为true */
        enableMassClear:boolean,	
        /** 是否启用线编辑，默认为false */
        enableEditing:boolean
        /** 是否响应点击事件，默认为true */
        enableClicking:boolean,
        /** 配置贴合折线的图标 */
        icons:Array<any>
    }
    /** 圆形覆盖物 */
    export class Circle{
        constructor(center: Point, radius: Number, opts: CircleOptions);
    }
    /** 圆形覆盖物构造函数选项 */
    export type CircleOptions = {
        /** 圆形边线颜色 */
        strokeColor:string,
        /** 圆形填充颜色。当参数为空时，圆形将没有填充效果 */
        fillColor:string,
        /** 圆形边线的宽度，以像素为单位 */
        strokeWeight:number	,
        /** 圆形边线透明度，取值范围0 - 1 */
        strokeOpacity:number,
        /** 圆形填充的透明度，取值范围0 - 1 */	
        fillOpacity:number,
        /** 圆形边线的样式，solid或dashed */	
        strokeStyle:string,	
        /** 是否在调用map.clearOverlays清除此覆盖物，默认为true */
        enableMassClear:boolean,
        /** 是否启用线编辑，默认为false */
        enableEditing:boolean,
        /** 是否响应点击事件，默认为true */
        enableClicking:boolean	
    }
    /** 矩形类 */
    export class Bounds{
        /** 矩形构造函数，参数为西南角与东北角 */
        constructor(sw: Point, ne: Point);
    }
    /** 地理类 */
    export const Geolocation:any
    /** 标记类 */
    export const Marker:any
    /** 城市定位类 */
    export const LocalCity:any
    /** 定位控制器 */
    export const GeolocationControl:any
}

declare module 'BMapLib'{
    import * as BMap from 'BMap'
    class GeoUtils{
        /** 度转化为弧度 */
        static degreeToRad(defree:number):number;
        /** 弧度转化为角度 */
        static radToDegree(rad:number):number;
        /** 获取两点之间的距离 */
        static getDistance(point1:BMap.Point, point2:BMap.Point):number;
        /** 计算多边形面积，无法计算自相交多边形 */
        static getPolygonArea(polygon:BMap.Polygon):number;
        /** 计算折线或者点数据的长度 */
        static getPolylineDistance(polyline:BMap.Polyline):number;
        /** 判断点是否在圆形内 */
        static isPointInCircle(point:BMap.Point, circle:BMap.Circle):boolean;
        /** 判断点是否在多边形内 */
        static isPointInPolygon(point:BMap.Point, polygon:BMap.Polygon):boolean;
        /** 点是否在矩形内 */
        static isPointInRect(point:BMap.Point, bounds:BMap.Bounds):boolean;
        /** 点是否在折线上 */
        static isPointOnPolyline(point:BMap.Point, polyline:BMap.Polyline):boolean;

    }
}

declare module ''

declare module '*.scss' {
    const content: any;
    export = content;
}

declare module '*.jpeg' {
    const content: any;
    export = content;
}

declare module '*.jpg' {
    const content: any;
    export = content;
}

declare module '*.png' {
    const content: any;
    export = content;
}
declare module '*.svg' {
    const content: any;
    export = content;
}

declare module '*.gif' {
    const content: any;
    export = content;
}

declare module '*.vue' {
    const content: any;
    export default content;
}