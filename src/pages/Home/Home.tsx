
import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel';

function Home() {
    return (
        <>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  xs={12}
                  className= 'aa'>
                    <Box paddingTop={10}className= 'aa' />
                   <Carousel className= 'aa' centerMode centerSlidePercentage={60} autoFocus autoPlay infiniteLoop preventMovementUntilSwipeScrollTolerance swipeable thumbWidth={90} width='100%' >
                <div>
                    <img src='https://i.pinimg.com/originals/c3/a5/b3/c3a5b332f9716abb1c67da38a12595e8.jpg'/>
                    <p className="legend">contrata eu ai po kkkkj</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/46/fc/ea/46fceacf44dcc4ee00501ca2891d9814.jpg" />
                    <p className="legend">vapo</p>
                </div>
                <div>
                    <img src="https://conteudoproduto.magazineluiza.com.br/19/193433700/assets/img/fullhd.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </Grid>
                
            
        </>
    );
}

export default Home;