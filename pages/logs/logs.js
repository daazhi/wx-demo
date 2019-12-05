//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    switch1: false
  },
  onChange(event){
    const detail = event.detail;
    this.setData({
      'switch1' : detail.value
    })

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
