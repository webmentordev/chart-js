const ctx = document.getElementById('myChart').getContext('2d');

let delayed;
let gradient = ctx.createLinearGradient(0,0,0, 400);
gradient.addColorStop(0, 'rgba(58, 123, 213, 1)');
gradient.addColorStop(1, 'rgba(0, 210, 255, 0.3)');

const config = {
    type: 'line',
    data: {
        labels: [2011, 2012, 2013, 2014, 2015],
        datasets: [
            {
                data: [212, 312, 547, 365, 115],
                label: "Finance Data",
                borderColor: '#fff',
                backgroundColor: gradient,
                fill: true,
                tension: 0.1,
                pointBackgroundColor: "rgb(189, 195, 199, 0.4)"
            },
        ],
    },
    options:{
        responsive: true,
        radius: 5,
        hoverRadius: 12,
        hitRadius: 30,
        animation: {
            onComplete: () =>{
                delayed = true;
            },
            delay: (context) =>{
                let delay = 0;
                if(context.type === 'data' && context.mode === 'default' && !delayed){
                    delay = context.dataIndex * 300 + context.datasetIndex * 300;
                }
                return delay;
            },
        },
        scales: {
            y:{
                ticks: {
                    callback: function(value){
                        return '$ '+value+' M';
                    }
                },
                beginAtZero: true
            },
        }
    }
}

const myChart = new Chart(ctx, config);