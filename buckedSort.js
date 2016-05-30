const readlineSync = require('readline-sync');
const  book=[];

for (var i = 0; i <= 10000; i++) {
	book[i]=0//初始化为0
}


var n=Number(readlineSync.question('输入的数量:'));

for(let i=1;i<=n;i++){
	var t=Number(readlineSync.question("请输入第"+i+"个数字:"))
	if(!!t){
		book[t]++;
	}
}

for(let i=1000;i>0;i--){
	for(let j=1;j<=book[i];j++){
		console.log(i)//输出
	}
}