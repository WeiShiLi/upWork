/**
 * Created by Administrator on 2017/3/11.
 */
var regist = {
    fn: document.getElementById("FN"),
    ln: document.getElementById("LN"),
    em: document.getElementById("email"),
    un: document.getElementById("username"),
    pa: document.getElementById("userpass")
};
/*var reg = {
    fn: document.getElementById("FN").value.trim(),
    ln: document.getElementById("LN").value.trim(),
    em: document.getElementById("email").value.trim(),
    un: document.getElementById("username").value.trim(),
    pa: document.getElementById("userpass").value.trim()
};*/
var warn = {
    a: document.getElementById("part-a"),
    b: document.getElementById("part-b"),
    c: document.getElementById("part-c"),
    d: document.getElementById("part-d"),
    e: document.getElementById("part-e")
};

checkSumbit = function () {

    // if (reg.fn != '' && reg.ln != '' && reg.em != '' && reg.un != '' && reg.pa != '') {
    if (regist.fn.value.trim() != '' && regist.ln.value.trim() != '' && regist.em.value.trim() != '' && regist.un.value.trim() != '' && regist.pa.value.trim() != '') {
        // warn.a.style.display = 'block';
        // warn.b.style.display = 'block';
        // warn.c.style.display = 'block';
        // warn.d.style.display = 'block';
        // warn.e.style.display = 'block';
        alert("注册成功！！")
        return true;
    }else{
        return false;
    }
}


regist.fn.onblur = function () {
    var re = /^[A-Za-z][A-Za-z1-9_-]+$/;
    if (re.test(regist.fn.value.trim())) {
        warn.a.style.display = 'none';
        return true;
    } else {
        warn.a.style.display = 'block';
        warn.a.innerHTML = '';
        warn.a.innerHTML = warn.a.innerHTML + "请以字母开头";
        regist.fn.focus();
    }
}

//匹配邮箱格式
regist.em.onblur = function () {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (re.test(regist.em.value.trim())) {
        warn.c.style.display = 'none';
        return true;
    } else {
        warn.c.style.display = 'block';
        warn.c.innerHTML = "";
        warn.c.innerHTML = warn.c.innerHTML + "输入的邮箱格式不正确！";
        regist.em.focus();
    }
}
//匹配username(数字，字母，下划线，长度4-16)
regist.un.onblur = function () {
    var re = /^\w{4,16}$/;
    if (re.test(regist.un.value.trim())) {
        warn.d.style.display = "none";
        return true;
    } else {
        warn.d.style.display = 'block';
        warn.d.innerHTML = "";
        warn.d.innerHTML = warn.d.innerHTML + "请输入4-16位由数字，字母，下划线组成的用户名";
        regist.un.focus();
    }
}
//匹配密码
regist.pa.onblur = function () {
    var re = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/;
    if (regist.pa.value.trim().length < 6 || re.test(regist.pa.value.trim())) {
        warn.e.style.display = "block";
        warn.e.innerHTML = "";
        warn.e.innerHTML = warn.e.innerHTML + "密码强度太弱，不能为纯数字或字母！！";
        regist.pa.focus();
    } else {
        warn.e.style.display = "none";
        return true;
    }
}
//第一个选择框的点击的显示和隐藏
var part4 = document.querySelector("#part4");
var select4 = document.querySelector("#p4-s");
part4.onclick = function () {
    if (select4.style.display == 'none') {
        select4.style.display = 'block';
    } else {
        select4.style.display = 'none';
    }
}

var city = document.querySelector("#city");
var china = document.querySelector("#china");
var usa = document.querySelector("#usa");
var japan = document.querySelector("#japan");
china.onclick = function () {
    city.value = china.innerText;
    select4.style.display = 'none';
}
usa.onclick = function () {
    city.value = usa.innerText;
    select4.style.display = 'none';
}
japan.onclick = function () {
    city.value = japan.innerText;
    select4.style.display = 'none';
}

//第二个选择框的点击的显示和隐藏
var part7 = document.querySelector("#p7");
var select = document.querySelector("#p7-s");

part7.onclick = function () {
    if (select.style.display == 'none') {
        select.style.display = 'block';
    } else {
        select.style.display = 'none';
    }
}

var blog = document.querySelector("#blog");
var friend = document.querySelector("#friend");
var event = document.querySelector("#event");
var p7V = document.querySelector("#part7-value");
blog.onclick = function () {
    p7V.value = blog.innerText;
    select.style.display = 'none';
}
friend.onclick = function () {
    p7V.value = friend.innerText;
    select.style.display = 'none';
}
event.onclick = function () {
    p7V.value = event.innerText;
    select.style.display = 'none';
}


