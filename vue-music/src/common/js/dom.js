/*
* @Author: whuzxq
* @Date:   2017-07-22 21:09:27
* @Last Modified by:   whuzxq
* @Last Modified time: 2017-07-28 14:54:59
*/

'use strict';
export function addClass(el,className){
	if(hasClass(el,className)){
		return
	}
	console.log(el.className)
	let newClass=el.className.split(' ')
	newClass.push(className)
	el.className=newClass.join(' ')
}

export function hasClass(el,className){
	let reg=new RegExp('(^|\\s)'+className+'(\\s|$)')
	return reg.test(el.className)
}

export function getData(el,name,val){
	const prefix = 'data-'
	name=prefix + name
	if(val){
		return el.setAttribute(name,val)
	}else{
		return el.getAttribute(name)
	}
}

let elementStyle = document.createElement('div').style

let vendor = (()=>{
	let transformNames = {
		webkit:'webkit-transform',
		Moz:'MozTransform',
		O:'OTransform',
		ms:'msTransform',
		standard:'transform'
	}
	for(let key in transformNames){
		if(elementStyle[transformNames[key]]!==undefined){
			return key
		}
	}
	return false
})()

export function prefixStyle(style){
	if(vendor == false){
		return false
	}

	if(vendor ===  'standard'){
		return style
	}

	return vendor+ style.charAt(0).toUpperCase() + style.substr(1)
}