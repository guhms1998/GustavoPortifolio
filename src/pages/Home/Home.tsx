
import React from 'react';
import {Typography, Box, Grid, Button, IconButton, Link} from '@material-ui/core';
import './Home.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel';
import { Fingerprint } from '@material-ui/icons';
import LinkedIn from '@material-ui/icons/LinkedIn';


function Home (){
    return(
        <Grid container xs={12} 
        justifyContent="flex-start"
        alignItems="center" >
            <Grid container xs={5}justifyContent="flex-end" >
                <Box >
                    <Typography className='texto1'> Oi, Bem vindo ao meu site de</Typography>
                    <Typography className='texto1'>  Portifolio, Meu nome é</Typography>            
                    <Typography className='texto2'>Gustavo Henrique</Typography>
                        <Box className="icon">
                        <IconButton aria-label="fingerprint" color="secondary" >
                        <Link href="https://drive.google.com/file/d/1y8dP9sXd_HFDBjxGVKcYH62ZcHOSOa__/view?usp=sharing" color="secondary">
                            <Fingerprint />
                            <Typography>Meu Curriculo</Typography>      
                            </Link>                    
                        </IconButton>
                        <IconButton aria-label="fingerprint" color="primary" >
                            <Link href="https://www.linkedin.com/in/gustavohms1998/">
                            <LinkedIn />
                            <Typography>Meu Linkedin</Typography>
                            </Link>
                        </IconButton>
                        </Box>
                </Box>
            </Grid>
            <Grid xs={1} />
            <Grid xs={5}>
                <img src='https://imgv3.fotor.com/images/side/How-to-student-ID-card.png'   width={'100%'} height={'100%'}/>
            </Grid>
        </Grid>
    )

}

























// function Home() {
//     return (
//         <>
//             <Grid container
//                   direction="column"
//                   justifyContent="center"
//                   alignItems="center"
//                   xs={12}
//                   className= 'aa'>
//                     <Box paddingTop={10}className= 'aa' />
//                    <Carousel className= 'aa' centerMode centerSlidePercentage={60} autoFocus autoPlay infiniteLoop preventMovementUntilSwipeScrollTolerance swipeable thumbWidth={90} width='100%' >
//                 <div>
//                     <img src='https://i.pinimg.com/originals/c3/a5/b3/c3a5b332f9716abb1c67da38a12595e8.jpg'/>
//                     <p className="legend">contrata eu ai po kkkkj</p>
//                 </div>
//                 <div>
//                     <img src="https://i.pinimg.com/originals/46/fc/ea/46fceacf44dcc4ee00501ca2891d9814.jpg" />
//                     <p className="legend">vapo</p>
//                 </div>
//                 <div>
//                     <img src="https://conteudoproduto.magazineluiza.com.br/19/193433700/assets/img/fullhd.jpg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//             </Grid>
                
            
//         </>
//     );
// }

export default Home;