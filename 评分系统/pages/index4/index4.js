// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[1,2,3,4,5],
    text:['凑合','还行','可以','满意','非常满意'],
    id:4,
    max:20,
    min:5,
    m_num:0,
    m_text:'',
    imgs:[],
    con:[
      {
        id:1,
        txt:'菜品味道不行',
        bool:false
      },
      {
        id:2,
        txt:'菜品不干净',
        bool:false
      },
      {
        id:3,
        txt:'送货时间过长',
        bool:false
      },
      {
        id:4,
        txt:'商家态度差',
        bool:false
      },
      {
        id:5,
        txt:'其他问题',
        bool:false
      }
    ]
  },
  btn_xx:function(e){
    var e = e.target.dataset.val;
    console.log(e);
    this.setData({id:e-1});
  },
  val:function(e){
    var e = e.detail.value;
    console.log(e.length);
    this.setData({m_num:e.length});
    if(e.length < this.data.min)
    {
      this.setData({m_text:"至少输入五个字符"});
    }
    else if(e.length >= this.data.max)
    {
      this.setData({m_text:"输入字数达到上限"});
    }
    else{
      this.setData({m_textt:""});
    }
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
  UPload:function(){
    var that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          var t = res.tempFilePaths;
          console.log(t);
          for(var i = 0;i<t.length;i++)
          {
            if(that.data.imgs.length>=9)
            {
              return false;
            }
            else{
              that.data.imgs.push(t[i]);
            }
          }
          that.setData({imgs:that.data.imgs});
          if(that.data.imgs.length>=9){
            wx.showToast({
              title: '最多上传9张图片',
              duration:2000
            })
          }
        }
      })
  },
  yulan:function(e){
    var i = e.target.dataset.val;
    wx.previewImage({
      urls: this.data.imgs,
      current:this.data.imgs[i]
    })
  },
  del:function(e){
    var i = e.target.dataset.val;
    var that = this;
    wx.showModal({
      title:'温馨提示',
      content:'确定要删除吗',
      success:function(res){
        if(res.confirm){
          that.data.imgs.splice(i,1);
          that.setData({imgs:that.data.imgs});
        }
        else if(res.cancel){
          return false;
        }
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