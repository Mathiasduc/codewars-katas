function isValidWalk(walk) {
	if(!(walk.length === 10)){
		return false;
	}

	let x =0;
	let y =0;

	for (let i = walk.length - 1; i>= 0; i--) {
		if(walk[i] === 'n'){
			y++;
		}else if(walk[i] === 's'){
			y--;
		}else if(walk[i]=== 'e'){
			x++;
		}else if(walk[i] === 'w'){
			x--;
		}
	}
	return (x === 0 && y === 0); 
}
module.exports= isValidWalk;