// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    long:113.27216,
    lat:23.12699,
    mark:[{
      id:0,
      title:'xx大酒店',
      latitude:23.12699,
      longitude:113.27216,
      iconPath:'/pages/images/map/hotel.png',
      width:50,
      height:50
    }]
  },
  markertap:function(){
    wx.openLocation({
      latitude: this.data.lat,
      longitude: this.data.long,
    })
  },
  getmypos:function(){
    wx.getLocation({
      altitude: 'altitude',
      type:'gcj02',
      success:function(res){
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
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