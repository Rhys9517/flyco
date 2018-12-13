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
// //注册唯一验证
// var uname =$("#uname");
// var upwd =$("#upwd");
// var form=$("form");
// var flag=false;
// var flag1=false;

// uname.keyup(function() {


// if (reg.test(uname.val())) {
//   $.get("../php/onlyunamecheck.php", { uname: uname.val() }, function(res) {
    
//     console.log(res)
//    if (res == 0) {
//      $(".uname-down").html(
//         "你输入的会员名" + uname.val()  + "已被注册,请输入其它会员名尝试"
//       );
//       $(".uame-down").css("color","red");
 
//       flag = false;
//     } else {
//       $(".uname-down").html("恭喜你! " + " 可以注册");
   
//       flag = true;
//       $(".uname-down").css("color","green");
//     }
//   });
// } else {
//   $(".uname-down").html(
//     "你输入的会员名" +
//      uname.val()  +
//       " 太短或太长或保护非法字符,请输入6-20位的字母和数字"
//   );
//   $(".uname-down").css("color", "red");
//   flag = false;
// }
// if (uname.val()  == "") {
//   $(".uname-down").html(
//     "请使用英文和数字,不要使用下划线等特殊符号。"
//   );
//   $(".uname-down").css("color", "black");
//   flag = false;
// }
// });

// upwd.keyup(function(){
//   var pwdgood = /^[0-9a-zA-Z]{6,20}$/
//   if(pwdgood.test(upwd.val())){
//     $(".password-down").html("密码可用");
//     $(".password-down").css("color","green");
//     flag1=true;
//   }else{
//     $(".password-down").html("密码不可用");
//     $(".password-down").css("color","red");
//     flag1=false;
//   }
// });
//   form.submit(function(){
//     if(flag && flag1){
//       return true;
//     }else{
//       alert("请填写正确信息");
//       return false;
//     }
//   })