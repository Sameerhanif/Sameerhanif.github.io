
//hier zijn references naar waar de CTX's naar verwijzen op de HTML pagina

const ctx3 = document.querySelector('.my-chart3')
const ctx2 = document.querySelector('.my-chart2');
const ctx1 = document.querySelector('.my-chart1');

//dit is de fetch van de crypto API
fetch('https://api.coincap.io/v2/assets')
  .then(myData => myData.json())
  .then(textData => showInConsole(textData));


  //hier laat ik zien welke data ik van de fetch wil gebruiken, in dit geval is het dus name en price USD
function showInConsole(json) {
  let labelData = [];
  let graphData = [];
  console.log(json.data);
  for (let i = 0; i < 6; i++) {
    labelData.push(json.data[i].name);
    graphData.push(json.data[i].priceUsd);
  }

  console.log(graphData)
  console.log(labelData);
  createChart(ctx1, 'pie', labelData, graphData)
  createChart(ctx2, 'bar', labelData, graphData)
  //hier laat ik ook zien hoe de ik alles gedisplayed wil hebben. in dit geval wil ik graph data en label data als pie en bar graphs hebben
}
//hier maak ik een chart oftewel graph. dat inlaad in de HTML pagina
function createChart(canvas, type, labels, data) {
  new Chart(canvas, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: 'Crypto Worth',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

  });

}

function getBiggestNumber(numbersArray) {

  let biggestNumber = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    const currentNumber = numbersArray[i];
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }
 return biggestNumber;

}

function ShowBiggestnumber() {
getBiggestNumber(ctx3)


}


const numberArray = [1, 2, 77, 3, 92];
console.log(getBiggestNumber(numberArray));