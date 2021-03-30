// pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:'',
    num2:'',
    fuhao:'',
    result:'',
  },
  bj:function(e){
    var n1 = Number(e.detail.value.n1);
    var n2 = Number(e.detail.value.n2);
    this.setData({n1:n1});
    this.setData({n2:n2});
    if(n1==n2){
      this.setData({result:'相等'});
    }else if(n1>n2){
      this.setData({result:'大于'});
    }else{
      this.setData({result:'小于'});
    }
  },
  btn:function(){
    var num1 = Number(this.data.num1);
    var num2 = Number(this.data.num2);
    if(num1 < num2)
    {
      wx.showToast({
        title: num1 +'<'+ num2,
        duration:4000,
      })
    }
    else if(num1 == num2)
    {
      wx.showToast({
        title: num1 +'='+ num2,
        duration:4000,
      })
    }
    else{
      wx.showToast({
        title: num1 +'>'+ num2,
        duration:4000,
      })
    }
  },
  num1:function(e){
    var num1 = e.detail.value;
    this.setData({num1:num1});
  },
  num2:function(e){
    var num2 = e.detail.value;
    this.setData({num2:num2});
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