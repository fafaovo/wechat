// pages/index1/index1.js
var tj = require("../data/data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:0,
    tj:tj.tj,
    index:0,
    new_index:-1, /*新数组的底数*/
    newlist :new Array(10),
    state:true
  },
  ovo:function(e){
    var a = e.target.dataset.num;
    this.setData({tab:a});
  },
  change:function(e){
    var a = e.detail.current;
    this.setData({tab:a});
  },
  click:function(e){
    this.setData({index:e.target.dataset.num});
    var m_e = e.target.dataset.num;
    var m_nid = this.data.new_index;
    var m_list = new Array(10);
    m_list = this.data.newlist;
    for(var i = 0;i<m_list.length;i++)
    {
      if(m_list[i] != undefined && m_list[i] == tj.tj[m_e])
      {
        var now = m_list[i];
        let k = i;
        while(k){
          m_list[k] = m_list[k-1];
          k--;
        }
        // m_list[i] = m_list[i-1];
        m_list[0] = now;
        this.setData({newlist:m_list});
        this.setData({new_index:m_nid});
        this.aud.src = this.data.newlist[0].url;
        console.log(this.aud.src);
        return;
      }
    }
    
    //确认最后一个元素的下标位置
    if(m_nid == -1){
      m_nid++;
      m_list[0] = tj.tj[m_e];
      this.setData({newlist:m_list});
      this.setData({new_index:m_nid});
      this.aud.src = this.data.newlist[0].url;
      console.log(this.aud.src);
      return
    }
    else{
      var i = m_nid+1;
      while(i){
        i--;
        m_list[i+1] = m_list[i];
      }
      m_nid++;
      m_list[0] = tj.tj[m_e];
      this.setData({newlist:m_list});
      this.setData({new_index:m_nid});
      this.aud.src = this.data.newlist[0].url;
      console.log(this.aud.src);
    }
    
    

  },
  next:function(){
    this.setData({index:this.data.index+1});

    

  },
  play:function(){
    this.setData({state:false});
    this.aud.play();
  },
  stop:function(){
    this.setData({state:true});
    this.aud.pause();
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
    // this.aud = wx.createInnerAudioContext();
    this.aud = wx.getBackgroundAudioManager();
    this.aud.title = '1';
    this.music;
    var that = thhis;
    this.aud.onEnded(function(){
      that.next();
    });
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