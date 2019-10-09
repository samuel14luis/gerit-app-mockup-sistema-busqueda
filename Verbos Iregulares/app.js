let verbs =["be","become","begin","blow","break","bring","build","buy","catch","choose","come",
"cost","do","draw","drink","drive","eat","fall","feed","feel","fight","find","fly","forget","get","give","go",
"grow","hang","have","hear","hide","hit","hurt","keep","know","learn","leave","lend","let","lose","make","mean",
"meet","pay","put","read","ride","ring","run","say","see","sell","send","show","sing","sit","sleep","speak","spend",
"stand","steal","swim","take",]
let pastSimple =["was","became","began","blew","broke","brought","built","bought","caught","chose","came",
"cost","did","drew","drank","drove","eta","fell","fed","felt","fought","found","flew","forgot","got","gave","went",
"grew","hung","had","heard","hid","hit","hurt","kept","knew","learnt","left","lent","let","lost","made","meant"
,"met","paid","put","read","rode","rang","ran","said","sow","sold","sent","showed","sang","sat","slept","spoke","spent",
"stood","stole","swam","took",]
let pastParticiple =["been","become","begun","blown","broken","brought","built","bought","catch","choosen","come"
,"cost","done","drawn","drunk","driven","eaten","f	allen","fed","felt","fought","found","flown","forgottten","got","given","gone",
"grown","hung","had","heard","hidden","hit","hurt","kept","known","learnt","left","lent","let","lost","made","meant"
,"met","paid","put","read","ridden","rung","rung","said","seen","sold","sent","shown","sung","sat","slept","spoken","spent",
"stood","stolen","swum","taken",]

//Generar UI
for(var i = 0 ; i < verbs.length; i++){  
	document.getElementById("tabla").innerHTML+= generarUI(i)
}
//Asignar funciones a botones
for(var i = 0 ; i < verbs.length; i++){
	let checkSimplex = document.getElementById('CheckSimple-'+i);
	let checkParticiple = document.getElementById('CheckParticiple-'+i);
	let CorrectSimple = document.getElementById('CorrectSimple-'+i);
	let CorrectParticiple = document.getElementById('CorrectParticiple-'+i);
	let  = document.getElementById('CorrectSimple-'+i);
	checkSimplex.addEventListener('click', evaluar, false)
	checkParticiple.addEventListener('click', evaluarParticiple, false)
	CorrectSimple.addEventListener('click',correct,false) 
	CorrectParticiple.addEventListener('click',participleCorrect,false) 
}
function participleCorrect(event){
	let id = event.target.id;
	let n = parseInt(id.split('-')[1]);
	let txtPastParticiple = document.getElementById("txtPastParticiple-" + n);
	txtPastParticiple.value = pastParticiple[n];
}

function correct(event){
	let id = event.target.id;
	let n = parseInt(id.split('-')[1]);
	let txtPastSimple = document.getElementById("txtPastSimple-" + n);
	txtPastSimple.value = pastSimple[n];
}
function audio(e){
	var reproducir =new Audio();
	reproducir.src = e;
	reproducir.play();
}
function evaluar(event) {
	let id = event.target.id;
	let n = parseInt(id.split('-')[1])
	let txtPastSimple = document.getElementById("txtPastSimple-" + n).value;
	if(txtPastSimple == pastSimple[n]){
		audio("soung/great.wav");
	}else{
		audio("soung/fail.flac");		
	}	
}

function evaluarParticiple(event) {
	let id = event.target.id
	let n = parseInt(id.split('-')[1])
	let txtPastSimple = document.getElementById("txtPastParticiple-" + n).value;
	if(txtPastSimple == pastParticiple[n]){
		audio("soung/great.wav");

	}else{
		audio("soung/fail.flac");		
		
	}	
}

	
function generarUI(i) {
	return `
	<tbody> 
		<tr>
			<td> ${verbs[i]} </td>
			<td>
				<div class="row">
					<div class="col-md-4">
						<input id="txtPastSimple-${i}" type="text" class="form-control">
					</div>
					<div class="col-md-4">
						<input  class="btn btn-success btn-block" type="button" value="check" id ="CheckSimple-${i}">
					</div>
					<div class="col-md-4">
						<input  class="btn btn-primary btn-block" type="button" value="to correct" id ="CorrectSimple-${i}">
					</div>
				</div>
			</td>
			<td>
				<div class="row">
					<div class="col-md-4">
						<input id="txtPastParticiple-${i}" type="text" class="form-control">
					</div>
					<div class="col-md-4">
						<input  class="btn btn-success btn-block" type="button" value="check" id ="CheckParticiple-${i}">
					</div>
					<div class="col-md-4">
						<input  class="btn btn-primary btn-block" type="button" value="to correct" id ="CorrectParticiple-${i}">
					</div>
				</div>
			</td>
		</tr>
	</tbody>`
}