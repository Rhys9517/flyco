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
      _this.data.pwd = _this.dom.$userPwd
    })
  },
  login: function () {
    var _this = this
    // _this.dom.$loginBtn.on('click', function (e) {
    //   e.preventDefault()
    //   $.ajax({
    //     type: 'GET',
    //     headers: {
    //       'Access-Control-Allow-Origin': 'file:///Users/will/Desktop/Flyco-master/app/json/user.json'
    //     },
    //     url: '../json/user.json',
    //     dataType: "json",
    //     success: function (res) {
    //       console.log(res)
    //     }
    //   })
    // })
  },
  changeLoginMethod: function () {
    var _this = this
    _this.dom.$changeBtn.on('click', function (e) {
      let target = $(e.target)
      if (!target.hasClass('act')) {
        target.addClass('act')
        target.siblings('.btn').removeClass('act')
        if (target.hasClass('m_static')) {
          $('#userNameLogin').removeClass('none')
          $('#codeLogin').addClass('none')
        } else {
          $('#userNameLogin').addClass('none')
          $('#codeLogin').removeClass('none')
        }
      }
    })
  }
};

(function () {
  Login.init();

  $.validator.addMethod("emailOrPhone", function (value, element, params) {
    var reg1 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    var reg2 = /^1\d{10}$/;
    if (reg1.test(value) || reg2.test(value)) {
      return true;
    } else {
      return false;
    }
  }, "必须输入邮箱地址或者手机号码");

  $.validator.addMethod("phone", function (value, element, params) {
    var reg2 = /^1\d{10}$/;
    if (reg2.test(value)) {
      return true;
    } else {
      return false;
    }
  }, "必须输入手机号码");

  var a = $('#userNameLogin').validate({
    rules: {
      userAccount: {
        emailOrPhone: true,
      },
      userPwd: 'required',
    },
    messages: {
      userPwd: '必须输入密码'
      // userAccount: {
      //   // emailOrPhone
      // }
    }
  })

  $('#userNameLogin').submit(function() {
    // alert(a.form())
    if (a.form()) {
      $.get('/static/json/user.json', function(res) {
        if ($('input[name="userAccount"]').val() === res.userAccount && $('input[name="userPwd"]').val() === res.userPwd) {
          alert('登录成功');
          location.href = '/static/home.html';
        } else {
          alert('登录失败');
        }
      })
    }
  })

  $('#codeLogin').validate({
    rules: {
      phoneInput: {
        phone: true,
      },
      codeInput: 'required',
    },
    messages: {
      codeInput: '必须输入验证码'
    }
  })
})()
