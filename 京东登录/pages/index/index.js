// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n:'',
    p:'',
    xs:true,
  },
  show:function(){
    if(this.data.xs){
      this.setData({xs:false});
    }else{
      this.setData({xs:true});
      
    }
  },
  dl:function()
  {
    if(this.data.n == 'root' && this.data.p == 'root'){
      wx.showToast({
        title: '登录成功',
        duration: 4000,
        image:'/images/true.png',
      })
    }
    else{
      wx.showToast({
        title: '登录失败',
        duration:4000,
        image:'/images/false.png',
      })
    }
  },
  hq:function(e){
    var name = e.detail.value;
    //获取到值
    this.setData({n:name});
    //将数据放入data， this当前页面->设置Data
    //放入data中的变量才能在其他地方通过this.Data.变量名获取
  },
  pw:function(e){
    var pw = e.detail.value;
    this.setData({p:pw});
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