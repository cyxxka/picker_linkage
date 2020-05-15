// picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // "children":[{"threelevel_id":12,"name":"哈哈","parent_id":2},{"threelevel_id":13,"name":"11","parent_id":2}]
   var data= [{"firstlevel_id":1,"name":"家具配套","parent_id":0,
   "children":[{"secondlevel_id":2,"name":"椅垫","parent_id":1,},{"secondlevel_id":3,"name":"桌垫","parent_id":1},{"secondlevel_id":4,"name":"床上用品","parent_id":1}]},
   {"firstlevel_id":5,"name":"家具","parent_id":0,
   "children":[{"secondlevel_id":6,"name":"沙发","parent_id":5},{"secondlevel_id":7,"name":"鞋架","parent_id":5},{"secondlevel_id":8,"name":"桌子","parent_id":5},{"secondlevel_id":9,"name":"凳子","parent_id":5},{"secondlevel_id":12,"name":"椅子","parent_id":5},{"secondlevel_id":13,"name":"架子","parent_id":5}]},
   {"firstlevel_id":10,"name":"电器类","parent_id":0,
   "children":[{"secondlevel_id":11,"name":"乐园电器","parent_id":10}]}]
   data = [{
    "value": "",
    "label": "全部",
    "parent_id": 0,
    "children": [{
      "value": 0,
      "label": "全部",
      "parent_id": ""
    }]
  }, {
    "value": 1,
    "label": "运输工具",
    "parent_id": 0,
    "children": [{
      "value": 2,
      "label": "车辆",
      "parent_id": 1
    }]
  }, {
    "value": 3,
    "label": "机器机械",
    "parent_id": 0,
    "children": [{
      "value": 4,
      "label": "吊架",
      "parent_id": 3
    }, {
      "value": 14,
      "label": "风车",
      "parent_id": 3
    }, {
      "value": 80,
      "label": "幕布",
      "parent_id": 3
    }, {
      "value": 81,
      "label": "高压清洗机",
      "parent_id": 3
    }, {
      "value": 113,
      "label": "除草机",
      "parent_id": 3
    }, {
      "value": 114,
      "label": "检测仪",
      "parent_id": 3
    }, {
      "value": 123,
      "label": "挂钟",
      "parent_id": 3
    }, {
      "value": 145,
      "label": "投影仪幕布",
      "parent_id": 3
    }, {
      "value": 146,
      "label": "升降机",
      "parent_id": 3
    }]
  }, {
    "value": 5,
    "label": "房屋、建筑物",
    "parent_id": 0,
    "children": [{
      "value": 6,
      "label": "建筑工程",
      "parent_id": 5
    }, {
      "value": 7,
      "label": "集装箱",
      "parent_id": 5
    }]
  }, {
    "value": 8,
    "label": "工具",
    "parent_id": 0,
    "children": [{
      "value": 9,
      "label": "梯子",
      "parent_id": 8
    }, {
      "value": 15,
      "label": "水枪",
      "parent_id": 8
    }, {
      "value": 16,
      "label": "水管收纳",
      "parent_id": 8
    }, {
      "value": 17,
      "label": "水管",
      "parent_id": 8
    }, {
      "value": 107,
      "label": "锁",
      "parent_id": 8
    }]
  }, {
    "value": 10,
    "label": "电子设备",
    "parent_id": 0,
    "children": [{
      "value": 11,
      "label": "音箱设备",
      "parent_id": 10
    }, {
      "value": 20,
      "label": "话筒",
      "parent_id": 10
    }, {
      "value": 68,
      "label": "摄像头",
      "parent_id": 10
    }, {
      "value": 75,
      "label": "投影仪",
      "parent_id": 10
    }, {
      "value": 76,
      "label": "翻页器",
      "parent_id": 10
    }, {
      "value": 77,
      "label": "蓝牙音响",
      "parent_id": 10
    }, {
      "value": 78,
      "label": "相机",
      "parent_id": 10
    }, {
      "value": 79,
      "label": "扩音器",
      "parent_id": 10
    }, {
      "value": 92,
      "label": "考勤机",
      "parent_id": 10
    }, {
      "value": 94,
      "label": "打印机",
      "parent_id": 10
    }, {
      "value": 116,
      "label": "发票机",
      "parent_id": 10
    }, {
      "value": 141,
      "label": "电脑",
      "parent_id": 10
    }, {
      "value": 142,
      "label": "硬盘",
      "parent_id": 10
    }, {
      "value": 143,
      "label": "空调",
      "parent_id": 10
    }]
  }, {
    "value": 12,
    "label": "伞具",
    "parent_id": 0,
    "children": [{
      "value": 13,
      "label": "伞",
      "parent_id": 12
    }]
  }, {
    "value": 18,
    "label": "电器",
    "parent_id": 0,
    "children": [{
      "value": 19,
      "label": "净水器",
      "parent_id": 18
    }, {
      "value": 21,
      "label": "烧水壶",
      "parent_id": 18
    }, {
      "value": 35,
      "label": "冰箱",
      "parent_id": 18
    }, {
      "value": 36,
      "label": "消毒柜",
      "parent_id": 18
    }, {
      "value": 37,
      "label": "电陶炉",
      "parent_id": 18
    }, {
      "value": 47,
      "label": "电风扇",
      "parent_id": 18
    }, {
      "value": 67,
      "label": "热水器",
      "parent_id": 18
    }, {
      "value": 69,
      "label": "电暖器",
      "parent_id": 18
    }, {
      "value": 70,
      "label": "除湿机",
      "parent_id": 18
    }, {
      "value": 95,
      "label": "破壁机",
      "parent_id": 18
    }, {
      "value": 121,
      "label": "碎纸机",
      "parent_id": 18
    }, {
      "value": 122,
      "label": "养生壶",
      "parent_id": 18
    }, {
      "value": 133,
      "label": "洗衣机",
      "parent_id": 18
    }, {
      "value": 134,
      "label": "干衣机",
      "parent_id": 18
    }]
  }, {
    "value": 22,
    "label": "茶具",
    "parent_id": 0,
    "children": [{
      "value": 23,
      "label": "陶壶",
      "parent_id": 22
    }, {
      "value": 24,
      "label": "天目碗",
      "parent_id": 22
    }, {
      "value": 85,
      "label": "汝窑壶",
      "parent_id": 22
    }]
  }, {
    "value": 25,
    "label": "家具",
    "parent_id": 0,
    "children": [{
      "value": 26,
      "label": "凳子",
      "parent_id": 25
    }, {
      "value": 27,
      "label": "椅子",
      "parent_id": 25
    }, {
      "value": 28,
      "label": "桌子",
      "parent_id": 25
    }, {
      "value": 96,
      "label": "陈列架",
      "parent_id": 25
    }, {
      "value": 118,
      "label": "柜子",
      "parent_id": 25
    }, {
      "value": 119,
      "label": "办公桌",
      "parent_id": 25
    }, {
      "value": 120,
      "label": "抽屉柜",
      "parent_id": 25
    }, {
      "value": 131,
      "label": "床",
      "parent_id": 25
    }]
  }, {
    "value": 29,
    "label": "灯具",
    "parent_id": 0,
    "children": [{
      "value": 30,
      "label": "手电筒",
      "parent_id": 29
    }, {
      "value": 87,
      "label": "串灯",
      "parent_id": 29
    }, {
      "value": 88,
      "label": "台灯",
      "parent_id": 29
    }, {
      "value": 144,
      "label": "摄影灯",
      "parent_id": 29
    }, {
      "value": 149,
      "label": "落地灯",
      "parent_id": 29
    }, {
      "value": 151,
      "label": "投影灯",
      "parent_id": 29
    }]
  }, {
    "value": 31,
    "label": "办公用品",
    "parent_id": 0,
    "children": [{
      "value": 32,
      "label": "黑板",
      "parent_id": 31
    }, {
      "value": 106,
      "label": "白板",
      "parent_id": 31
    }, {
      "value": 115,
      "label": "保险柜",
      "parent_id": 31
    }, {
      "value": 117,
      "label": "装订机",
      "parent_id": 31
    }, {
      "value": 135,
      "label": "打印纸",
      "parent_id": 31
    }]
  }, {
    "value": 33,
    "label": "日用品",
    "parent_id": 0,
    "children": [{
      "value": 34,
      "label": "收纳盒",
      "parent_id": 33
    }, {
      "value": 82,
      "label": "保温壶",
      "parent_id": 33
    }, {
      "value": 83,
      "label": "凉席",
      "parent_id": 33
    }, {
      "value": 84,
      "label": "香薰机",
      "parent_id": 33
    }, {
      "value": 93,
      "label": "艾条",
      "parent_id": 33
    }, {
      "value": 110,
      "label": "蒲团",
      "parent_id": 33
    }, {
      "value": 111,
      "label": "瑜伽垫",
      "parent_id": 33
    }, {
      "value": 147,
      "label": "垃圾桶",
      "parent_id": 33
    }, {
      "value": 148,
      "label": "晾衣架",
      "parent_id": 33
    }]
  }, {
    "value": 38,
    "label": "厨房组",
    "parent_id": 0,
    "children": [{
      "value": 39,
      "label": "炒锅",
      "parent_id": 38
    }, {
      "value": 40,
      "label": "陶碗",
      "parent_id": 38
    }, {
      "value": 41,
      "label": "木碗",
      "parent_id": 38
    }, {
      "value": 42,
      "label": "玻璃碗",
      "parent_id": 38
    }, {
      "value": 43,
      "label": "碟子",
      "parent_id": 38
    }, {
      "value": 44,
      "label": "饮料罐",
      "parent_id": 38
    }, {
      "value": 45,
      "label": "竹盘",
      "parent_id": 38
    }, {
      "value": 46,
      "label": "勺子",
      "parent_id": 38
    }, {
      "value": 48,
      "label": "冰箱",
      "parent_id": 38
    }, {
      "value": 49,
      "label": "消毒柜",
      "parent_id": 38
    }, {
      "value": 50,
      "label": "电陶炉",
      "parent_id": 38
    }, {
      "value": 51,
      "label": "烤箱",
      "parent_id": 38
    }, {
      "value": 52,
      "label": "养生机",
      "parent_id": 38
    }, {
      "value": 53,
      "label": "空气炸锅",
      "parent_id": 38
    }, {
      "value": 54,
      "label": "豆浆机",
      "parent_id": 38
    }, {
      "value": 55,
      "label": "料理机",
      "parent_id": 38
    }, {
      "value": 56,
      "label": "电压力锅",
      "parent_id": 38
    }, {
      "value": 57,
      "label": "高压锅",
      "parent_id": 38
    }, {
      "value": 58,
      "label": "蒸锅",
      "parent_id": 38
    }, {
      "value": 59,
      "label": "电磁炉",
      "parent_id": 38
    }, {
      "value": 60,
      "label": "不粘锅",
      "parent_id": 38
    }, {
      "value": 61,
      "label": "托盘",
      "parent_id": 38
    }, {
      "value": 62,
      "label": "面碗",
      "parent_id": 38
    }, {
      "value": 63,
      "label": "瓷盘",
      "parent_id": 38
    }, {
      "value": 64,
      "label": "沙拉碗",
      "parent_id": 38
    }, {
      "value": 65,
      "label": "瓷杯",
      "parent_id": 38
    }, {
      "value": 66,
      "label": "瓷碗",
      "parent_id": 38
    }, {
      "value": 73,
      "label": "熔炉机",
      "parent_id": 38
    }, {
      "value": 74,
      "label": "喷砂机",
      "parent_id": 38
    }, {
      "value": 97,
      "label": "干果机",
      "parent_id": 38
    }, {
      "value": 98,
      "label": "煲汤锅",
      "parent_id": 38
    }, {
      "value": 99,
      "label": "保温炉",
      "parent_id": 38
    }, {
      "value": 100,
      "label": "电火锅",
      "parent_id": 38
    }, {
      "value": 101,
      "label": "汤锅",
      "parent_id": 38
    }, {
      "value": 102,
      "label": "汤桶",
      "parent_id": 38
    }, {
      "value": 103,
      "label": "奶锅",
      "parent_id": 38
    }, {
      "value": 126,
      "label": "燃气灶",
      "parent_id": 38
    }, {
      "value": 127,
      "label": "电热水瓶",
      "parent_id": 38
    }, {
      "value": 128,
      "label": "电饼铛",
      "parent_id": 38
    }, {
      "value": 129,
      "label": "烧水壶",
      "parent_id": 38
    }, {
      "value": 130,
      "label": "面包机",
      "parent_id": 38
    }]
  }, {
    "value": 71,
    "label": "布类",
    "parent_id": 0,
    "children": [{
      "value": 72,
      "label": "地毯",
      "parent_id": 71
    }, {
      "value": 86,
      "label": "桌布",
      "parent_id": 71
    }, {
      "value": 108,
      "label": "折叠沙发",
      "parent_id": 71
    }, {
      "value": 109,
      "label": "蒲团",
      "parent_id": 71
    }, {
      "value": 112,
      "label": "毛毯",
      "parent_id": 71
    }, {
      "value": 150,
      "label": "禅垫",
      "parent_id": 71
    }]
  }, {
    "value": 89,
    "label": "画具",
    "parent_id": 0,
    "children": [{
      "value": 90,
      "label": "画架",
      "parent_id": 89
    }, {
      "value": 91,
      "label": "画板",
      "parent_id": 89
    }]
  }, {
    "value": 104,
    "label": "支架",
    "parent_id": 0,
    "children": [{
      "value": 105,
      "label": "电视支架",
      "parent_id": 104
    }]
  }, {
    "value": 124,
    "label": "床上用品",
    "parent_id": 0,
    "children": [{
      "value": 125,
      "label": "电热毯",
      "parent_id": 124
    }, {
      "value": 132,
      "label": "床垫",
      "parent_id": 124
    }]
  }, {
    "value": 136,
    "label": "餐具",
    "parent_id": 0,
    "children": [{
      "value": 137,
      "label": "面碗",
      "parent_id": 136
    }, {
      "value": 138,
      "label": "陶碗",
      "parent_id": 136
    }]
  }, {
    "value": 139,
    "label": "厨房收纳",
    "parent_id": 0,
    "children": [{
      "value": 140,
      "label": "不锈钢架子",
      "parent_id": 139
    }]
  }]
  // {parent_id:1,id:2,children_id:68}
  // "children":[{"value":67,"label":"哈哈","parent_id":2},{"value":68,"label":"11","parent_id":2}]
  // {parent_id:139,id:140}
    this.selectComponent('#classify-component').initData(data);
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
  classifyEvent:function(e){
    console.log(e.detail.slected_value)
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