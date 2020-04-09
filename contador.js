//Pega as tags do html
var Evento =document.getElementById("evento");
var dataInput =document.getElementById("data");
var dataOiDias =document.getElementById("dias");
var dataOiHoras =document.getElementById("horas");
var dataOiMinutos =document.getElementById("minutos");
var dataOiSegundos =document.getElementById("segundos");

//variaveis da hora local na maquina
var dataAtual = new Date();
var dataAnoAtual = dataAtual.getFullYear();
var dataDias = dataAtual.getDate();
var dataMeses = dataAtual.getMonth()+1;

//variaveis que guardam os valores do input;
var dataAno;
var dataMes;
var dataDia;

//variavel que guarda o resultado do calculo de dias
var dataDiasFinal;

var dataHorasFinal;

var dataMinutosFinal;

var dataSegundosFinal;




//calcula os dias para o evento acontecer
function calculoDias(){
    if(dataDia>dataDias){
        dataDiasFinal =dataDia-dataDias
    }else if(dataDias > dataDia){
        dataDiasFinal =dataDias-dataDia;
    }else{
        dataDiasFinal=0
    }

    if(dataMes>dataMeses){
        dataDiasFinal+=(dataMes-dataMeses)*30;
        if(dataMes-dataMeses ==1){
            dataDiasFinal+=1;
        }
        if(dataMes-dataMeses ==3){
            dataDiasFinal+=2;
        }
        if(dataMes-dataMeses ==5){
            dataDiasFinal+=3;
        }
        if(dataMes-dataMeses ==7){
            dataDiasFinal+=4;
        }
    }else{
        dataDiasFinal-=(dataMeses-dataMes)*30
    }

    if(dataAno > dataAnoAtual){
        dataDiasFinal+=(dataAno-dataAnoAtual)*365
    }
    dataOiDias.innerText=dataDiasFinal;

}

function calculoHoras(){
    dataOiHoras.innerText =23-dataAtual.getHours();
}

function calculoMinutos(){
    dataOiMinutos.innerText=59-dataAtual.getMinutes();
}

function calculoSegundos(){
    dataOiSegundos.innerText=59-dataAtual.getSeconds();
}

function getData(){
    dataAno = dataInput.value;
    dataAno = dataAno.slice(0,4);
    dataMes = dataInput.value;
    dataMes = dataMes.slice(5,7);
    dataDia = dataInput.value;
    dataDia = dataDia.slice(-2);
    
}

function countTimeDown(){
    getData();
    if(dataAno < dataAnoAtual){
        alert("Data Invalida")
    }else if(dataAno==dataAnoAtual && dataMes<dataMeses){
        alert("Data Invalida")
    }else if(dataAno==dataAnoAtual && dataMes==dataMeses && dataDia<dataDias ){
        alert("Data Invalida")
    }else{
        //função que executa os calculos a cada 1 segundo
        if(Evento.value==""){
            alert("Data sem nome com evento definido");
        }
    setInterval(function(){
        dataAtual = new Date();
        calculoDias();
        calculoHoras();
        calculoMinutos();
        calculoSegundos();
        
    },1000)
    }
    
}


