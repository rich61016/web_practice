//�bJS���إߤ@�Ӱ}�C
var java007 = new Array('Peter','Anan','Stella','Annie','Tina','Sam');
var java007 = ['Peter','Anan','Stella','Annie','Tina','Sam'];
var java007 = [];

for(var i=0;i<java007.length;i++){
	//use java007[i]
}
for(var key in java007){
	//use java007[key]
}

//�bJS���إߤ@�Ӫ���
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

//JSON:Array�MObject���զX
//��}�C��i����
var temp = {[],[],[],[],[]};
var friends = {JAVA007:[
					{name:"Peter",age:28},
					{name:"Stella",age:21},
					{name:"Tiffany",age:25}
				]
			  };
	friends �O�@�Ӫ���
	friends.JAVA007 �O�@�Ӱ}�C
	friends.JAVA007[0] �O�@�Ӫ���
	friends.JAVA007[0].name ---> Peter
	
	for(var i=0;i<friends.JAVA007.length;i++){
		//friends.JAVA007[i]
	}
	
//�⪫���i�}�C��
var temp = [{name:"Peter",age:28},
			{name:"Stella",age:21},
			{name:"Tiffany",age:25}
		   ];
	temp �O�}�C
	temp[0] �h�O�@�Ӫ���

//�H�W�ҬOJavascript���g�k

//JSON���g�k
[{"name":"Peter","age":28},
 {"name":"Stella","age":21},
 {"name":"Tiffany","age":25}
]








	











