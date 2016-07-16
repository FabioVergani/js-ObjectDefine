Object.defineProperty(Object.prototype,'import',{
 value:function(p){
	const o=p,e=this,O=Object,remain={__proto__:null};
	if(O.isExtensible(e)){
		const r=remain.props={},f=O.defineProperty,g=O.getOwnPropertyDescriptor;
		let j=0,i,x,v;
		for(i in o){
		 v=o[i];
		 if((i in e)?e.hasOwnProperty(i):false){
			x=g(o,i);
			if(x.writable){
				x.value=v;f(o,p,x);
			}else{
				r[i]=v;
				++j;
			};
		 }else{
			e[i]=v;
		 };
		};
		if(j!==0){
			remain.counts=j;
		}else{
			remain.props=false;
		};
	}else{
		remain.props=p;
	};
	return remain;
 }});
//----------------------------------
//test:
var remains;
console.group('#1');
var obj1={zz:666},obj2={a:1,b:2,c:3};
console.dir(obj1);
console.log('obj1.a',obj1.a);
console.dir(obj2);
console.log('obj2.a',obj2.a);
console.log('obj2.c',obj2.c);
if((remains=obj1.import(obj2))===false){
 console.log('obj1 import all obj2');
}else{
 let o=remains.props;
 console.warn('import fail @',Object.keys(o));
 console.dir(o);
};
console.log('afert import: obj1 %O',obj1);
console.log('obj2.c=999');
obj2.c=999;
console.log('now obj1%O',obj1);
console.log('now obj2%O',obj2);
console.groupEnd();
