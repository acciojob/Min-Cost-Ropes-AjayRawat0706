function mincost(arr)
{ 
//write your code here
// return the min cost
  let res=0;
	while(arr.length>1){
		arr.sort();
		sum+=arr[0]+arr[1];
		arr[1]=arr[0]+arr[1];
		arr.slice(1,arr.length-1);
	}
	return sum
}

module.exports=mincost;
