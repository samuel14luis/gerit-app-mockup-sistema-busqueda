var verbst = ["be", "ben", "nid", "tt"];
var correctVerb = ["ser", "ben", "nid", "tt"];
for (var i = 0; i < verbst.length; i++) {
    document.getElementById("table").innerHTML += generar(i);
}
for (var i = 0; i < verbst.length; i++) {
    var checkCorrect = document.getElementById("CheckCorrect-" + i);
    checkCorrect.addEventListener('click', cheking, false);
}
function cheking(event) {
    var id = event.target.id;
    var s = parseInt(id.split('-')[1]);
    var txtConten = document.getElementById("txtConten-" + s);
    console.log(txtConten);
}
function generar(i) {
    return "<tbody>\n\t<tr>\n\t\t<td>" + verbst[i] + "</td>\n\t\t<td>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<input class=\"btn-block form-control\" id=\"txtConten" + i + "\"  type=\"text\">\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<input class=\"btn btn-success btn-block\" id=\"CheckCorrect-" + i + "\" type=\"button\" value=\"check\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<input class=\"btn btn-dark btn-block\" type=\"button\" value=\"to correct\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</td>\n\t</tr>\n</tbody>";
}
