$(function(){
					
			
			var SlideVerifyPlug = window.slideVerifyPlug;
			var slideVerify2 = new SlideVerifyPlug('#verify-wrap2',{
				wrapWidth:'300',
	            initText:'请按住滑块',
	            sucessText:'验证通过'
	          
			});
			 	
		})
/*手机号验证*/
function checkForm(){ 
  
  var passtip = checkPassword();  
  var conpasstip = ConfirmPassword(); 
  var phonetip = checkPhone(); 
  var yanCode = identifying();
  return passtip && conpasstip && phonetip; 
  } 
 //验证手机号 
  function checkPhone(){ 
  var userphone = document.getElementById('userPhone'); 
  var phonrErr = document.getElementById('phoneErr'); 
  var pattern = /^1[34578]\d{9}$/;
  if(!pattern.test(userphone.value)){ 
    phonrErr.innerHTML="手机号码不规范"
    phonrErr.className="error"
    return false; 
    } 
   else{ 
     phonrErr.innerHTML="✔"
     phonrErr.className="success"; 
     return true; 
     } 
  } 
  //验证密码   
function checkPassword(){ 
  var userpasswd = document.getElementById('userPasword'); 
  var errPasswd = document.getElementById('passwordErr'); 
  var pattern = /^\w{4,12}$/;
  //密码要在4-8位
  if(!pattern.test(userpasswd.value)){ 
    errPasswd.innerHTML="密码不规范"
    errPasswd.className="error"
    return false; 
    } 
   else{ 
     errPasswd.innerHTML="✔"
     errPasswd.className="success"; 
     return true; 
     } 
  } 
  //确认密码 
  function ConfirmPassword(){ 
  var userpasswd = document.getElementById('userPasword'); 
  var userConPassword = document.getElementById('userConfirmPasword'); 
  var errConPasswd = document.getElementById('conPasswordErr'); 
  if((userpasswd.value)!=(userConPassword.value) || userConPassword.value.length == 0){ 
    errConPasswd.innerHTML="上下密码不一致"
    errConPasswd.className="error"
    return false; 
    } 
   else{ 
     errConPasswd.innerHTML="✔"
     errConPasswd.className="success"; 
     return true; 
     }    
  } 
///*提交
//var userPhone = document.getElementById("userPhone");
//var userPasword = document.getElementById("userPasword");
//var btn = document.getElementById("divBtn");
//var infor = document.getElementById("infor");
//btn.onclick = function () {
//    var uname = userPhone.value;
//    var upwd = userPasword.value;
//    if(uname == "" || pwd == ""){
//        return
//    }
//    var xhr = new XMLHttpRequest();
//    xhr.open("get","form.php?flag=register&uname="+uname+"&upwd="+upwd,true);
//    xhr.send();
//    xhr.onreadystatechange = function () {
//        if(xhr.readyState == 4 && xhr.status  == 200){
//            var res = xhr.responseText;
//            if(res == 1){
//                alert("注册成功");
//                window.location.href = "denlu.html";
//            }else if(res == 2){
//                alert("注册失败")
//            }else{
//                alert("用户名已存在，请重新注册");
//            }
//        }
//    }
//
//
//}
