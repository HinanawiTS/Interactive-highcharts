 

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
		title: {text: 'Average Income In California'},
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
		title: {text: 'Total Population In California'},
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
        title: {text: 'California Political Tendency Rate'},
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
				}
			]
		}]
	});
}



function init() {
	plotTotalColumn();
	plotTotalColumn2();
    plotThirdPie();

}

document.addEventListener('DOMContentLoaded', init, false);



