<?php
header("content-type:text/html;charset=utf-8");
$uname = $_POST['uname'];//张三
$pwd = $_POST['upwd'];
mysql_connect("127.0.0.1",'root','root');//连接数据库
mysql_select_db('1127');// 选择数据库
mysql_query("set names utf8");//mysql_query()  执行括号里的sql语句    sql必须用引号
$sql = "select * from `user` where uname='$uname'";// sql语句里变量如果存的字符串，这个变量要加引号
$res = mysql_query($sql); // 得到的是一个资源
$arr = mysql_fetch_assoc($res);//把资源变为数组   空资源变为数组的结果为空
if($arr){//不可以注册
    echo "<script>alert('用户名已存在，请重新注册'); window.location.href='register.html'</script>";
}else{//可以注册
    $sql = "insert into `user` (uname,upwd) VALUES ('$uname','$pwd')";
    $res = mysql_query($sql);//返回的布尔，添加成功返回true;否则false
    if($res){
        echo "<script>alert('注册成功');window.location.href='denlu.html'</script>";
    }else{
        echo "<script>alert('注册失败')</script>";
    }
}

?>