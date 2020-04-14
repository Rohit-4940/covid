import React from 'react';
import { Card, CardContent, Typography, Grid, Divider, ListItemText} from '@material-ui/core';

import styles from './cardes.module.css';
import cx from 'classnames';

const cardes = (props) => {
    console.log(props);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.cardes, styles.infected)}>
                    <ListItemText>Symptoms of COVID-19</ListItemText>
                    <Divider/>
                    <CardContent>
                        <ListItemText>- Fever</ListItemText>
                        <ListItemText>- Dry Cough</ListItemText>
                        <ListItemText>- Sore throat</ListItemText>
                        <ListItemText>- Tiredness</ListItemText>
                        <ListItemText>- Runny nose</ListItemText>
                        <ListItemText>- Difficult while Breathing</ListItemText>
                        <ListItemText>- Aches and pains</ListItemText>
                    </CardContent>
                </Grid>

              
                <Grid item component={Card} xs={12} md={3} className={cx(styles.cardes, styles.infected)}>
                    <ListItemText>Prevention of COVID-19</ListItemText>
                    <Divider/>
                    <CardContent>
                        <ListItemText>- Cover your nose and Mouth while Snezing and Coughing</ListItemText>
                        <ListItemText>- Avoid close contact with people who are infected</ListItemText>
                        <ListItemText>- Make a distance of minimum 3 meter from the people who are Infected</ListItemText>
                        <ListItemText>- Stay home and self isolated from the infeted Person</ListItemText>
                        <ListItemText>- Use shop and sanitize while washing your Hands</ListItemText>
                        <ListItemText>- Wear mask, gloves and glass incase you need to go outside</ListItemText>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.cardes, styles.infected)}>
                    <ListItemText>Some Tips to Fight against COVID-19</ListItemText>
                    <Divider/>
                    <CardContent>
                        <ListItemText>- Stay Healthy</ListItemText>
                        <ListItemText>- Don`t Smoke</ListItemText>
                        <ListItemText>- Eat the food that may help in increase your Immune System</ListItemText>
                        <ListItemText>- Do the Regular Exercise</ListItemText>
                        <ListItemText>- Eat enough food and vegetable that contains vitamin C</ListItemText>
                        <Typography color="primary" variant="h5">- #### Stay Home ####</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
          );
        }

export default cardes;