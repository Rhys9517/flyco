$(function() {
  $.validator.addMethod("phone", function (value, element, params) {
    var reg2 = /^1\d{10}$/;
    if (reg2.test(value)) {
      return true;
    } else {
      return false;
    }
  }, "必须输入手机号码");

  $('#userRegister').validate({
    // 规则
    rules: {
      phoneInput: {
        required: true,
        phone: true
      },

      password: {
        required: true,
      },

      repassword: {
        equalTo: '#password'
      }
    },

    messages: {
      phoneInput: {
        required: '必须输入'
      },

      password: {
        required: '必须输入密码'
      },

      repassword: {
        equalTo: '两次密码不一致'
      }
    }
  })
});
