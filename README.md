# originjs

slogan：originjs is origin;

origin 中文名称 => "元"；你也可以理解为源或原；意义为最原始的状态;类似混沌。


originjs is origin 翻译成中文 元本是元 ；见路不走，即见因果；见相非相，即见如来;

本着不拘泥于经验教条，同时又吸收前人成熟的方法，赋能开发者。


Originjs 的理念是一套基于原生Javascript 的轻量级的JavaScript框架，用于数据、方法的处理;


多数程序员在使用前端框架的时候可能会使用vue、react、ng等，虽然他们会以轻量高效著称，但是是否如他们讲的那样只有开发者有发言权。Originjs的出现并非是替代或颠覆而是完善，也就是说无论你是使用vue或react开发的项目您都可以使用Orgingjs加入到您的项目当中;

当然Originjs 不仅仅是为了迎合市场，更迎合我们开发者；
有些相对体量较小而且多是逻辑处理的项目，boss最求的高效&迅速完成开发，这时如果您再去用vue或react还是有一些的笨重。

这个时候就需要用到originjs协助您开发。

在语法上originjs基于原生的JavaScript开发，支持原生JavaScript ES6/7/8/9...,所以您不必为语法上做过多的纠结，只需按照我们的约定方式。



# OriginJS
Help developers complete tasks faster
## Requirement
* google analytics installed

## Getting started
From bower
```javascript
bower install cn-originjs --save
```
From npm
```javascript
npm install cn-originjs 
```
## How it works
```javascript
(1)originAjax(a,b,c,d,e);
	//=>ajax 
	Parameters you have to pass！！！
	a:url 
	b:type(post/get/put...) 
	c:cookie save true or false 
	d:callback 
	e:params
(2)originFor
	First step :Preparation data and target DOM Node
	arr: Data to process 
	domNode: Insertion node
	The second step: Call it
	originFor(arr,domNode,function(data){
		//Your code...
	})
	The third step: insert to target DOM Node


origin.post.Ajax(); //=> ajax post 
origin.getParams() //=> return url params in object type
origin.forData();//=> for data
origin.getSource() //=> return utm_source
origin.getMedium() //=> return utm_medium
origin.getContent() //=> return utm_content
origin.getCampaign() //=> return utm_campaign
origin.getTerm() //=> return utm_term


```
## Contributing
1. Fork it
2. Create your feature branch (git checkout -b master)
3. Commit your changes (git commit -am 'community')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Licence
```
CSHANS.CN | CN-OriginJs | chaojiaheng
```

