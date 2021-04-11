// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:"0",
    array:[
      {message:'foo'},
      {message:'bar'}
  ],
  array1:[
    {
      message:'啥时候开学！啥时候可以摘下口罩！啥时候可以出去玩',
      img1:'/pages/images/img1.jpg',
      img2:'/pages/images/img2.jpg',
      img3:'/pages/images/img3.jpg',
    },
    {
      message:'"中国制造别用" ？耿秋：别用！别穿！别戴',
      img1:'/pages/images/img4.jpg',
      img2:'/pages/images/img5.jpg',
      img3:'/pages/images/img6.jpg',
    },
    {
      message:'哪里来的回哪去！官方回应女子拒接隔离大闹机场辱骂防疫人员',
      img1:'/pages/images/img7.jpg',
      img2:'/pages/images/img8.jpg',
      img3:'/pages/images/img9.jpg',
    },
    {
      message:'疫情速报：特朗普直呼内行！拜登在飞机登机口连连下跪！',
      img1:'/pages/images/img10.jpg',
      img2:'/pages/images/img11.jpg',
      img3:'/pages/images/img12.jpg',
    },
  ]

  },
  tab:function(e){
    var a = e.target.dataset.num;
    this.setData({tab:a});
  },
  change:function(e){
    var a = e.detail.current;
    this.setData({tab:a});
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