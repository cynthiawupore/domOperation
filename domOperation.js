

// 可视宽高
var ch = document.documentElement.clientHeight
var cw = document.documentElement.clientWidth

// 内容高度
var sh = document.documentElement.scrollHeight

// 游览器滚动高度
var st = document.body.scrollTop




// 提交之后，立刻禁用点击按钮
document.getElementById("btn").disabled = true;
// 设置某<input>控件为只读
document.getElementById("btn").readOnly = true;



// 十进制转化为一个十六进制值
var num = 255;
console.log(num.toString(16));//ff
// 整型转换
parseInt("12.2222")




// 随机产生颜色
 function randomVal(val){
    return Math.floor(Math.random()*(val + 1));
}
function randomColor(){
    return 'rgb(' + randomVal(255) + ',' + randomVal(255) + ',' + randomVal(255) + ')';
}


// 在角度和弧度之间转换
var rad = degrees*(Math.PI/180);
var degrees = rad*(180/Math.PI);


// 排序数组
var fruits = ['banana','apple','orange','strawberry'];
console.log(fruits.sort());//Array [ "apple", "banana", "orange", "strawberry" ]
var num = [32,43,2,5,-23,0,4];
console.log(num.sort());//Array [ -23, 0, 2, 32, 4, 43, 5 ]