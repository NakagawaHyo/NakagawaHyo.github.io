// All javascript code in this project for now is just for demo DON'T RELY ON IT

const random = (max = 100) => {
  return Math.round(Math.random() * max) + 20;
};

const randomData = () => {
  return [
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
  ];
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];


const barChart = new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: months,
    datasets: [
      {
        data: randomData(),
        backgroundColor: '#1e87f0',
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            fontSize: 12,
            fontColor: "#97a4af",
            fontFamily: "Open Sans, sans-serif",
            padding: 10,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
          ticks: {
            fontSize: 12,
            fontColor: "#97a4af",
            fontFamily: "Open Sans, sans-serif",
            padding: 5,
          },
          categoryPercentage: 0.5,
          maxBarThickness: "10",
        },
      ],
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  },
});

const doughnutChart = new Chart(document.getElementById("doughnutChart"), {
  type: "doughnut",
  data: {
    labels: ["Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [random(), random(), random()],
        backgroundColor: [
          '#1e87f0',
          '#32d296',
          '#f0506e',
        ],
        borderWidth: 0,
        weight: 0.5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "bottom",
    },

    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
});

const activeUsersChart = new Chart(
  document.getElementById("activeUsersChart"),
  {
    type: "bar",
    data: {
      labels: [...randomData(), ...randomData()],
      datasets: [
        {
          data: [...randomData(), ...randomData()],
          backgroundColor: '#1e87f0',
          borderWidth: 0,
          categoryPercentage: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            display: false,
            gridLines: false,
          },
        ],
        xAxes: [
          {
            display: false,
            gridLines: false,
          },
        ],
        ticks: {
          padding: 10,
        },
      },
      cornerRadius: 2,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        prefix: "Users",
        bodySpacing: 4,
        footerSpacing: 4,
        hasIndicator: true,
        mode: "index",
        intersect: true,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },
  }
);

const lineChart = new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      {
        data: randomData(),
        fill: false,
        borderColor: '#1e87f0',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: false,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 20,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
        },
      ],
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      hasIndicator: true,
      intersect: false,
    },
  },
})

let randomUserCount = 0;

const usersCount = document.getElementById("usersCount");

const fakeUsersCount = () => {
  randomUserCount = random();
  activeUsersChart.data.datasets[0].data.push(randomUserCount);
  activeUsersChart.data.datasets[0].data.splice(0, 1);
  activeUsersChart.update();
  usersCount.innerText = randomUserCount;
};

setInterval(() => {
  fakeUsersCount();
}, 1000);

$(function(){
  $('#DarkBtn').click(function(){
    $('.uk-card-default').addClass('uk-card-secondary');
    $('.uk-card-secondary').removeClass('uk-card-default');
    $('.uk-background-default').addClass('uk-background-secondary');
    $('.uk-background-secondary').removeClass('uk-background-default');
    $('.uk-text-emphasis').addClass('uk-text-white');
    $('.uk-text-white').removeClass('uk-text-emphasis');
  });
});

$(function(){
  $('#LightBtn').click(function(){
    $('.uk-card-secondary').addClass('uk-card-default');
    $('.uk-card-default').removeClass('uk-card-secondary');
    $('.uk-background-secondary').addClass('uk-background-default');
    $('.uk-background-default').removeClass('uk-background-secondary');
    $('.uk-text-white').addClass('uk-text-emphasis');
    $('.uk-text-emphasis').removeClass('uk-text-white');
  });
});
