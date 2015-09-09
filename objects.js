//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = 'Spencer Buster';
me.age = 30;
me["hair color"] = 'blonde';

//2. Iterate over the object to console.log the propery or key names.

for (m in me) {
	console.log(m);
	console.log(me[m]);
}