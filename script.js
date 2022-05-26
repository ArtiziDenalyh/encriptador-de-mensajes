
var trletra=document.getElementById("tabla");
var trnumero=document.getElementById("n");
var tablaMensaje=document.getElementById("mensajillo");
const cadenadetexto=document.getElementById("Texto");
var btn=document.getElementById("hacer");
let inputValue="";
let inputvalueLength=0;

/**
 * The function ABCD() is called when the button is clicked
 */
function pulsar(){
 ABCD();}
/**
 * It takes a string and returns an array of the alphabetical index of each letter in the string
 */
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
/**
 * It takes the value of the input field, and if it's not empty, it adds it to the list of messages
 */
function limpiar(){
    tablaMensaje.innerHTML="";
}

btn.addEventListener("click",pulsar);
