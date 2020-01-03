(function () {
  console.log('Originjs starting...')//正在启动
  var origin = void 0;
  var origin = [{
    getAjax:getAjax(url,type),
    },{
      postAjax:postAjax(url,type)
 }]
  function getAjax(url,type) {
    console.log(url,type)
    // body...
  }
  function postAjax(url,type) {
    console.log(url,type)
    // body...
  }
  
   // origin.getAjax('https://www.baidu.com','post');//=>ajax get 

  // origin.post.Ajax(); //=> ajax post 
  // origin.getParams() //=> return url params in object type
  // origin.forData();//=> for data
  //ajax get
  // ajax('https://jsonplaceholder.typicode.com/todos/1', 'aa',3000,)
 // function ajax(url,obj,timeout,success,error){
 //        //  0.将对象转换成字符串
 //        var str = objToString(obj); 
 //        //  1.创建一个异步对象xmlhttp；
 //        console.log('000000')
 //        console.log(str)
        
        // var xmlhttp,timer; 
        // if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari 
        //   xmlhttp=new XMLHttpRequest(); 
        // } else{// code for IE6, IE5 
        //   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
        // }
        // //  2.设置请求方式和请求地址；  
        //     //xmlhttp.open("GET",url,true);
        //     xmlhttp.open("GET",url+"?t=" +str;  
        // //  3.发送请求；
        //     xmlhttp.send();
        // //  4.监听状态的变化；
        // xmlhttp.onreadystatechange = function(){
        //     clearInterval(timer);
        //     if (xmlhttp.readyState === 4) {
        //         if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status == 304) {
        //             //  5.处理返回的结果；
        //             success(xmlhttp);//成功后回调；
        //         }else{
        //             error(xmlhttp);//失败后回调；
        //         }                   
        //     }
        // }
    // }
    // function objToString(obj){
    //   obj.t = new Date().getTime();
    //   var res =[];
    //   for(var key in obj){
    //     //需要将key和value转成非中文的形式，因为url不能有中文。使用encodeURIComponent()转码;URL中只能出现字母 数字 下划线和ASCII码
    //     res.push(encodeURIConponent(key) + " = " +encodeURIConponent(obj.[key]));
    //   }
    //   return res.join("&");
    // }

    //判断外界是否传入了超时时间
    // if(timeout){
    //     timer = setInterval(function(){
    //         xmlhttp.abort();//中断请求
    //         clearInterval(timer);
    //     },timeout);
    // }







  console.log('Originjs is executing, please wait...')//originjs 正在执行ing...
})()