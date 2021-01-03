// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curTab:0,
    type: ["为您推荐", "清洁", "消毒", "保姆", "为您推荐", "清洁", "消毒", "保姆", "为您推荐", "清洁", "消毒", "保姆"]
  },
  switchTab(event) {
    let navId = event.currentTarget.id;
    this.setData({
      curTab: navId*1,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      curTab:0
    })
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