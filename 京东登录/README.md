<<<<<<< HEAD
* 一.在input中使用 bindinput = “值” 来获取值value  
	*  1.等同于 id,class 来获取当前变量在js中使用  
	*  2.在微信小程序的JS中使用 值:function(e){},此处的e可以用于获取整个input的参数  
	*  3.使用 e.detail.value 即可得到input的value值  
	*  4.this.setData({ Data中变量名称 : 当前函数要放入的变量 }); 可以将改变量放入自带的data中,并且可以使用this.data.名字在其他函数体内来调用这个变量
	*  5.获取复选框状态时，使用bindchange，用法和bindinput一样,
* 二.在按钮中使用 bindtap = "值" 来触发点击效果
	*  1.等同于 onlick 并且不需要() 
	*  2.在JS中使用   值:function(){}, 
* 三.使用 wx.showToast 可以在屏幕中间弹出窗口
	*  1.  可选参数有 duration时间 等等
* 四.使用form提交表单内的数据,即
	*  1.form内 bindsubmit="函数名"  
	*  2.给input添加name  
	*  3.button按钮提交内 form-type="submit"  
	*  4.在JS中使用 函数名:function(e){}, 此处e可以获取到页内的元素  即e.detail.value.'你给input提供的name'
* 五.在标签中也可以使用ifelse语句, wx:if 条件渲染 根据对应的条件，不符合销毁组件
	*  1.使用方式 <input wx:if={{bool类型}} type="text" /> 
* 六.按钮type状态为primary为绿色可点击
	*  1.通过disabled=”布尔值“可以修改为灰色不可选中

  
