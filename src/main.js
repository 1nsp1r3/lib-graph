const Chart = require("chartjs")

let chart = null

/**
 * Data = [
 *   { label: 2010, value: 10 },
 *   { label: 2011, value: 20 },
 *   { label: 2012, value: 15 },
 *  ]
 */
const init = function(CanvasId, Legend, Data){
  const canvas = document.getElementById(CanvasId)

  let labels = []
  let values = []

  if (Data){
    labels = Data.map(it => it.label)
    values = Data.map(it => it.value)
  }

  const options = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: Legend,
        data: values,
      }],
    },
  }
  chart = new Chart(canvas, options)
}

/**
 * {
 *   label: 2010,
 *   value: 8,
 * }
 */
const addData = function(Data){
  chart.data.labels.push(Data.label);
  chart.data.datasets.forEach((dataset) => dataset.data.push(Data.value))
  chart.update()
}

/**
 * CommonJS format for NodeJS and Espruino
 */
module.exports = {
  init,
  addData,
}
