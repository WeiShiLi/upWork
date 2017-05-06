/**
 * Created by Administrator on 2017/3/9.
 */

var login={
    name:document.querySelector("#name"),
    password: document.querySelector("#pass")
}

var user=[
    {
        name:"张三",
        password:"123qwe"
    },
    {
        name:"李四",
        password:"123qwe"

    }

];
var nameEmpty=document.querySelector("#nameEmpty");
var passEmpty=document.querySelector("#passEmpty");


function checkFalse() {
    var name=login.name.value.trim();
    var pass=login.password.value.trim();

    var j=0;

    for(var j;j<user.length;j++){
      if(name==user[j].name )
          break;
    }
    if(j===user.length){
        alert("user is not exist");
        return false;
    }else{
        if(name==user[j].name&& pass!=user[j].password){
            passEmpty.style.display="block";
            passEmpty.innerHTML='';
            passEmpty.innerHTML=passEmpty.innerHTML+'<img src="imgs/warn.png"/>password is wrong';
            // login.password.focus();
            return false;
        }else {
            var obj={'user_name':name,'user_password':pass};
            var str_user=JSON.stringify(obj);//将json对象转化为字符串
            window.localStorage.setItem('user',str_user);
            //    console.log(user.name+"qwe");
            return true;

        }

    }



}