


export function dramImg (url , callback) {
	let img = new Image()
	img.src = url
	img.onload = () => {
		callback ? callback(img) : ''
	}
	return img
}


export function getwh (value){
		
}

