document.getElementById("btn").addEventListener("click",function(){
	
	const n = parseFloat(document.querySelector("#ip").value);
	let outputDiv = document.getElementById("output");
	outputDiv.textContent = "";

const initialPromise = new Promise ((resolve,reject) => {
   
	   setTimeout(()=>{
		   resolve(n);
	   },2000);
   
});

initialPromise
.then((n)=>{
	let number = n;
	outputDiv.textContent= `Result: ${number}`;
	return new Promise ((resolve,reject)=>{
		setTimeout(()=>{
			resolve(number);
		},2000);
	});
})
.then((number) => {
	let multiply = number*2;
	outputDiv.textContent = `Result: ${multiply}`;
	return new Promise ((resolve,reject)=>{
		setTimeout(()=>{
			resolve(multiply);
		},2000);
	});
})
.then((multiply)=>{
	let sub = multiply-3;
	outputDiv.textContent = `Result: ${sub}`;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(sub);
		},1000);
	});
})
.then((sub)=>{
	let divide = sub/2;
	outputDiv.textContent = `Result: ${divide}`;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(divide);
		},1000);
	});
})
.then((divide)=>{
	let add = divide+10;
	outputDiv.textContent = `Final Result: ${add}`;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(add);
		},1000);
	});
})

})























