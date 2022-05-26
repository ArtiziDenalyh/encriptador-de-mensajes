
var trletra=document.getElementById("tabla");
var trnumero=document.getElementById("n");
var tablaMensaje=document.getElementById("mensajillo");
const cadenadetexto=document.getElementById("Texto");
var btn=document.getElementById("hacer");
let inputValue="";
let inputvalueLength=0;

function pulsar(){
 ABCD();}
function ABCD(){
    texto=cadenadetexto.value.toLowerCase();
    inputvalueLength=cadenadetexto.value.length;
    const abecedario=" abcdefghijklmnopqrstuvwxyz";
    const clave = [];
    for (let x = 0; x < abecedario.length; x++) {
        clave[x]=x;
        console.log(abecedario[x]+"\t"+clave[x]);
    }
    for (let i = 0; i < inputvalueLength+1; i++) {
        for (let a = 0; a < abecedario.length; a++) {
            if(texto[i]==abecedario[a])
            {
                let $thletra=document.createElement("th");
                let $thnumero=document.createElement("th");

                $thletra.innerHTML=texto[i];
                $thnumero.innerHTML=a;

                trletra.appendChild($thletra);
                trnumero.appendChild($thnumero)
                
                console.log(texto[i],a);
            }
        }
    }
}
function limpiar(){
    tablaMensaje.innerHTML="";
}

btn.addEventListener("click",pulsar);
