//Llamada asíncrona
function doWork(){
  
  var promise = new Promise();
  
  setTimeout(function(){
	promise.resolve("timeout elapsed");
  }, 5000);

  return promise;
}

//----

var promise = doWork();

//Cuando doWork sea ejecutado entonces haz lo siguiente
//no me importa cuando se ejecutará lo que importará es que
//cuando se ejecute el código hará algo más.
//no importan el Cuando sino el Que!
promise.then(function(message){
  console.log(message);
});

var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
	promise.then(function(message){
	  console.log("from the click handler");
  	  console.log(message);
	});
});


