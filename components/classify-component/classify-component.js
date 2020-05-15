Component({
  /**
   * 组件的属性列表
   */
  properties: {
    condition: { // 属性名
      type: Boolean, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) {
      } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstlevels: [],
    firstlevel: "",
    secondlevels: null,
    secondlevel: "",
    threelevels: null,
    threelevel: '',
    value: [0,0,0],
    // values: [0, 0, 0],
    condition: true,
    // "children":[{"threelevel_id":12,"name":"哈哈","parent_id":2},{"threelevel_id":13,"name":"11","parent_id":2}]
    initData:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close:function(){
      this.setData({condition:false})
    },
    /**
     * 初始化数据
     * @param {*} datas 
     * @param {*} category 
     */
    initData:function(datas,category){
      var that = this;
      var new_categories = datas.map(function(first,fIndex){
        var new_first ={};
        new_first.firstlevel_id = first.value
        new_first.name = first.label
        if(first.children){
          new_first.children = first.children.map(function(second,sIndex){
            var new_second ={};
            new_second.secondlevel_id = second.value
            new_second.name = second.label
            if(second.children){
              new_second.children = second.children.map(function(three,tIndex){
                var new_three = {}
                new_three.threelevel_id = three.value
                new_three.name = three.label
                return new_three;
              })
            }
            return new_second;
          })
        }
        return new_first;
      })
      var initData = new_categories;
      const firstlevels = [];
      const secondlevels = [];
      const threelevels = [];
      var value = [0,0,0]
      var data = {};
      if(initData.length>0){
        for (let i = 0; i < initData.length; i++) {
          firstlevels.push(initData[i].name);
          ///之前选中的值
          if(category){
            if(category.parent_id==initData[i].firstlevel_id){
              value[0]=i
            }
          }
        }
        data.firstlevels = firstlevels
        data.firstlevel = initData[0].name
        console.log('firstlevel完成');
      }
      if(!initData[0].children){
        data.threelevels = null
        data.secondlevels = null
      }
      ///不传参循环第二级第三级默认第一个
      if(!category){
        if(initData[0].children &&  initData[0].children.length>0){
          for (let i = 0; i < initData[0].children.length; i++) {
            console.log()
            secondlevels.push(initData[0].children[i].name)
          }
          data.secondlevels = secondlevels
          data.secondlevel = initData[0].children[0].name
          console.log('secondlevel完成');
        }
        if(initData[0].children){
          if(initData[0].children[0].children && initData[0].children[0].children.length>0){
            for (let i = 0; i < initData[0].children.length; i++) {
              if(initData[0].children[i].children){
                for(let j =0;j<initData[0].children[i].children.length;j++){
                  threelevels.push(initData[0].children[i].children[j].name)
                }
                data.threelevels = threelevels
                data.threelevel = initData[0].children[0].children[0].name
            }
            }
            console.log('threelevel完成');
          }
        }
    }else{
      ////传参循环第二级第三级
      console.log('youzhi')
      if(initData[value[0]].children &&  initData[value[0]].children.length>0){
        for (let i = 0; i < initData[value[0]].children.length; i++) {
          if(category.id==initData[value[0]].children[i].secondlevel_id){
            value[1]=i
          }
          console.log()
          secondlevels.push(initData[value[0]].children[i].name)
        }
        data.secondlevels = secondlevels
        data.secondlevel = initData[value[0]].children[value[1]].name
        console.log('secondlevel完成');
      }
      if(initData[0].children){
          for (let i = 0; i < initData[value[0]].children.length; i++) {
            console.log('..',initData[value[0]].children[i])
            if(initData[value[0]].children[i].children){
              console.log('..',initData[value[0]].children[i].children)
              console.log(initData[value[0]].children[i].children)
              for(let j =0;j<initData[value[0]].children[i].children.length;j++){
                if(category.children_id==initData[value[0]].children[i].children[j].threelevel_id){
                  value[2]=j
                }
                threelevels.push(initData[value[0]].children[i].children[j].name)
              }
              data.threelevels = threelevels
              data.threelevel = initData[value[0]].children[value[1]].children[value[2]].name
          }
          }
          console.log('threelevel完成');
      }
      // for (let i = 0; i < initData[value[0]].children.length; i++) {
      //   if(category.id==initData[value[0]].children[i].secondlevel_id){
      //     value[1]=i
      //   }
      //   console.log()
      //   secondlevels.push(initData[value[0]].children[i].name)
      // }
      // data.secondlevels = secondlevels
      // data.secondlevel = initData[value[0]].children[value[1]].name
    }
      data.initData = new_categories
      
      data.value = value
      console.log(data)
      that.setData(data)
      console.log('初始化完成');

    },
    /**
     * 滑动选择
     */
    bindChange: function (e) {
      console.log(e);
      wx.showLoading();
      var val = e.detail.value
      var t = this.data.value;
      var initData = this.data.initData;
      //如果选择的值不等于原来的值
      if (val[0] != t[0]) {
        console.log('firstlevel no ');
        const secondlevels = [];
        const threelevels = [];
        var data = {}
        //如果没有下一级只显示一列
        if(!initData[val[0]].children){
          data = {
            firstlevel: this.data.firstlevels[val[0]],
            secondlevel: '',
            secondlevels: '',
            threelevels:'',
            threelevel:'',
            value: [val[0], 0, 0]
          }
          this.setData(data)
          wx.hideLoading();
          return
        }

        //有第二级全部显示
        if(initData[val[0]].children){
          for (let i = 0; i < initData[val[0]].children.length; i++) {
            secondlevels.push(initData[val[0]].children[i].name)
          }
        }
        data = {
          firstlevel: this.data.firstlevels[val[0]],
          secondlevel: initData[val[0]].children[0].name,
          secondlevels: secondlevels,
          value: [val[0], 0, 0]
        }
       
        //有第三级全部显示
        // if(initData[val[0]].children[val[1]].children && initData[val[0]].children[val[1]].children.length>0){
        //   console.log(initData[val[0]].children[val[1]])
        //   for (let i = 0; i < initData[val[0]].children[val[1]].children.length; i++) {
        //     threelevels.push(initData[val[0]].children[val[1]].children[i].name)
        //   }
        //   data.threelevels = threelevels
        // }else{
        //   data.threelevels = null
        // }
        if(initData[val[0]].children[val[1]].children && initData[val[0]].children[val[1]].children.length>0){
          console.log(initData[val[0]].children[0].children)
          for (let i = 0; i < initData[val[0]].children[val[1]].children.length; i++) {
            threelevels.push(initData[val[0]].children[val[1]].children[i].name)
          }
          data.threelevels = threelevels
          data.threelevel = initData[val[0]].children[val[1]].children[0].name
        }else{
          data.threelevels = null
        }
        this.setData(data)
        console.log(data)
        wx.hideLoading();
        return;
      }

      ////第二级
      var secondData = {}
      // if(!val[1]){
      //   secondData = {
      //     secondlevel: this.data.secondlevels[0],
      //     threelevels:'',
      //     threelevel:'',
      //     value: [val[0], 0, 0]
      //   }
      //   this.setData(secondData)
      //   wx.hideLoading();
      //   return
      // }
      if (val[1] != t[1]) {
        console.log('secondlevel no');
        var threelevels = [];
        //获取
        if(initData[val[0]].children[val[1]].children && initData[val[0]].children[val[1]].children){
          for (let i = 0; i < initData[val[0]].children[val[1]].children.length; i++) {
            threelevels.push(initData[val[0]].children[val[1]].children[i].name)
          }
        }
        console.log(threelevels)
        secondData = {
          secondlevel: this.data.secondlevels[val[1]],
          value: [val[0], val[1], 0]
        }
        console.log(initData[val[0]].children[val[1]].children)
        if(initData[val[0]].children[val[1]].children){
          secondData.threelevel = initData[val[0]].children[val[1]].children[0].name
          secondData.threelevels = threelevels
        }else{
          secondData.threelevel = null
          secondData.threelevels = null
        }
        this.setData(secondData)
        wx.hideLoading();
        return;
      }
      console.log(val[2])

      this.setData({
        threelevel: this.data.threelevels[val[2]],
        value:[val[0], val[1], val[2]]
      })
      ////第三级
      // if(!val[2]){
      //   wx.hideLoading();
      //   return
      // }
      // if (val[2] && val[2] != t[2]) {
      //   console.log('threelevel no');
      //   this.setData({
      //     threelevel: this.data.threelevels[val[2]],
      //     value:[val[0], val[1], val[2]]
      //   })
      // }
      wx.hideLoading();
    },


    /**
     * 确定/取消事件
     */
    open: function (e) {
      this.setData({
        condition: !this.data.condition
      })
      var secondlevel = null
      if (e.currentTarget.dataset.isopen){
         secondlevel = {
          slected_value:null
        }
        if(!this.data.initData[this.data.value[0]].children){
          var id = this.data.initData[this.data.value[0]].firstlevel_id
          var name = this.data.initData[this.data.value[0]].name
          secondlevel.slected_value={id:id,name:name}
          this.triggerEvent('myevent', secondlevel)
          return
        }
        for (var i = 0; i < this.data.initData[this.data.value[0]].children.length; i++){
          if (i == this.data.value[1]){
            var id = this.data.initData[this.data.value[0]].children[i].secondlevel_id
            var name = this.data.initData[this.data.value[0]].children[i].name
            secondlevel.slected_value={id:id,name:name}
          }
        }
        if(this.data.initData[this.data.value[0]].children[this.data.value[1]].children){
          for (var i = 0; i < this.data.initData[this.data.value[0]].children[this.data.value[1]].children.length; i++) {
            if (i == this.data.value[2]) {
              var id = this.data.initData[this.data.value[0]].children[this.data.value[1]].children[i].threelevel_id
              var name = this.data.initData[this.data.value[0]].children[this.data.value[1]].children[i].name
              secondlevel.slected_value={id:id,name:name}
            }
          }
        }
        console.log('11',secondlevel)
        this.triggerEvent('myevent', secondlevel) //myevent自定义名称事件，父组件中使用
      }else{
         secondlevel =null
      }
      
    },
    /**
     * 首次渲染
     */
    onLoad: function () {
      console.log("onLoad");
      var that = this;
    }
  }
})
