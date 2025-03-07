document.getElementById("btn").addEventListener("click",function(e){
	e.preventDefault();
	const n = parseInt(document.querySelector("#ip").value);

const initialPromise = new Promise ((resolve,reject) => {
   
	   resolve(n);
   
});

initialPromise
.then((n)=>{
	let number = n;
	document.querySelector("#output").textContent = number;
	return new Promise ((resolve,reject)=>{
		setTimeout(()=>{
			resolve(number);
		},2000);
	});
})
.then((number) => {
	let multiply = number*2;
	document.querySelector("#output").textContent = multiply;
	return new Promise ((resolve,reject)=>{
		setTimeout(()=>{
			resolve(multiply);
		},2000);
	});
})
.then((multiply)=>{
	let sub = multiply-3;
	document.querySelector("#output").textContent = sub;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(sub);
		},1000);
	});
})
.then((sub)=>{
	let divide = sub/2;
	document.querySelector("#output").textContent = divide;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(divide);
		},1000);
	});
})
.then((divide)=>{
	let add = divide+10;
	document.querySelector("#output").textContent = add;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(add);
		},1000);
	});
})

})























