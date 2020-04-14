import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchcountries } from '../../api';
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedcountries, setFetchedCountries] = useState([])
    useEffect(()=>{
        const fetchedAPI = async () => {
            setFetchedCountries(await fetchcountries());

        }
        fetchedAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Please Select the Country......!</option>
                {fetchedcountries.map((country, i) => 
                <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;