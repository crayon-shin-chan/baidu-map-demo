

declare module 'BMap' {
    export class Map{
        constructor(id:string,options:any);
        enableScrollWheelZoom(is:boolean):void;
        enableAutoResize():void;
        addControl(control:any):any;
        centerAndZoom(point:any, level:number):void;
    }
    export const MapTypeControl:any
    export const NavigationControl:any
    export const ScaleControl:any
    export const Point:any
    export const Geolocation:any
    export const Marker:any
    export const LocalCity:any
    export const GeolocationControl:any
}

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