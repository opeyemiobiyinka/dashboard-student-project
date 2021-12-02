const ctx = document.getElementById('myChart1').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {         //data of the daily activities
        datasets: [{
            data: [19, 71],
            backgroundColor: [
            '#038C8C',
            '#A65380'   
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutout:"80%",
    }
});