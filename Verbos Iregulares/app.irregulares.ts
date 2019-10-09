let verbst:string[] = ["be","ben","nid","tt"];
let correctVerb:string[] = ["ser","ben","nid","tt"];

for(var i:number = 0 ;i < verbst.length; i++ ){
	document.getElementById("table").innerHTML += generar(i);	
}
for(var i:number = 0 ;i < verbst.length; i++ ){
	let checkCorrect = document.getElementById("CheckCorrect-"+i);
	checkCorrect.addEventListener('click', cheking,false) 
}

function cheking(event){
	let id = event.target.id;
	let s:number = parseInt(id.split('-')[1]);
	let txtConten = document.getElementById("txtConten-" + s);
	console.log(txtConten);
	


}

function generar(i:number){
	return `<tbody>
	<tr>
		<td>${verbst[i]}</td>
		<td>
			<div class="row">
				<div class="col-md-4">
					<input class="btn-block form-control" id="txtConten${i}"  type="text">
				</div>	
				<div class="col-md-4">
					<input class="btn btn-success btn-block" id="CheckCorrect-${i}" type="button" value="check">
				</div>
				<div class="col-md-4">
					<input class="btn btn-dark btn-block" type="button" value="to correct">
				</div>
			</div>
		</td>
	</tr>
</tbody>`
}