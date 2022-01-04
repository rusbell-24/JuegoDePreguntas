let basePreguntas = readText("base_datos_preguntas.json")
    let interprete_bdp = JSON.parse(basePreguntas)

let pregunta
let posibles_respuestas
let btn_correspondiente =[
    select_id("btn1"),select_id("btn2"),select_id("btn3"),select_id("btn4")
]

escogerPreguntaAleatoria()

function escogerPreguntaAleatoria(){
    escogerPregunta(Math.floor(Math.random()*interprete_bdp.length))
}

function escogerPregunta(n){
    pregunta = interprete_bdp[n]
    select_id("categoria").innerHTML = pregunta.categoria
    select_id("pregunta").innerHTML = pregunta.pregunta
    desordenarRespuestas(pregunta)
}

let btns= [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4"),
]


function desordenarRespuestas(pregunta){
    posibles_respuestas = [
        pregunta.respuesta,
        pregunta.incorrecta1,
        pregunta.incorrecta2,
        pregunta.incorrecta3
    ]

    posibles_respuestas.sort(()=>Math.random()-0.5)

    select_id("btn1").innerHTML = posibles_respuestas[0]
    select_id("btn2").innerHTML = posibles_respuestas[1]
    select_id("btn3").innerHTML = posibles_respuestas[2]
    select_id("btn4").innerHTML = posibles_respuestas[3]
}

function oprimir_btn(i){
    if(posibles_respuestas[i]== pregunta.respuesta){
        btn_correspondiente[i].style.background = "lightgreen"
    }else{
        btn_correspondiente[i].style.background = "pink"
    }
    setTimeout(()=>{
        reiniciar()
    },3000);
}

function reiniciar(){
    for (const btn of btn_correspondiente){
        btn.style.background = "white"
    }
    escogerPreguntaAleatoria()
}

function select_id(id){
    return document.getElementById(id)
}

function style(id){
    return select_id(id).style
}

function readText(ruta_local){
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200){
        texto = xmlhttp.responseText;
    }
    return texto;

    
}
