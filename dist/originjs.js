console.log('Originjs starting...')
var origin = void 0;
  
//请求接口域名
let local_url = 'http://jsonplaceholder.typicode.com/users'
let dev_url = 'http:www.cshans.cn/dev/api';
let product_url = 'http:www.cshans.cn/product/api';

var originUrl = local_url; 
var data = '';
var get = 'get';
var post = 'post'
// originAjax --Ajax
function originAjax(URL,type,cookie,callback,params) {
    console.log(originAjax.arguments)
    type == 'get' ? params = '' : params;
    console.log('cookie:',cookie)
    var xhr = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容
    xhr.withCredentials = cookie;
    xhr.open(type, URL, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.async = false;
    xhr.send(params);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var data = JSON.parse(xhr.responseText)
          callback(data)
        }
    };

}

// originLazyLoad -- lazyLoad
originLazyLoad();
function originLazyLoad(){
	console.log('lazyLoading....')
}

//originFor -- forEach
// arr: Data to process 
// domNode: Insertion node
function originFor(arr,domNode,callback){
	arr.forEach(function originFor(currentValue, index,arr){
		callback(currentValue);
	})
};










  console.log('Originjs is executing, please wait...')//originjs 正在执行ing...
