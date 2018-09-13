import * as BMap from 'BMap';

export const create = (id:string)=>{

    /** 地图实例，不可点击 */
    let map = new BMap.Map(id, {enableMapClick:false});

    /** 地图类型控制器 */
    map.addControl(new BMap.MapTypeControl({}));

    /** 启用滚轮放大缩小 */
    map.enableScrollWheelZoom(true);

    /** 启用自动适应容器尺寸变化，默认启用 */
    map.enableAutoResize();

    /** 添加定位、缩放栏控制器 */
    map.addControl(new BMap.NavigationControl());

    /** 显示缩放比例尺 */
    map.addControl(new BMap.ScaleControl());

    /** 百度地图地理位置定位控件可惜一定位就错 */
    //map.addControl(new BMap.GeolocationControl())

    /** 设置地图初始化点以及缩放级别，缩放级别越大越清楚 */
    map.centerAndZoom(new BMap.Point(109.0, 34.3), 15);
    
    return map;
}