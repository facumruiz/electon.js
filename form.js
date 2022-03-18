
let p;
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];
var list10 = [];
var list11 = [];
const arr =[];


var n = 1;
var x = 0;

let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciarS');
let resetear = document.getElementById('resetear');
let grabar = document.getElementById('grabar');
let almacenarTiempos = document.getElementById('almacenarTiempos');

let tiempo = 0, intervalo = 0;
let verificador = false;

init();

function init() {
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    grabar.addEventListener('click', grabarContador);
}

function iniciarContador() {
    if (verificador == false) {
        intervalo = setInterval(function () {
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);
        }, 10);
        verificador = true;
    } else {
        verificador = false;
        clearInterval(intervalo);
    }
}

function resetearContador() {
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00';
    clearInterval(intervalo);
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

function grabarContador() {
    if (temporizador.textContent === '0.00') {
        console.log('click en el botón iniciar')
    }
    else {
        p = document.createElement('ul');
        p.innerHTML = `
        ${tiempo.toFixed(2)}
    `;
        almacenarTiempos.appendChild(p);
    }
    arr.push(p.innerText)
    console.log(arr)


}

 
function AddRow() {
  var AddRown = document.getElementById("dataTable");
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("1").value;
  list2[x] = document.getElementById("2").value;
  list3[x] = document.getElementById("3").value;
  list4[x] = document.getElementById("4").value;
  list5[x] = document.getElementById("5").value;
  list6[x] = document.getElementById("6").value;
  list7[x] = document.getElementById("7").value;
  list8[x] = document.getElementById("8").value;
  list9[x] = document.getElementById("9").value;
  list10[x] = document.getElementById("10").value;
  list11[x] = document.getElementById("11").value;


  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  var cel7 = NewRow.insertCell(6);
  var cel8 = NewRow.insertCell(7);
  var cel9 = NewRow.insertCell(8);
  var cel10 = NewRow.insertCell(9);
  var cel11 = NewRow.insertCell(10);  
  var cel12 = NewRow.insertCell(11);

  
  cel1.innerHTML = 0;
  cel2.innerHTML = 0;
  cel3.innerHTML = 0;
  cel4.innerHTML = 0;
  cel5.innerHTML = 0;
  cel6.innerHTML = 0;
  cel7.innerHTML = 0;
  cel8.innerHTML = 0;
  cel9.innerHTML = 0;
  cel10.innerHTML = 0;
  cel11.innerHTML = 0;



  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];
  cel7.innerHTML = list7[x];;
  cel8.innerHTML = list8[x];;
  cel9.innerHTML = list9[x];;
  cel10.innerHTML = list10[x];
  cel11.innerHTML = list11[x];
  cel12.innerHTML = `<td><button class="botton" data="${cel1.innerHTML}">Seleccionar</button></td>`
  const btn = document.querySelectorAll('.botton');


  n++;
  x++;
 
  console.log(cel1.innerHTML)
  console.log(cel2.innerHTML)
  console.log(cel3.innerHTML)
  console.log(cel4.innerHTML)
  console.log(cel5.innerHTML)
  console.log(cel6.innerHTML)
  console.log(cel7.innerHTML)
  console.log(cel8.innerHTML)
  console.log(cel9.innerHTML)
  console.log(cel10.innerHTML)


  console.log(new TableCSVExporter(dataTable, false).convertToCSV());
  
  btn.forEach(br => {
    br.addEventListener('click', (e)=>{
      var attribute_value = elem.getAttribute("data");
      console.log(attribute_value)
      
      console.log(e.target)
    })
  })

var chartjson = {
  "title": "",
  "data": [{
    "name": "DIA",
    "score": cel2.innerHTML
  }, {
    "name": "T1",
    "score": cel3.innerHTML
  }, {
    "name": "T2",
    "score": cel4.innerHTML
  }, {
    "name": "T3",
    "score": cel5.innerHTML
  }, {
    "name": "T4",
    "score": cel6.innerHTML
  }, {
    "name": "T5",
    "score": cel7.innerHTML
  }, {
    "name": "T6",
    "score": cel8.innerHTML
  }, {
    "name": "T7",
    "score": cel9.innerHTML
  },  {
    "name": "T8",
    "score": cel10.innerHTML
  },  {
    "name": "T9",
    "score": cel11.innerHTML
  }],
  "xtitle": "Secured Marks",
  "ytitle": "Marks",
  "ymax": 100,
  "ykey": 'score',
  "xkey": "name",
  "prefix": "%"
}

//chart colors
var colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];

//constants
var TROW = 'tr',
  TDATA = 'td';

var chart = document.createElement('div');
//create the chart canvas
var barchart = document.createElement('table');
//create the title row
var titlerow = document.createElement(TROW);
//create the title data
var titledata = document.createElement(TDATA);
//make the colspan to number of records
titledata.setAttribute('colspan', chartjson.data.length + 1);
titledata.setAttribute('class', 'charttitle');
titledata.innerText = chartjson.title;
titlerow.appendChild(titledata);
barchart.appendChild(titlerow);
chart.appendChild(barchart);

//create the bar row
var barrow = document.createElement(TROW);

//lets add data to the chart
for (var i = 0; i < chartjson.data.length; i++) {
  barrow.setAttribute('class', 'bars');
  var prefix = chartjson.prefix || '';
  //create the bar data
  var bardata = document.createElement(TDATA);
  var bar = document.createElement('div');
  bar.setAttribute('class', colors[i]);
  bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.innerText = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.appendChild(bar);
  barrow.appendChild(bardata);
}

//create legends
var legendrow = document.createElement(TROW);
var legend = document.createElement(TDATA);
legend.setAttribute('class', 'legend');
legend.setAttribute('colspan', chartjson.data.length);

//add legend data
for (var i = 0; i < chartjson.data.length; i++) {
  var legbox = document.createElement('span');
  legbox.setAttribute('class', 'legbox');
  var barname = document.createElement('span');
  barname.setAttribute('class', colors[i] + ' xaxisname');
  var bartext = document.createElement('span');
  bartext.innerText = chartjson.data[i][chartjson.xkey];
  legbox.appendChild(barname);
  legbox.appendChild(bartext);
  legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById('chart1').innerHTML = chart.outerHTML;
}





//}





// function promiseSquare(val){
//     return Promise.resolve(val * val);
// }

// function promiseDouble(val){
//     return Promise.resolve(val + val);
// }

// function filterFunction(val){
//     if ( val > 50)
//         return true;
//     else
//         return false;
// }

// var myPromise1 = Promise.resolve(500);
// var myPromise2 = promiseSquare(10);
// var myPromise3 = promiseDouble(20);

// Promise.all([myPromise1,myPromise2,myPromise3]).then(function(val){
//     var result = val.filter(filterFunction);
//     return result;

// }).then(function(val){
//     var temp = 0;
//     for(var i = 0; i < val.length; i++){
//         temp += val[i]
//     }
//     console.log(temp);

// }).catch(function(err){
//     console.log("Error: " + err)
// });