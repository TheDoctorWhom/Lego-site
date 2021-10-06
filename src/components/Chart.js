import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Chart.css';


const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        // data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
    },],
};



const Chart = ({ videos }) => {


    //Make labels from themes of object
    // console.log(videos)
    const themes = new Set(videos.flatMap((videos) => {
        return (videos.THEME.toString().toLowerCase().split(' '))
    }));
    // console.log(Array.from(themes));
    data.labels = Array.from(themes);

    //Count the number of each theme

    const counts = data.labels.map(label => {
        const themeList= videos.map(video => video.THEME);
        const count = themeList.filter(video => video.includes(label))
      return (count.length)
    });
    //set counts to chart
    data.datasets[0].data=counts;

    return (
      <>
        <div className='chart header'>
      <h1 className='title'>Lego Search Chart</h1>
    </div> <
        Doughnut data = { data }
        />
        </>
    )
};

export default Chart;
