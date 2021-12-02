 //CHART2
 const data2 = {     //data of the monthly activities
    datasets: [{
        data: [80, 20],
        backgroundColor: [
        '#038C8C',
        '#A65380'
        ],
        hoverOffset: 4
    }]
};
// config chart2
const config2 = {
type: 'doughnut',
data: data2,
options: {
    cutout:"80%",
    elements:{
        arc:{
            borderWidth:0
        }
    }
},
}

//render of chart2
const myChart2 = new Chart(
document.getElementById('myChart2'),
config2
);