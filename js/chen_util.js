//log  by  wei_chen
//返回对象子元素数量
function chen_getEleNumber(idname){
      return ((document.getElementById(idname)).getElementsByTagName("*")).length;
}
//返回对象所有子元素
function chen_getChildEle(idname){
      return (document.getElementById(idname)).getElementsByTagName("*");
}
//返回对象下某标签子元素组
function chen_getTagChildEle(idname,tagname){
      return (document.getElementById(idname)).getElementsByTagName(tagname);
}

//使某个隐藏元素产生智能悬停效果，防止元素display被设置成none，防止原元素的top和margin-top已经被设置
function chen_makeEleMove(idname){
  var bar= document.getElementById(idname);
  bar.style.display="block";
  bar.style.position="absolute";
  bar.style.visibility="hidden";
  var bar_origintop=bar.offsetTop;
  window.onscroll=function(){
    var win_top=document.body.scrollTop;
    if(win_top>=bar_origintop){
      bar.style.visibility="visible";
      bar.style.position="fixed";
      bar.style.top=0;
      bar.style.marginTop=0;
    }else{
      bar.style.visibility="hidden";
      bar.style.position="absolute";
      bar.style.top=bar_origintop;
      bar.style.marginTop=bar_origintop;
    }};}
//让表格元素的某1行显示隐藏,找td用firstChild,等价于$("#tableHide").find("tr").eq(i).hide()
function chen_hiddenshowtr(tableid,i,sta){
  var table = document.getElementById(tableid);
  var tr = table.getElementsByTagName("tr")[i];
  tr.style.display=sta;
}
//为原生js写hover函数
function chen_hover(id,mouseenter,mouseleave){
  document.getElementById(id).onmouseenter = mouseenter;
  document.getElementById(id).onmouseleave = mouseleave;
}
//删除子元素,同时删除自己本身
function chen_removeall(idname){
  var self=document.getElementById(idname);
  self.parentNode.removeChild(self);
}

//原生js写empty函数,删除子元素,保留自身
function chen_empty(idname)
{
    var parent = document.getElementById(idname);
    while(parent.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        parent.removeChild(parent.firstChild);
    }
}

//ajax 中判断有没有xmlhttprequest
function chen_createXHR(){
    if(typeof XMLHttpRequest != "undefined"){
      return new XMLHttpRequest();
    }else if (typeof ActiveXObject != "undefined") {
      if(typeof arguments.callee.activeXString !="string"){
        var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
        i,len;
        for(i = 0,len = versions.length;i<len;i++){
          try{
            new ActiveXObject(versions[i]);
            arguments.callee.activeXString = versions[i];
            break;
          }catch(ex){
            console.log("create xhr function throw error");
          }}}
      return new ActiveXObject(arguments.callee.activeXString);
    }else{
      throw new Error("no XHR object availble.");
    }
}

//ajax让url携带数据，解决拼接的字符串编码问题
function addURLParam(url,name,value) {
    url+=(url.indexOf("?")==-1)?"?":"&";
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
    return url;
}

//ajax的get方法
function chen_ajaxGet(url,callback) {
    // var ajax=new XMLHttpRequest();
    var ajax = chen_createXHR();
    ajax.open('GET',url,true);
    ajax.timeout=3000;
    ajax.ontimeout=function () {
      console.log("times are too long");
    };
    ajax.send(null);
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            if(ajax.status>=200 && ajax.status<300 || ajax.status==304){
                callback(ajax.responseText);
            }else{callback(null);}
        }};}

//ajax的post方法
function chen_ajaxPost(url,data,callback) {
    var ajax = chen_createXHR();
    ajax.open('POST',url,true);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.send(data);
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            if(ajax.status>=200 && ajax.status<300 || ajax.status==304){
                callback(ajax.responseText);
            }else{callback(null);}
        }};}
