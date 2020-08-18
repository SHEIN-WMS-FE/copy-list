# CopyList
> 将list中的数据复制到剪切板

[![](https://img.shields.io/badge/version-v0.0.2-success)](https://www.npmjs.com/package/copy-list)
[![](https://img.shields.io/badge/keywords-copy,clipboard-blue)]()
[![](https://img.shields.io/badge/license-MIT-success)]()


## Installation
-----

		$ npm install copy-list
Or

		$ yarn add copy-list

## Usage

````javascript
	import CopyList from 'copy-list';
	
	const list = [
		{
			name: 'zhang si rui',
			age: 19,
			height: 176.2
		},
		{
			name: 'li fo',
			age: 18,
			height: 180.4
		},
		{
			name: 'wang fa wu',
			age: 19,
			height: 179.1
		}
	];
	
	function onClick(){
		const result = CopyList(list, ['name', 'age', 'height']);
		if (result) {
			console.log('success');
		} else {
			console.log('error');
		}
	}
	
````
