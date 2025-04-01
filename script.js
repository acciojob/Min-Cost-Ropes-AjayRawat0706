function mincost(arr)
{ 
//write your code here
// return the min cost
  let res=0;
	while(arr.length>1){
		 arr.sort((a, b) => a - b); 
		let sum=arr[0]+arr[1];
		res+=sum;
		arr.splice(0,2);
		arr.push(sum)
	}
	return res
}

module.exports=mincost;
