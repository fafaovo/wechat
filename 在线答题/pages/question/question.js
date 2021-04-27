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
    id:0,
    open:0,
    answer:new Array(5),
    wx:true
  },
  loginHandle:function(e){
    var a = e.detail.value.dx;
    var i = this.data.id;
    if(this.data.open == 1 ){
      this.data.answer[this.data.id] = a;
      this.fract();
      return;
    }
    this.data.answer[this.data.id] = a;
    console.log(this.data.answer);
  },
  prev:function(){
      if(this.data.id == 4 && this.data.open == 1){
        this.setData({open:0});
      }
    this.setData({id:this.data.id-1});
    
  },
  next:function(){
    this.setData({id:this.data.id+1});
  },
  cur:function(e){
    this.setData({id:e.detail.current});
  },
  tijiao:function(e){
    this.setData({open:1});
  },
  fract:function(){
    this.setData({fs:0});
    for(var i = 0; i < 5; i++){
      var result = this.data.dy[i].ranswer;
      var current = this.data.answer[i];
      if(result == current){
        this.setData({fs:this.data.fs+20});
      }
    }
    console.log("统计分数",this.data.fs);
    this.setData({wx:false});
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