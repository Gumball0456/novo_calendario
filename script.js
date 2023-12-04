let nextMonth = document.getElementById("nextMonth");
let previousMonth = document.getElementById("previousMonth");
let contentorDias = document.getElementById("dias");
let titulo_mes = document.getElementById("tituloMes");
let mesActual= 0; //Janeiro

const DIAS_NO_MES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const INICIAS_DIAS_SEMANA = "DSTQQSS".split("");
const MES_EXTENSO = "Janeiro;Fevereiro;Março;Abril;Maio;Junho;Julho;Agosto;Setembro;Outubro;Novembro;Dezembro".split(";")
const NUM_DIAS_SEMANA = 7;
const NUM_MAX_DIAS_NO_CALENDARIO = 35;
const NUM_MESES = 12;

function desenhaDiasMesPassado(mes){
    let dias_mes_passado = 0;

    for(let i = 0; i < mes; i++){
        dias_mes_passado += DIAS_NO_MES[i];
    }

    for(let i = 0; i < (dias_mes_passado % NUM_DIAS_SEMANA); i++){
        let dia = document.createElement("button");
        dia.innerText = DIAS_NO_MES[mes - 1] - (dias_mes_passado % NUM_DIAS_SEMANA) + i + 1;
        dia.classList.add("diaMesPassado");
        dia.classList.add("dia");
        dia.classList.add("hover");
        dia.classList.add("noBorder");
        contentorDias.appendChild(dia);
    }
}
function desenhaDiasProximoMes(mes){
    let dias_mes_passado = 0;

    for(let i = 0; i < mes; i++){
        dias_mes_passado += DIAS_NO_MES[i];
    }
    
    for(let i = 0; i < NUM_MAX_DIAS_NO_CALENDARIO - DIAS_NO_MES[mes] - (dias_mes_passado % NUM_DIAS_SEMANA); i++){
        let dia = document.createElement("button");
        dia.innerText = i + 1;
        dia.classList.add("diaMesPassado");
        dia.classList.add("dia");
        dia.classList.add("hover");
        dia.classList.add("noBorder");
        contentorDias.appendChild(dia);
    }
}

function desenhaIniciasDiasSemana(){
    for(let i = 0; i < NUM_DIAS_SEMANA; i++){
        let dia = document.createElement("button");
        dia.innerText = INICIAS_DIAS_SEMANA[i];
        dia.classList.add("transparent");
        dia.classList.add("dia");
        dia.classList.add("noBorder");
        contentorDias.appendChild(dia);
    }
}
function desenhaCalendario(mes){
    for(let i = 1; i <= DIAS_NO_MES[mes]; i++){
        let dia = document.createElement("button");
        dia.innerText = i;
        dia.classList.add("dia");
        dia.classList.add("shadow");
        dia.classList.add("hover");
        dia.classList.add("noBorder");
        contentorDias.appendChild(dia);
    }
}

function limpaCalendario(){
    while(contentorDias.firstChild){
        contentorDias.removeChild(contentorDias.firstChild);
    }
}

desenhaIniciasDiasSemana();
desenhaDiasMesPassado(mesActual)
desenhaCalendario(mesActual);
desenhaDiasProximoMes(mesActual);

nextMonth.addEventListener("click", function(){
    mesActual = (mesActual + 1) % NUM_MESES;
    titulo_mes.textContent = MES_EXTENSO[mesActual];
    limpaCalendario();
    desenhaIniciasDiasSemana();
    desenhaDiasMesPassado(mesActual)
    desenhaCalendario(mesActual);
    desenhaDiasProximoMes(mesActual);
})

previousMonth.addEventListener("click", function(){
    mesActual = (mesActual - 1) % NUM_MESES;
    if(mesActual < 0)
        mesActual = 11;
    
    titulo_mes.innerText = MES_EXTENSO[mesActual];
    limpaCalendario();
    desenhaIniciasDiasSemana(); 
    desenhaDiasMesPassado(mesActual)
    desenhaCalendario(mesActual);
    desenhaDiasProximoMes(mesActual);
})