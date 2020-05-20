let who = ['The dog','My granma','His turtle','My bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    
function excuseGenerator(who, what, when){
    nuQuien = Math.floor(Math.random() * who.length);
    numQue = Math.floor(Math.random() * what.length);
    numCuando = Math.floor(Math.random() * when.length);
    return who[nuQuien] + " " + what[numQue] + " " + "mi tarea" + " " + when[numCuando];
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;