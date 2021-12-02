// CHART 3
const data3 = {         //data of the yearly activities
        datasets: [{
        data: [88, 12],
        backgroundColor: [
        '#038C8C',
        '#A65380'
        ],
        hoverOffset: 4
    }]
};

// config chart3
const config3 = {
type: 'doughnut',
data: data3,
options: {
    cutout:"80%",
    elements:{
        arc:{
            borderWidth:0
        }
    }
},
}

//render of chart3
const myChart3 = new Chart(
document.getElementById('myChart3'),
config3
);