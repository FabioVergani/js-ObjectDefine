Object.defineProperty(Object.prototype,'import',{
 value:function(p){
	const e=this,o=p,O=Object,f=O.defineProperty,g=O.getOwnPropertyDescriptor;
	let i,x,v;
	for(i in o){
	 v=o[i];
	 if((i in e)?e.hasOwnProperty(i):false){
		x=g(o,i);
		if(x.writable){x.value=v;f(o,p,x);};
	 }else{
		e[i]=v;
	 };
	};
 }});
//test:
var pippo={zz:666};
Object.defineProperty(pippo,'a',{
  value:37,
  writable:true,
  enumerable: true,
  configurable: false
});
pippo.import({a:1,b:2,c:3});
console.dir(pippo);
