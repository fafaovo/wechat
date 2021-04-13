// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:'0',
    num2:'',
    fuhao:'',
    result:'',
  },
  getnum:function(e){
    var num =  e.target.dataset.num;
    //获取数字
    if(Number(this.data.num1) == 0)
    {
      this.setData({num1:num});
    }
    else if(Number(this.data.num1) != 0 && this.data.fuhao == '')
    {
      this.setData({num1:this.data.num1+num});
    }
    else if(this.data.fuhao != '' && this.data.num2 == '')
    {
      this.setData({num2:num});
    }
    else{
      this.setData({num2:this.data.num2+num});
    }
    this.result();
  },
  symbol:function(e){
    var symbol =  e.target.dataset.symbol;
    // {1:"+",2:"-",3:"x",4:"÷"}
    if(this.data.num1 != '' && this.data.num2 && this.data.fuhao != '')
    {
      this.setData({num2:''});
      this.setData({fuhao:''});
      this.setData({num1:this.data.result});
    }
    if(symbol == 1)
    {
      this.setData({fuhao:'+'});
    }
    else if(symbol == 2)
    {
      this.setData({fuhao:'-'});
    }
    else if(symbol == 3)
    {
      this.setData({fuhao:'x'});
    }
    else if(symbol == 4)
    {
      this.setData({fuhao:'÷'});
    }
    else if(symbol == 5)
    {
      this.setData({fuhao:'%'});
    }
  },
  result:function(){
    var num1 = Number(this.data.num1);
    var num2 = Number(this.data.num2);
    console.log("result",num1,num2);
    if(num1 != '' && num2 == '')
    {
      this.setData({result:num1});
    }
    else if(num1 != '' && num2 != '')
    {
      if(this.data.fuhao == '+')
      {
        var result = Number(num1) +Number(num2);
        this.setData({result:result});
      }
      else if(this.data.fuhao == '-')
      {
        var result = Number(num1) - Number(num2);
        this.setData({result:result});
      }
      else if(this.data.fuhao == 'x')
      {
        var result = Number(num1) * Number(num2);
        this.setData({result:result});
      }
      else if(this.data.fuhao == '÷')
      {
        var result = Number(num1) / Number(num2);
        this.setData({result:result});
      }
      else if(this.data.fuhao == '%')
      {
        var result = Number(num1) % Number(num2);
        this.setData({result:result});
      }
    }
  },
  remove:function(){
    console.log("remove调用");
    if(this.data.num1 == '0')
    {
      return;
    }
    else if(this.data.num1 != '0' && this.data.fuhao == '')
    {
      if(this.data.num1.length == 1)
      {
        this.setData({num1: '0'});
        this.setData({result:''});
        return;
      }
      var num1 = this.data.num1.substr(0,this.data.num1.length-1);
      this.setData({num1: num1});
    }
    else if(this.data.fuhao != '' && this.data.num2 == '')
    {
      this.setData({fuhao:''});
    }
    else if(this.data.num2 != '')
    {
      var num2 = this.data.num2.substr(0,this.data.num2.length-1);
      this.setData({num2: num2});
    }
    this.result();
  },
  del:function(){
    this.setData({num1:'0'});
    this.setData({num2:''});
    this.setData({fuhao:''});
    this.setData({result:''});
  },
  calculation:function(){

    this.setData({num2:''});
    this.setData({fuhao:''});
    this.setData({num1:String(this.data.result)});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})