//var msg;

//function say(message) {
//    console.log("say");
//    alert(message);
//}

//function ask(message) {
//    console.log("ask");
//    return prompt(message, '');
//}

function renderChart(chartJson) {
    if (window.chartObj) {
        console.log('destroy chartObj');
        window.chartObj.destroy();
    }
    console.log("json=" + chartJson);
    var ctx = document.getElementById('myChart');
    window.chartObj = new Chart(ctx, JSON.parse(chartJson));
};

function renderChartTest(food, hobby, carfare, clothes, expenses, education, water, communication, rent, insurance,
    idealFood, idealHobby, idealCarfare, idealClothes, idealExpenses, idealEducation, idealWater, idealCommunication, idealRent, idealInsurance) {
    renderChart(
        JSON.stringify({
            "type": "radar",
            "data": {
                "labels": ["食費", "趣味・娯楽", "交通費", "衣服・美容", "特別費", "教養・教育費", "水道・光熱費", "通信費", "家賃", "税・保険"],
                "datasets": [
                    {
                        "label": "支出",
                        "data": [food, hobby, carfare, clothes, expenses, education, water, communication, rent, insurance],
                        "backgroundColor": [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        "borderColor": [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        "borderWidth": 1
                    },
                    {
                        "label": "理想",
                        "data": [idealFood, idealHobby, idealCarfare, idealClothes, idealExpenses, idealEducation, idealWater, idealCommunication, idealRent, idealInsurance],
                        "backgroundColor": [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        "borderColor": [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        "borderWidth": 1
                    }
                ]
            },

            "options": {
                "scales": {
                    "yAxes": [
                        {
                            "ticks": {
                                "beginAtZero": true
                            }
                        }
                    ]
                }
            }
        })
    );
}


function pieChartTest(food, hobby, carfare, clothes, expenses, education, water, communication, rent, insurance) {
    renderChart(
        JSON.stringify({
            "type": "pie",
            "data": {
                "labels": ["食費", "趣味・娯楽", "交通費", "衣服・美容", "特別費", "教養・教育費", "水道・光熱費", "通信費", "家賃", "税・保険"],
                "datasets": [
                    {
                        "label": "支出",
                        "data": [food, hobby, carfare, clothes, expenses, education, water, communication, rent, insurance],
                        "backgroundColor": [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 0, 0, 0.2)",
                            "rgba(120, 0, 107, 0.2)",
                            "rgba(140, 102, 255, 0.4)",
                            "rgba(0, 255, 226, 0.35)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        "borderColor": [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 0, 0, 1)",
                            "rgba(47, 0, 41, 1",
                            "rgba(120, 0, 107, 1)",
                            "rgba(0, 135, 119, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        "borderWidth": 1
                    },

                ]
            },
            "options": {
                "plugins": {
                    legend: {
                        display: false
                    }
                },
                "scales": {
                    "yAxes": [
                        {
                            "ticks": {
                                "beginAtZero": true
                            }
                        }
                    ]
                }
            }, plugins: [ChartDataLabels],
            options: {
            }
        })
    );
}

