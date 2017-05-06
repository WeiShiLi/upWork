window.onload=function(){
  //给导航栏绑定智能悬停事件
  chen_makeEleMove("head_copy");
  //加载结束将table内tr隐藏
  for(var j=3;j<10;j++){chen_hiddenshowtr("tableHide",j,"none");}
  //给menu按钮注册展开菜单的事件
  document.getElementById("wang_button").onclick=function(){
    var wang_change =document.getElementById("wang_change_nav");
    if(wang_change.style.display=="block"){
      wang_change.style.display="none";
    }else{
      wang_change.style.display="block";
    }

  };
  //显示账号
  var div=document.getElementById("login_li");
  console.log(div);
  var user=window.localStorage.getItem("user");
  console.log(user);
  var div1=document.getElementById("regist_li");
  console.log(div1);
  if(user==null){
    console.log(1);
    div.innerHTML= '<a href="login.html">'
        +'<span><img src="imgs/part1,2/login.png" height="20" width="20"/>LOGIN</span></a>';
    div1.innerHTML='<a href="regist.html">'
        +' <span><img src="imgs/part1,2/head01.png" height="20" width="20"/></span>SIGN UP</a>'
  }else {
    console.log(2);
    var obj_user=JSON.parse(user);

    div.innerHTML=' 欢迎您：'+obj_user.user_name;
    div1.innerHTML='<div id="rem">注  销</div>';
  }

  div1.onclick=function (e) {
    var target=e.target.getAttribute('id');
    if(target=="rem"){
      window.localStorage.removeItem("user");
      var user=window.localStorage.getItem("user");
      if(user==null){
        div.innerHTML= '<a href="login.html">'
            +'<span><img src="imgs/part1,2/login.png" height="20" width="20"/>LOGIN</span></a>';
        div1.innerHTML='<a href="regist.html">'
            +' <span><img src="imgs/part1,2/head01.png" height="20" width="20"/></span>SIGN UP</a>'
      }
    }
  }
  // 为下拉和向上注册隐藏展示table内tr事件
  document.getElementById("onclickTr01").onclick=trHide;
  document.getElementById("onclickTr02").onclick=trShow;
  //页面加载之后，让简笔画发生变化  1-8
  for(var i = 1;i<9;i++){
    var name="part3_photo"+i+"_div";
    var arr1=["FRONT-END DEVELOPERS","BACK-END DEVELOPERS","PROGRAMMERS"];
    var arr2=["iOS APP DEVELOPERS","ANDROID DEVELOPERS","UI/UX DESIGNERS"];
    var arr3=["GRAPHIC DESIGNERS","UI/UX DESIGNERS","MOTION EXPERTS"];
    var arr4=["BLOG WRITERS","CONTENT WRITERS","COPYWRITERS"];
    var arr5=["PERSONAL ASSISTANTS","TRANSCRIPTIONISTS","WEB RESEARCHERS"];
    var arr6=["PHONE SPECIALISTS","EMAIL SUPPORT EXPERTS","LIVE CHAT PROS"];
    var arr7=["SEO SPECIALISTS","EMAIL AUTOMATORS","MARKETING EXPERTS"];
    var arr8=["TAX ACCOUNTANTS","BOOKKEEPERS","FINANC MODELERS"];

    var txt1;var txt2;var txt3;var txt4="and more...";
    chen_hover(name,function(){
      if(this.getAttribute("id")==="part3_photo1_div"){txt1=arr1[0];txt2=arr1[1];txt3=arr1[2];}
      if(this.getAttribute("id")=="part3_photo2_div"){txt1=arr2[0];txt2=arr2[1];txt3=arr2[2];}
      if(this.getAttribute("id")=="part3_photo3_div"){txt1=arr3[0];txt2=arr3[1];txt3=arr3[2];}
      if(this.getAttribute("id")=="part3_photo4_div"){txt1=arr4[0];txt2=arr4[1];txt3=arr4[2];}
      if(this.getAttribute("id")=="part3_photo5_div"){txt1=arr5[0];txt1=arr5[1];txt1=arr5[2];}
      if(this.getAttribute("id")=="part3_photo6_div"){txt1=arr6[0];txt2=arr6[1];txt3=arr6[2];}
      if(this.getAttribute("id")=="part3_photo7_div"){txt1=arr7[0];txt2=arr7[1];txt3=arr7[2];}
      if(this.getAttribute("id")=="part3_photo8_div"){txt1=arr8[0];txt2=arr8[1];txt3=arr8[2];}
      this.getElementsByTagName("img")[0].style.display="none";
      this.getElementsByTagName("p")[1].style.display="none";
      this.getElementsByTagName("hr")[0].style.display="none";
      this.style.border="2px solid green";
      var p01 = document.createElement('p');
      var node01=document.createTextNode(txt1);
      var p02 = document.createElement('p');
      var node02=document.createTextNode(txt2);
      var p03 = document.createElement('p');
      var node03=document.createTextNode(txt3);
      var p04 = document.createElement('span');
      var node04=document.createTextNode(txt4);
      var div_contain =document.createElement("div");
      div_contain.setAttribute("id","div_contain");
      // div_contain.style.border=none;
      p01.appendChild(node01);p02.appendChild(node02);p03.appendChild(node03);p04.appendChild(node04);
      div_contain.appendChild(p01);div_contain.appendChild(p02);div_contain.appendChild(p03);div_contain.appendChild(p04);
      this.appendChild(div_contain);
    },function(){
      this.getElementsByTagName("img")[0].style.display="inline";
      this.getElementsByTagName("p")[1].style.display="block";
      this.getElementsByTagName("hr")[0].style.display="block";
      this.style.border="";
      chen_removeall("div_contain");
    });
}//for  end
};  //ready end

function trHide(){
  var tr01=document.getElementById("onclickTr01");
  tr01.style.display="none";
  for(var i=3;i<10;i++){chen_hiddenshowtr("tableHide",i,"table-row");}
}
function trShow(){
  var tr01=document.getElementById("onclickTr01");
  tr01.style.display="block";
  for(var i=3;i<10;i++){chen_hiddenshowtr("tableHide",i,"none");}
}
