import '../scss/index.scss';
import Chart from 'chart.js';

// fetch(`http://localhost:3000/edit`, {
//     method: 'PUT',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         old: {
//             name: "cro"
//         },
//         new: {
//             name: "cro1"
//         }
//     })
// })
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })

// fetch(`http://localhost:3000/add`, {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "cro"
//     })
// })
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })

// fetch(`http://localhost:3000/remove`, {
//     method: "DELETE",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "cro1"
//     })
// })
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })

let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function () {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function () {
            ctx.save();
            ctx.shadowColor = '#E56590';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});


var ctx = document.getElementById('weightChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Yellow', 'Blue', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'KG',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 255, 255, 0)'
            ],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        tooltips: {
            mode: 'point'
        },
        title: {
            display: true,
            text: 'Weight Tracker'
        }
    }
});