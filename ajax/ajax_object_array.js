//在JS中建立一個陣列
var java007 = new Array('Peter','Anan','Stella','Annie','Tina','Sam');
var java007 = ['Peter','Anan','Stella','Annie','Tina','Sam'];
var java007 = [];

for(var i=0;i<java007.length;i++){
	//use java007[i]
}
for(var key in java007){
	//use java007[key]
}

//在JS中建立一個物件
//==1==
var boy = new Object();
boy.name = "Anan";
boy.age = 13;
console.log(boy.age);

//==2==
var boy = {};

//==3==
var boy = {name:"Anan",age:13};
console.log(boy.age);

//JSON:Array和Object的組合
//把陣列放進物件中
var temp = {[],[],[],[],[]};
var friends = {JAVA007:[
					{name:"Peter",age:28},
					{name:"Stella",age:21},
					{name:"Tiffany",age:25}
				]
			  };
	friends 是一個物件
	friends.JAVA007 是一個陣列
	friends.JAVA007[0] 是一個物件
	friends.JAVA007[0].name ---> Peter
	
	for(var i=0;i<friends.JAVA007.length;i++){
		//friends.JAVA007[i]
	}
	
//把物件放進陣列中
var temp = [{name:"Peter",age:28},
			{name:"Stella",age:21},
			{name:"Tiffany",age:25}
		   ];
	temp 是陣列
	temp[0] 則是一個物件

//以上皆是Javascript的寫法

//JSON的寫法
[{"name":"Peter","age":28},
 {"name":"Stella","age":21},
 {"name":"Tiffany","age":25}
]








	











