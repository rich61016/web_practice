//在JS中建立一個陣列
var java007 = new Array('Prter','Srter','Drter','Brter','Erter');
var java007 = ['Prter','Srter','Drter','Brter','Erter'];
var java007 = [];

for(var i=0;i<java007.length;i++){
	//usejava007[i]
}
for(var key in java007){
	//use java007[key]
}

//在JS中建立一個物件
//==1==
var boy = new Object();
boy.name = "Prter";
boy.age = 13;

console.log(boy.age);

//==2==
var boy = {};

//==3=
var boy = {name:"Prter",age:13};
console.log(boy.age);

//JSON:Array和Object的組合
//把陣列放進物件中
var temp = {[],[],[],[],[]};
var friends = {JAVA007:[
	                {name:"Prter",age:13},
				    {name:"Srter",age:14},
					{name:"Drter",age:15}
				 ]
              };
//friends 是一個物件
//friends.JAVA007 是一個陣列
//friends.JAVA007[0] 是一個物件
//friends.JAVA007[0].name--> Prter

for(i=0;i<friends.JAVA007.length;i++){
	//friends.JAVA007[i]
}

//把物件放進陣列中
var temp = [{name:"Prter",age:13},
			{name:"Srter",age:14},
			{name:"Drter",age:15}
			];
    //temp是陣列
    //temp[0]則是一個物件
//以上皆是Javascript的寫法
	
//JSON的寫法(只要不是數字都要加雙引號)
[{"name":"Prter","age":13},
 {"name":"Srter","age":14},
 {"name":"Drter","age":15}
];





















