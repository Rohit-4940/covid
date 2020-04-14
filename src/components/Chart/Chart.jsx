import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';
import { green } from '@material-ui/core/colors';

const Chart = ( {data: {confirmed, deaths, recovered}, country} ) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());

        }

        fetchAPI();
    }, []);
    const LineChart = (
        dailyData.length
        ? (<Line 
         data={{
             labels: dailyData.map(( {date} ) => date),
             datasets: [{
                 data: dailyData.map(( {confirmed} ) => confirmed),
                 label: 'Infected',
                 borderColor: 'green',
                 fill: true,
             },
             {data: dailyData.map(( {deaths} ) => deaths),
             label: 'Death',
             borderColor: 'red',
             backgroundColor: 'rgba(255, 0, 0, 0.5)',
             fill: true,
            }],
         }}     
        />) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar
             data={{
                labels: ['Infected', 'Recovered', 'Death'],
                datasets:[{
                    label: 'people',
                    backgroundColor: ['green', 'yellow', 'red'],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
             }}
             options={{
                 legend: {display:false},
                 title: {display:true, text:`Current Situation in ${country}`},
             }}
            />
        ):null
    )


    return (
        <div className={styles.container}>
            {country ? barChart : LineChart}
        </div>
    )
}
export default Chart;