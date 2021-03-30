<<<<<<< HEAD
* 在WXML中  
 * 一.bindinput   
  * 等同于 id,class 来获取当前变量在js中使用，  
  * 执行次函数是需要在行参处传入一个变量function(e)  
  * 只能在input中使用  
 * 二.bindtap   
  * 等同于 onlick   并且不需要(),运行函数  
  * 在wxml中使用name标签时
* 在JS中  
 * 一.wx.showToast  
  * 弹出一个带图片和文字的窗口   
  * 可选参数 duration时间  
 * 二.var name = e.detail.value;    
  * 获取到值 此处e为行参传入的e 等同于document.querySelector  
 * 三.this.setData({ Data中变量名称 : 当前函数要放入的变量 });  
  * 将数据放入data， this当前页面->设置Data  
  * 放入data中的变量才能在其他地方通过this.Data.变量名获取
 * 四.使用form提交表单内的数据,即  
  * 1.form内 bindsubmit="函数名"  
  * 2.button按钮提交内 form-type="submit"  
  * 3.给input添加name
  * 4.接着使用 函数名:function(e){}, 此处e可以获取到页内的元素  即e.detail.value.'你给input提供的name'
  


  
