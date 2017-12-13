var Bmob = require('../../../utils/bmob.js');
Page({
  data: {
    imgUrls:[
      '/images/4.jpg'
    ],
    rows: {},
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '心动',
      path: '/pages/index/detail/detail',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  showok: function () {
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    })
  },
  onLoad: function (e) {
    // 页面初始化 options为页面跳转所带来的参数

    console.log(e.objectId)
    var objectId = e.objectId;
    var that = this;
    // if (!e.objectId) {
    //   common.showTip("请重新进入", "loading");
    //   return false;
    // }

    var Diary = Bmob.Object.extend("diary");
    var query = new Bmob.Query(Diary);

    query.get(objectId, {
      success: function (result) {
        console.log(result);

        that.setData({
          rows: result,

        })
        // The object was retrieved successfully.        
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})