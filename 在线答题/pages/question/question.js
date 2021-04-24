// pages/question/question.js
// 调用接口
const dy = require("../question/data.js")
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    dy:dy.dictionaryArray,
    fs:0,
    array:0,
    id:0,
  },
  prev:function(){
    this.setData({id:this.data.id-1});
  },
  next:function(){
    this.setData({id:this.data.id+1});
  },
  loginHandle:function(e){
    var a = e.detail.value.dx;
  },
  cur:function(e){
    this.setData({id:e.detail.current});
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