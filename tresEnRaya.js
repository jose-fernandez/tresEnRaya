/*
Tres en Raya. 
El juego del tres en raya consiste en un tablero de 3x3, en el que
sucesivamente dos  jugadores  van marcando casillas  hasta  
conseguir  tener  sus  tres marcas en línea, pudiendo ser esta 
horizontal, vertical o en diagonal. Se pide por tanto la 
implementacion de  este juego teniendo en cuenta:

1.
El juego es pensado para ser usado por dos usuarios.
2.
El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigue antes las tres en linea.
*/

class View{

	constructor(id){
		this.id=document.getElementById(id);

	}

	build(){
		var tabla;
		tabla = `<table border="0" cellspacing="2" bgcolor="black">`
		for (var j=0;j<3;j++){
			tabla +=`<tr height="150">`;
			for (var i=0;i<3;i++){
				tabla +=`<td width="150"bgcolor="white" id =${j}.${i}></td>`;
			}
			tabla +=`</tr>`;
		}	
		tabla += `</table>`;
		this.id.innerHTML=tabla;
	}


}

class Controlator{
	constructor(){
		var name1 = prompt("Type player1 name.");
		var name2 = prompt("Type player2 name.");
		var mod= new Model(name1,name2);
		var a= new View("table");
		var that = this;
		a.build();
		this.createEvent();
	}
	createEvent(){
	var player = true;
	for (let i=0;i<3;i++){
		for (let j=0;j<3;j++){
			this.play(player, i, j);
			player = !player;
			}
		}
	}
	
	play(player1,i,j){
		//var that=this; para que cuando coja that se vaya al this de la funcion padre
		//No se llamar a una funcion interna desde dentro de una clase; this.listResult me da fallo

		if(player1){
			document.getElementById(`${i}.${j}`).addEventListener("click", 
			function(){document.getElementById(`${i}.${j}`).innerHTML = 
			"Player1"; that.listResultPlayer1.push(`${i}.${j}`);});
		}else{
			document.getElementById(`${i}.${j}`).addEventListener("click", 
			function(){document.getElementById(`${i}.${j}`).innerHTML = 
			"player2"; that.listResultPlayer2.push(`${i}.${j}`);});
	}
}

}

class Model{
	constructor(n1,n2){
		this.listPlayer = new Array(new Player(n1),new Player(n2));
		this.listTable = new Array(0.0, 0.1, 0.2, 1.0, 
			1.1, 1.2, 2.0, 2.1, 2.2);
		this.listResultPlayer1 = new Array();
		this.listResultPlayer2 = new Array();
	}

}
class Player{
	constructor(nombre){
		this.name=nombre;
	}

}

window.onload= function(){
	new Controlator();
}

