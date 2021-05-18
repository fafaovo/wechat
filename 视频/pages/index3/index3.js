// pages/index3/index3.js
function randomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  wb:'',
  data: {
    sp:'',
    wb:'',
    list:[
    {
      text:'第一条弹幕',
      color:"#9932CC",
      time:1
    },
    {
      text:'第一条弹幕',
      color:"#9932CC",
      time:2
    },
    {
      text:'第一条弹幕',
      color:"#9932CC",
      time:3
    },
  ]
  },
  open:function(){
    let thay = this;
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log(res.tempFilePath);
        thay.setData({sp:res.tempFilePath});
      }
    })
  },
  fs:function(){
    let wb =this.data.wb;
    this.videoContext.sendDanmu({
      text: wb,
      color: randomColor() 
    })
    this.setData({wb:''});
  },
  danmu:function(e){
    this.setData({wb:e.detail.value});
    console.log(this.data.wb);
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
    this.videoContext = wx.createVideoContext('vd')
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