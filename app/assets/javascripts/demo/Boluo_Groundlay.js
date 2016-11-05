/**
 * Created by maffee on 16/10/26.
 */
//1.定义一个自定义覆盖物的构造函数，通过构造函数参数可以传递一些自由的变量。
//参考GroundOverlay



//2.设置自定义覆盖物对象的prototype属性为Overlay的实例，以便继承覆盖物基类。




//3.实现initialize方法，当调用map.addOverlay方法时，API会调用此方法。




//4.实现draw方法。





//1.定义一个自定义覆盖物的构造函数，通过构造函数参数可以传递一些自由的变量。
//参考GroundOverlay
// 定义自定义覆盖物的构造函数
function SquareOverlay(center, length, color){
    this._center = center;
    this._length = length;
    this._color = color;
}

//2.设置自定义覆盖物对象的prototype属性为Overlay的实例，以便继承覆盖物基类。
// 继承API的BMap.Overlay
SquareOverlay.prototype = new BMap.Overlay();


//3.实现initialize方法，当调用map.addOverlay方法时，API会调用此方法。
// 实现初始化方法
SquareOverlay.prototype.initialize = function(map){
// 保存map对象实例
    this._map = map;
    // 创建div元素，作为自定义覆盖物的容器
    var div = document.createElement("div");
    div.style.position = "absolute";
    // 可以根据参数设置元素外观
    div.style.width = this._length + "px";
    div.style.height = this._length + "px";
    //div.style.backgroundColor = this._color;
    div.style.backgroundImage = "url('/assets/demo/soshineseeA/boluo_A_nvdi_s.png')";

// 将div添加到覆盖物容器中
    map.getPanes().mapPane.appendChild(div);
// 保存div实例
    this._div = div;
// 需要将div元素作为方法的返回值，当调用该覆盖物的show、
// hide方法，或者对覆盖物进行移除时，API都将操作此元素。
    return div;
}


//4.实现draw方法。
// 实现绘制方法
SquareOverlay.prototype.draw = function(){
// 根据地理坐标转换为像素坐标，并设置给容器
    var position = this._map.pointToOverlayPixel(this._center);
    this._div.style.left = position.x - this._length / 2 + "px";
    this._div.style.top = position.y - this._length / 2 + "px";
}

// 实现显示方法
SquareOverlay.prototype.show = function(){
    if (this._div){
        this._div.style.display = "";
    }
}
// 实现隐藏方法
SquareOverlay.prototype.hide = function(){
    if (this._div){
        this._div.style.display = "none";
    }
}


SquareOverlay.prototype.toggle = function(){
    if (this._div){
        if (this._div.style.display == ""){
            this.hide();
        }
        else {
            this.show();
        }
    }
}