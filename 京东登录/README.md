在WXML中  
  1.bindinput   
    等同于 id,class 来获取当前变量在js中使用，  执行次函数是需要在行参处传入一个变量function(e)  只能在input中使用  
  2.bindtap   
    等同于 onlick   并且不需要(),运行函数  
在JS中  
  1.wx.showToast  
    弹出一个带图片和文字的窗口 可选参数 duration时间  
  2.var name = e.detail.value;    
    获取到值 此处e为行参传入的e 等同于document.querySelector  
  3.this.setData({ Data中变量名称 : 当前函数要放入的变量 });  
    将数据放入data， this当前页面->设置Data  放入data中的变量才能在其他地方通过this.Data.变量名获取  
