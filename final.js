 

let year = [1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 
	1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 
	1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 
	2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
let winning_total = [4243, 4479, 4779, 5199, 5757, 6372, 6860, 7377, 7943, 8821, 9770, 10891, 
	11662, 12106, 12795, 13946, 14634, 15333, 16154, 17164, 18162, 18775, 19208, 20071, 20658, 
	21185, 21980, 23114, 24232, 25697, 27155, 29269, 30645, 30943, 32087, 33749, 35003, 36993, 
	38617, 39202, 38282, 39694, 41960, 43646, 44664, 47445, 50432, 52393, 54214, 56759, 59397]


let year2 = [1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 
	1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 
	1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 
	2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
let winning_total2 = [19711000, 20023181, 20345575, 20584794, 20867737, 21172548,
	21536715, 21934505, 22350247, 22838960, 23255069, 23800800,
	24285933, 24820007, 25360023, 25844397, 26441107, 27102238,
	27777160, 28464250, 29218165, 29959515, 30470736, 30974659,
	31274928, 31484435, 31696582, 32018834, 32486010, 32987675,
	33499204, 33987977, 34479458, 34871843, 35253159, 35574576,
	35827943, 36021202, 36250311, 36604337, 36961229, 37319502,
	37638369, 37948800, 38260787, 38596972, 38918045, 39167117,
	39358497, 39461588, 39512223]


function plotTotalColumn() {
	Highcharts.chart("income", {
		chart: {
			type: 'line',
			zoomType: 'x,y',
			scrollablePlotArea: {
			minWidth: 600,
			scrollPositionX: 1
			}
		},
		title: {text: 'Average Income in California'},
		subtitle: {text: 'From 1969 - 2019'},
		xAxis: {
			title: { text: "Year" },
			categories: year,
			crosshair: {
				label: {
					padding: 8
				}
			}
			
		},
		yAxis: {
			title: {
				text: 'Average Income ($)'
			},
			crosshair: {
                label: {
					enabled: true,
					format:'{value:.0f}'
                }
            },
		},
		tooltip: {formatter: function () {return "Average Income in " + this.x + ": $" + (this.y/1000).toFixed(2)+ "K"}, },
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		series: [{
			name: 'Income',
			data: winning_total,
			showInLegend: false
		}]
	});
}

function plotTotalColumn2() {
	Highcharts.chart("pop", {
		chart: {
			type: 'line',
			zoomType: 'x,y',
			scrollablePlotArea: {
			minWidth: 600,
			scrollPositionX: 1
			}
		},
		title: {text: 'Total Population in California'},
		subtitle: {text: 'From 1969 - 2019'},
		xAxis: {
			title: { text: "Year" },
			categories: year,
			crosshair: {
				label: {
					padding: 8
				}
			}
			
		},
		yAxis: {
			title: {
				text: 'Total Population'
			},
			crosshair: {
                label: {
					enabled: true,
					format:'{value:.0f}'
                }
            },
		},
		tooltip: {formatter: function () {return "Total Population in " + this.x + " is: " + (this.y/1000000).toFixed(2) + "M"}, },
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		series: [{
			name: 'Population',
			data: winning_total2,
			showInLegend: false
		}]
	});
}




function plotThirdPie() {
	Highcharts.chart('pie', {
		chart: {
			plotBackgroundColor: null,
        	plotBorderWidth: null,
        	plotShadow: false,
        	type: 'pie',	
		},
        title: {text: 'Presidential Election Votes in California'},
        subtitle: {text: 'In 2020 Election'},
		plotOptions: {
			pie: {
				showInLegend: true,
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				}
			}
		},
		series: [{
			name: '',
			data: [
				{   name: 'REP',
					y: 6005961,
					color: "red"
				},
				{   name: 'DEM',
					y: 11109764,
					color: "blue"
				}, {name: "OTHER", y: 268910, color: "rgb(170, 204, 179)"}
			]
		}]
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var scatter_income
	scatter_income = Highcharts.chart("income_scatter", {
		chart: {
			plotBackgroundColor: null, 






			type: 'scatter', 
			zoomType: 'xy'
		},
		title: {
			text: 'Average Income vs. Percentage of Democratic Votes'
		},
		subtitle: {
			text: "In Presidential Election 2020 in California"
		},
		xAxis: {
			title: {
				enabled: true,
				text: "Average Income"
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: "Percentage of Democratic Votes (%)"
			}
		},
		legend: {
			enabled: true, 
			floating: false, 
			
			
			
			
			
			
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
					pointFormat: 'Average Income {point.x} dollars, {point.y}% Democratic Votes'
				}
			}
		},
		series: [{




			name: "Democratic Counties",
			color: 'rgba(119, 152, 191, .9)',
			data: [[45487, 53.99], [49654, 67.28], [40447, 62.45], [60513, 50.08], [44259, 53.24], [65094, 72.56], [81171, 81.92], [141735, 83.9], [52976, 68.45],
			[41077, 55.43], [53500, 61.49], [59838, 71.11], [75717, 70.67], [63542, 57.59], [72155, 66.11], [71711, 54.61], [42418, 54.06], [55266, 62.95],
			[55261, 62.47], [42043, 55.45], [63729, 61.65], [139405, 87.02], [47139, 57.09], [61004, 56.7], [134107, 79.41], [66076, 66.41], [115997, 74.22],

			[71592, 80.92], [53505, 65.51], [66700, 76.38], [47860, 50.86], [45742, 50.4], [64715, 60.78], [56123, 71.24], [85324, 73.14]]
	
		}, {
			name: "Republican Counties",
			color: 'rgba(223, 83, 83, .9)',





			data: [[49194, 36.13], [41843, 44.78], [39433, 43.72], [38130, 23.78], [41267, 44.09], [56354, 40.73], [51088, 27.0], [68936, 46.6], [55910, 41.44],
			[45920, 37.51], [48438, 33.04], [47245, 39.0], [48021, 41.92], [47605, 41.61], [43268, 31.77], [43471, 47.21], [42845, 46.01], [48841, 40.37],
			[43536, 38.85], [51131, 37.82], [51342, 41.53], [38445, 41.99], [69895, 45.5]]		
			}]
		})
	
	
	
	
	
	
	
	var scatter_pop
	scatter_pop = Highcharts.chart("pop_scatter", {
		chart: {
			plotBackgroundColor: null, 






			type: 'scatter', 
			zoomType: 'xy'
		},
		title: {
			text: 'Population vs. Percentage of Democratic Votes'
		},
		subtitle: {
			text: "in Counties with Population <= 200K"
		},
		xAxis: {
			title: {
				enabled: true,
				text: "Population in County"
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true, min: 0, max: 200000
		},
		yAxis: {
			title: {
				text: "Percentage of Democratic Votes (%)"
			} 
		},
		legend: {
			enabled: true, 
			floating: false, 
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
					pointFormat: 'Total Population: {point.x}, {point.y}% Democratic Votes'
				}
			}
		},
		series: [{
			name: "Democratic Counties",

			color: 'rgba(119, 152, 191, .9)',





			data: [[135558, 67.28], [181215, 62.45], [18039, 50.08], [64386, 53.24], [86749, 68.45],
			[10000, 61.49], [137744, 70.67], [99755, 57.59], [1129, 66.11],
			[62808, 62.47],
			]
	
		}, {
			name: "Republican Counties",
			color: 'rgba(223, 83, 83, .9)',





			data: [[49194, 36.13], [41843, 44.78], [39433, 43.72], [38130, 23.78], [41267, 44.09], [56354, 40.73], [51088, 27.0], [68936, 46.6], [55910, 41.44],
			[45920, 37.51], [48438, 33.04], [47245, 39.0], [48021, 41.92], [47605, 41.61], [43268, 31.77], [43471, 47.21], [42845, 46.01], [48841, 40.37],
			[43536, 38.85], [51131, 37.82], [51342, 41.53], [38445, 41.99], [69895, 45.5]]		
			}]
		}
	)



var scatter_pop_big
scatter_pop_big = Highcharts.chart("pop_scatter_big", {
		chart: {
			plotBackgroundColor: null, 






			type: 'scatter', 
			zoomType: 'xy'
		},
		title: {
			text: 'Population vs. Percentage of Democratic Votes'
		},
		subtitle: {
			text: "in Counties with Population > 200k"
		},
		xAxis: {
			title: {
				enabled: true,
				text: "Population in County"
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: "Percentage of Democratic Votes (%)"
			} 
		},
		legend: {
			enabled: true, floating: false, 
			
			
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
					pointFormat: 'Total Population: {point.x}, {point.y}% Democratic Votes'
				}
			}
		},
		series: [{
			name: "Democratic Counties",

			color: 'rgba(119, 152, 191, .9)',





			data: [[999101, 53.99], [10039107, 72.56], [1671329, 81.92], [258826, 83.9],
			[277680, 55.43], [434061, 71.11], [3175692, 54.61], [2470546, 54.06], [1552058, 62.95],
			[2180085, 55.45], [3338330, 61.65], [881549, 87.02], [762148, 57.09], [283111, 56.7], [766573, 79.41], [446499, 66.41], [1927852, 74.22],
			[273213, 80.92], [447643, 65.51], [494336, 76.38], [219186, 50.86], [550660, 50.4], [846006, 60.78], [220500, 71.24], [1153526, 73.14]]
	
		}]
	
		}
	)}
function init() { 
	plotTotalColumn();
	plotTotalColumn2();
    plotThirdPie();

	
	
	
	
	
	
	
}

document.addEventListener('DOMContentLoaded', init, false);




