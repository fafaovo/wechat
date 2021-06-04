// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[1,2,3,4,5],
    text:['凑合','还行','可以','满意','非常满意'],
    id:4,
    con:[
      {
        id:1,
        txt:'文字文字',
        bool:false
      },
      {
        id:2,
        txt:'文字文字',
        bool:false
      },
      {
        id:3,
        txt:'文字文字',
        bool:false
      },
      {
        id:4,
        txt:'文字文字',
        bool:false
      },
      {
        id:5,
        txt:'文字文字',
        bool:false
      }
    ]
  },
  btn_xx:function(e){
    var e = e.target.dataset.val;
    console.log(e);
    this.setData({id:e-1});
  },
  act:function(e){
    var e = e.target.dataset.val;
    console.log(e);
    if(this.data.con[e-1].bool){
      this.data.con[e-1].bool = false;
    }else{
      this.data.con[e-1].bool = true;
    }
    this.setData({con:this.data.con});
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