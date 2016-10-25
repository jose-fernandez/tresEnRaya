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
				tabla +=`<td width="150" bgcolor="white" id =${j}.${i} ></td>`;
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
		this.mod= new Model(name1,name2);
		this.a= new View("table");
		this.player = true;
		this.a.build();
		this.createEvent();

	}
	createEvent(){
	var player = true;
	for (let i=0;i<3;i++){
		for (let j=0;j<3;j++){
			document.getElementById(`${i}.${j}`).addEventListener("click", (e)=>this.ficha(e));
			}
		}
	}
	ficha(e){
			this.mod.save(e, this.player);
			this.player= !this.player;
	}
}


class Model{
	constructor(n1,n2){
		this.listPlayer = new Array(new Player(n1),new Player(n2));
		this.listTable = new Array(0.0, 0.1, 0.2, 1.0, 
			1.1, 1.2, 2.0, 2.1, 2.2);
		this.listWin = [[0,0,0],[0,0,0],
						[0,0,0]];
		this.listResultPlayer1 = new Array();
		this.listResultPlayer2 = new Array();
	}
	save(e, bool){
		if (bool){
			e.target.innerHTML= "X";
			this.game(e.target.getAttribute("id"),1);
		}else{
			e.target.innerHTML = "O";
			this.game(e.target.getAttribute("id"),2);
		}
	}
	game(id, x){
		if (x==1){
			++this.listWin[parseInt(id[0])][parseInt(id[2])];
		}else{
			++this.listWin[parseInt(id[0])][parseInt(id[2])];
			++this.listWin[parseInt(id[0])][parseInt(id[2])];
		}
		this.win(this.listWin);
	}
	win(x){
		if(x[0][0] == 1 && x[0][1] == 1 && x[0][2] == 1 || 
			x[1][0] == 1 && x[1][1] == 1 && x[1][2] == 1 ||
			x[2][0] == 1 && x[2][1] == 1 && x[2][2] == 1 || 
			x[0][0] == 1 && x[1][0] == 1 && x[2][2] == 1 || 
			x[0][1] == 1 && x[1][1] == 1 && x[2][1] == 1 || 
			x[0][2] == 1 && x[1][2] == 1 && x[2][2] == 1 || 
			x[0][0] == 1 && x[1][1] == 1 && x[2][2] == 1 || 
			x[2][0] == 1 && x[1][1] == 1 && x[0][2] == 1){
			document.write(`WIN ${this.listPlayer[0].name}!!`)
		}else if(x[0][0] == 2 && x[0][1] == 2 && x[0][2] == 2 || 
			x[1][0] == 2 && x[1][1] == 2 && x[1][2] == 2 ||
			x[2][0] == 2 && x[2][1] == 2 && x[2][2] == 2 || 
			x[0][0] == 2 && x[1][0] == 2 && x[2][2] == 2 || 
			x[0][1] == 2 && x[1][1] == 2 && x[2][1] == 2 || 
			x[0][2] == 2 && x[1][2] == 2 && x[2][2] == 2 || 
			x[0][0] == 2 && x[1][1] == 2 && x[2][2] == 2 || 
			x[2][0] == 2 && x[1][1] == 2 && x[0][2] == 2){
			document.write(`WIN ${this.listPlayer[1].name}!!`)
			}
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

