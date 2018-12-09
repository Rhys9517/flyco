Login = {
  // 初始化的方法
  init: function () {
    this.getVal()
    this.login()
    this.changeLoginMethod()
  },
  // dom映射
  dom: {
    $userAccount: $('#userAccount'),
    $userPwd: $('#userPwd'),
    $loginBtn: $('#login'),
    $changeBtn: $('.btn'),
  },
  // 变量存储
  data: {
    account: null,
    pwd: null
  },
  getVal: function () {
    var _this = this;
    // 获取邮箱/电话
    _this.dom.$userAccount.on('input', function (e) {
      _this.data.account = _this.dom.$userAccount.val()
    })

    // 获取密码
    _this.dom.$userPwd.on('input', function (e) {
      _this.data.pwd = _this.dom.$userPwd.val()
    })
  },
  login: function () {
    var _this = this
    _this.dom.$loginBtn.on('click', function (e) {
      e.preventDefault()
      $.ajax({
        type: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        url: '/flyco/app/static/json/user.json',
        dataType: "json",
        success: function (res) {
          console.log(_this.data.account);
          console.log(_this.data.pwd)
          if (res[0].result.userAccount == _this.data.account && res[0].result.userPwd == _this.data.pwd) {
            alert(1);
            location.href = "/flyco/app/static/home.html";
          }
        }
      })
    })
  },
  changeLoginMethod: function () {
    var _this = this
    _this.dom.$changeBtn.on('click', function (e) {
      let target = $(e.target)
      if (!target.hasClass('act')) {
        target.addClass('act')
        target.siblings('.btn').removeClass('act')
        if (target.hasClass('m_static')) {
          $('#static').removeClass('none')
          $('#active').addClass('none')
        } else {
          $('#static').addClass('none')
          $('#active').removeClass('none')
        }
      }
    })
  }
};

(function () {
  Login.init()
})()
