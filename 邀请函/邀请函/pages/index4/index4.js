// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    horn:true,
  },
  bgm:'',
  horn:function(){
    let horn = this.data.horn;
    if(horn){
      this.setData({horn:false});
      this.bgm.pause();
    }else{
      this.setData({horn:true});
      this.bgm.play();
    }
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
    this.bgm=wx.getBackgroundAudioManager();
    this.bgm.onCanplay(()=>{
      this.bgm.play();
    });
    this.bgm.title="黑人抬棺";
    this.bgm.src="http://m801.music.126.net/20210427192956/f75f0f1bed8fe598e48f0abcef013e75/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/2082576552/ac9d/5271/883e/675f05b7636b3babef6e86fd5fac66ff.mp3";
  },
  boda:function(){
    wx.makePhoneCall({
      phoneNumber: '17324050845',
    })
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