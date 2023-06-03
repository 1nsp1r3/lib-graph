const Chart = require("../lib/chart-4.3.0.min.js")

let chart = null

class Graph {
  /**
   * Data = [
   *   { label: 2010, value: 10 },
   *   { label: 2011, value: 20 },
   *   { label: 2012, value: 15 },
   *  ]
   */
  constructor(CanvasId, Legend, Data){
    this.canvas = document.getElementById(CanvasId)

    let labels = []
    let values = []

    if (Data){
      labels = Data.map(it => it.label)
      values = Data.map(it => it.value)
    }

    this.options = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: Legend,
          data: values,
        }],
      },
    }
  }

  display(){
    this.chart = new Chart(this.canvas, this.options)
  }

  /**
   * {
   *   label: 2010,
   *   value: 8,
   * }
   */
  addData(Data){
    this.chart.data.labels.push(Data.label);
    this.chart.data.datasets.forEach((dataset) => dataset.data.push(Data.value))
    this.chart.update()
  }
}

/**
 * CommonJS format for NodeJS and Espruino
 */
module.exports = Graph
