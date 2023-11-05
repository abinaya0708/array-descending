document.write("Descending order of an array elements"+"<br>");
document.write("Given array:[1,2,3,-5,7,8,-1]"+"<br>");





let a=[1,2,3,-5,7,8,-1];

let b=[];
temp=0;

for(i=0;i<a.length;i++){
	for(j=i+1;j<a.length;j++){
		if(a[i]<a[j]){
			temp=a[j];
			a[j]=a[i];
			a[i]=temp;
		}
	}
	
	
b.push(a[i]);

}
console.log(b);



document.write("Output:"+b);