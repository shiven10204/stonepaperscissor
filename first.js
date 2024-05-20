


let comp;
let compvall;
let uscore=0;
let cscore=0;
turn=0;

function compval(){
    let num = 3*Math.random();
    console.log(num);
    if(num>0 && num<1){
comp='rock'
    }
   else if(num>1 && num<2){
        comp='paper'
            }
            else{
                comp='scissor'
            }
            
return comp;

}
function choose(val){
    turn++;
compvall=compval();

console.log(' computer chose '+ compvall);
if(turn==3){
    document.getElementById('Msg').value='game ends';
if(uscore>cscore){
    document.getElementById('declare').innerHTML ='User Wins';

}else if(uscore<cscore){
    document.getElementById('declare').innerHTML ='Computer Wins';

}else{
    document.getElementById('declare').innerHTML ='Draw';

}

}else{
if(val==compvall){
    console.log('draw')
    document.getElementById('Msg').innerHTML=' computer chose '+ compvall+'Draw';

}else{
if((val=='rock'&& compvall=='paper') || (val=='paper'&& compvall=='scissor') ||(val=='scissor'&& compvall=='rock')){
    console.log('computer wins');
   cscore++;
    document.getElementById('Msg').innerHTML=' computer chose '+ compvall+'computer wins';
    document.getElementById('cscore').innerHTML=cscore ;


}
else{
    console.log('user wins');
    uscore++;
    document.getElementById('Msg').value=' computer chose '+ compvall+'user wins';
    document.getElementById('uscore').innerHTML =uscore;

}
}
}
}
