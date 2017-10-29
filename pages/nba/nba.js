var app = getApp();
Page({
  data: {
    list: []
  },
  onLoad: function () {

    this.nab_schedule("") //初始化数据
  },
  //ajax 列表请求
  nab_schedule: function (param) {
    var that = this;
    var params = {
      date: param
    };
    app.api.nab_schedule(params)
      .then(res => {
        that.setData({
          list: res.data.data
        });
      })
      .catch(e => {
        console.error(e)
      });

  },


  //选择日期
  selectDate: function (e) {
    this.nab_schedule(e.target.dataset.time);
  },
  loadMore: function (e) {
  },
  upper: function (e) {
    //console.log(e)
  },
  lower: function (e) {
    // console.log(e)
  },
  scroll: function (e) {
    // console.log(e)
  }

})