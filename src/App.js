import React from 'react';
import {Cards,Chart,CountryPicker,Cardes} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/corona.jpg';
import flagImage from './images/flag.jpg';

class App extends React.Component{
    state = {
        data: {},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country:country});
    }

    render(){
        const { data, country }= this.state;
        return(
            <div className={styles.container}>
                 <img className={styles.flag} src={flagImage} alt="Flag"/>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                <Cardes data={data}/>
                <h2 className={styles.texts}>Copyright Act 2002, Developed By Rohit Chapagain</h2>
            </div>
        )
    }

}
export default App;