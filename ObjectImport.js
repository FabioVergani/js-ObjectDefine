Object.defineProperty(Object.prototype,'import',{
 value:function(p){
	const o=p,e=this,O=Object;
	let n=o;
	if(O.isExtensible(e)){
		const r=n={__proto__:null},f=O.defineProperty,g=O.getOwnPropertyDescriptor;
		let j=0,l=0,i,x,v;
		for(i in o){
		 v=o[i];
		 if((i in e)?e.hasOwnProperty(i):false){
			x=g(o,i);
			if(x.writable){
				x.value=v;
				if(x.configurable){
					f(e,i,x);
				}else{
					e[i]=v;
				};
				++l;
			}else{
				r[i]=v;
				++j;
			};
		 }else{
			e[i]=v;
			++l;
		 };
		};
		if(j!==0){
			r.all=l===0;
			r.counts=j;
		}else{
			n=false;
		};
	};
	return n;
 }});
//----------------------------------
//test:
var remains;
//#1
console.groupCollapsed(1);
var obj1={zz:666},obj2={a:1,b:2,c:3};
console.log('obj1:{zz:666},obj2:{a:1,b:2,c:3}');
console.log('obj1.a',obj1.a);
console.log('obj2.a',obj2.a);
console.log('obj2.c',obj2.c);
if((remains=obj1.import(obj2))===false){
 console.log('obj1 import all obj2');
}else{
 console.warn('remains %O',remains);
};
console.log('afert import: obj1 %O',obj1);
obj2.c=999;
console.log('obj2.c=999');
console.log('now obj1%O',obj1);
console.log('now obj2%O',obj2);
console.groupEnd();
//#2
console.groupCollapsed(2);
var obj1={zz:666},obj2={a:999,b:2,c:3};
Object.defineProperty(obj1,'a',{value:1,writable:true,enumerable:true,configurable:false});
console.log('obj1\':{a*:1,zz:666},obj2\':{a:999,b:2,c:3}\n*descriptor:%O',Object.getOwnPropertyDescriptor(obj2,'a'));
//Object.defineProperty(obj1,'c',{value:1,writable:false,enumerable:true,configurable:true});
console.log('obj1.a',obj1.a);
console.log('obj1.c',obj1.c);
console.log('obj2.a',obj2.a);
console.log('obj2.c',obj2.c);
if((remains=obj1.import(obj2))===false){
 console.log('obj1 import all obj2');
}else{
 console.warn('remains %O',remains);
};
console.log('afert import: obj1 %O',obj1);
console.log('obj2.a descriptor:%O',Object.getOwnPropertyDescriptor(obj2,'a'));
console.log('\nnow obj1.a descriptor:%O',Object.getOwnPropertyDescriptor(obj1,'a'));
console.log('now obj1.b descriptor:%O',Object.getOwnPropertyDescriptor(obj1,'b'));
console.log('now obj1%O',obj1);
console.groupEnd();





//Object.freeze(obj1);>process.props===false
/*
Objects are extensible by default
and their __proto__ property) can be modified.
An object can be marked as non-extensible using:

	-Object.preventExtensions()
		Note:
			that the properties of a non-extensible object, in general, may still be deleted.
			Properties can still be added to the object prototype BUT NOT on its __proto__  property.

	-Object.seal()
			marks all existing properties as non-configurable(fixed and immutable,incancellabili)
			The prototype chain remains untouched. However, the __proto__  property is sealed as well.

	-Object.freeze()
			Nothing can be added to or removed from the properties
			Values cannot be changed for data properties.
			Accessor properties (getters and setters) work the same
			(and still give the illusion that you are changing the value).
			Note that values that are objects can still be modified, unless they are also frozen.

*/
