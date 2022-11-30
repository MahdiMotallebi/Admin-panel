//Mui
import { useTheme } from '@mui/material';
import { tokens } from '../theme/themeConfig';

//Chartjs
import Chart from 'react-apexcharts';

type Options = {
  dataLabels: {};
  plotOptions: {};
  legend: {};
  labels: string[];
  stroke: {};
  states: {};
  colors: string[];
  tooltip?: {};
};

type Total = {
  globals: {
    seriesTotals: number[];
  };
};

export const CircleChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const series = [30, 40, 30];
  const options: Options = {
    labels: ['2022', '2020', '2019'],
    legend: {
      show: false
    },

    dataLabels: {
      enabled: false
    },
    colors: [
      `${colors.error[500]}`,
      `${colors.success[500]}`,
      `${colors.info[500]}`
    ],

    stroke: {
      width: 7,
      colors: [`${theme.palette.background['paper']}`]
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none'
        }
      }
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: '65%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: false
            },
            value: {
              show: true,
              fontSize: '1rem',
              fontWeight: 'bold',
              color: `${theme.palette.text.primary}`,

              formatter: function (val: string) {
                return `${val}%`;
              }
            },
            total: {
              show: true,
              showAlways: false,
              label: 'Total',
              fontFamily: 'Titillium web',
              color: `${theme.palette.text.primary}`,

              formatter: function (w: Total) {
                return (
                  w.globals.seriesTotals.reduce((a: number, b: number) => {
                    return a + b;
                  }, 0) + '%'
                );
              }
            }
          }
        }
      }
    }
  };

  return <Chart type="donut" width={200} series={series} options={options} />;
};

export const SemiDonutChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const series = [13, 18, 18, 24, 16];
  const options: Options = {
    labels: ['usa', 'india', 'canada', 'japan', 'france'],
    tooltip: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'bottom',
      labels: {}
    },

    dataLabels: {
      enabled: false
    },

    colors: [
      `${colors.warning[400]}`,
      `${colors.warning[500]}`,
      `${colors.warning[600]}`,
      `${colors.warning[700]}`,
      `${colors.warning[800]}`
    ],

    stroke: {
      width: 5,
      colors: [`${theme.palette.background['paper']}`]
    },

    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none'
        }
      }
    },
    plotOptions: {
      pie: {
        startAngle: -130,
        endAngle: 130,
        donut: {
          size: '80%',
          background: 'none',

          labels: {
            show: true,
            name: {
              offsetY: 20,
              show: true,
              color: `${theme.palette.text.secondary}`
            },

            total: {
              show: true,
              label: '2022',
              fontFamily: 'Titillium web',
              fontSize: '1rem',
              color: `${theme.palette.text.secondary}`,

              formatter: function (w: Total) {
                return (
                  w.globals.seriesTotals.reduce((a: number, b: number) => {
                    return a + b;
                  }, 0) + 'k'
                );
              }
            },
            value: {
              show: true,
              fontSize: '2rem',
              fontFamily: 'Titillium web',
              color: `${theme.palette.text.primary}`,
              offsetY: -20,

              formatter: function (val: string) {
                return `${val}k`;
              }
            }
          }
        }
      }
    }
  };

  return <Chart type="donut" height={300} series={series} options={options} />;
};

type TimeLineOptions = {
  plotOptions: {};
  xaxis: {};
  yaxis: {};
  stroke: {};
  fill: {};
  grid: {};
  tooltip: {};
  chart: {};
  dataLabels: {};
  states: {};
};
export const TimeLine = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const series = [
    {
      data: [
        {
          x: 'Catherine',
          y: [
            new Date('2019-01-10').getTime(),
            new Date('2019-04-28').getTime()
          ],
          fillColor: `${colors.info[500]}`,
          name: 'development app'
        },
        {
          x: 'Janelle',
          y: [
            new Date('2019-04-04').getTime(),
            new Date('2019-06-08').getTime()
          ],
          fillColor: `${colors.success[500]}`,
          name: 'ui design'
        },
        {
          x: 'Wellington',
          y: [
            new Date('2019-04-08').getTime(),
            new Date('2019-07-12').getTime()
          ],
          fillColor: '#858585',
          name: 'ios application'
        },
        {
          x: 'Blake',
          y: [
            new Date('2019-01-12').getTime(),
            new Date('2019-06-18').getTime()
          ],
          fillColor: `${colors.error[500]}`,
          name: 'web app wireframing'
        },
        {
          x: 'Quinn',
          y: [
            new Date('2019-04-12').getTime(),
            new Date('2019-07-25').getTime()
          ],
          fillColor: `${colors.warning[500]}`,
          name: 'prototyping'
        }
      ]
    }
  ];
  var options: TimeLineOptions = {
    chart: {
      toolbar: {
        show: false
      }
    },

    dataLabels: {
      enabled: true,
      textAnchor: 'middle',
      offsetY: 6,

      formatter: function (
        val: number,
        opt: {
          w: { config: { series: { [x: string]: any } } };
          seriesIndex: string | number;
          dataPointIndex: string | number;
        }
      ) {
        return opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .name;
      },
      style: {
        fontSize: '.8rem',
        fontFamily: 'Titillium Web, sans-serif'
      }
    },

    plotOptions: {
      bar: {
        barHeight: '65%',
        horizontal: true,
        borderRadius: 10,
        // distributed: true,
        dataLabels: {
          position: 'center'
        }
      }
    },
    xaxis: {
      type: 'datetime',

      min: new Date('2019-01-01').getTime(),
      max: new Date('2019-08-20').getTime(),
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          fontSize: '.7rem',
          fontFamily: 'Titillium Web, sans-serif',
          colors: `${theme.palette.text.secondary}`
        },
        datetimeFormatter: {
          month: 'MMM'
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -60,
        style: {
          fontSize: '.8rem',
          fontFamily: 'Titillium Web, sans-serif',
          colors: `${theme.palette.text.primary}`
        }
      }
    },
    stroke: {
      width: 0
    },
    fill: {
      type: 'solid',
      opacity: 1
    },
    grid: {
      strokeDashArray: 10,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    tooltip: {
      enabled: false
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      }
    }
  };

  return (
    <Chart type="rangeBar" height={250} series={series} options={options} />
  );
};
