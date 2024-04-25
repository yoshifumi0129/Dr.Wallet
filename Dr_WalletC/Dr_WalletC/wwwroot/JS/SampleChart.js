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

function renderChartTest(red,blue,yellow,green,purple,orange) {
    renderChart(
        JSON.stringify({
            "type": "radar",
            "data": {
                "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                "datasets": [
                    {
                        "label": "支出",
                        "data": [red, blue, yellow, green, purple, orange],
                        "backgroundColor": [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        "borderColor": [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        "borderWidth": 1
                    },
                    {
                        "label": "理想",
                        "data": [14, 14, 14, 14, 14, 14],
                        "backgroundColor": [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        "borderColor": [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
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


function pieChartTest(food, hobby, carfare, clothes, expenses, education) {
    renderChart(
        JSON.stringify({
            "type": "pie",
            "data": {
                "labels": ["食費", "趣味・娯楽", "交通費", "衣服・美容", "特別費", "教養・教育費"],
                "datasets": [
                    {
                        "label": "支出",
                        "data": [food, hobby, carfare, clothes, expenses, education],
                        "backgroundColor": [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        "borderColor": [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        "borderWidth": 1
                    },

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

