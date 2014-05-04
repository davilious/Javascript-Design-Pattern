var type = 2;

function hazAlgo(){
	console.log('hago algo');
}
function hazOtraCosa(){
	console.log('hago otra cosa');
}

var r = new Registry();
r.register(1, hazAlgo);
r.register(2, hazOtraCosa);

var fn = r.getValue(type);
fn();