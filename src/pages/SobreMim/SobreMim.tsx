import { Box, Grid, Typography } from "@material-ui/core"
import './SobreMim.css';


function SobreMim() {
    

    return (
        <>
           <Grid className="fundo">
                <Grid container xs={12} direction="row" justifyContent="center">
                    <Grid xs={3}>
                        <img src="https://www.imagensempng.com.br/wp-content/uploads/2021/07/01-7.png"  className="nuvem" />
                    </Grid>
                    <Grid xs={6}>
                        <Typography className="texto3">SOBRE MIM</Typography>
                    </Grid>
                    <Grid xs={3}>
                        <img src="https://www.imagensempng.com.br/wp-content/uploads/2021/07/01-7.png" className="nuvem2" />
                    </Grid>
                </Grid>
            
            <Grid container direction="row" xs={12} alignItems="stretch" spacing={2}>
                <Grid xs={4} md={4}>
                    <Typography className="texto2">Eu</Typography>
                </Grid>
                <Grid xs={6} md={3}>
                    <Typography className="texto2">Meus Gostos</Typography>
                </Grid>
                <Grid md={4} >
                    <Typography className="texto2">Experiencia</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} alignItems="center">

                <Grid xs={5} alignItems="center" spacing={1}>
                    <Box >
                        <img src=".\src\pages\SobreMim\sdsd.png" className='foto' />
                    </Box>
                    <Box >
                        <img src="https://cdn141.picsart.com/310566252115211.png" className="neon" />
                    </Box>
                    <Box paddingTop={-5}>
                        <Typography className="txt1" >Oi meu nome é Gustavo, Sou Desenvolverdor Java Web Full Stack, com conhecimentos
                            nas tecnologias Springboot para JavaScript, MySql,Html, Css e React, ja cursei 2 Semestre
                            de Analise e desenvolvimento de sistemas, tenho foco sempre em metodologias ageis,
                            me considero uma pessoa com bastantes softskilks com destaque para criatividade e proatividade.
                            Meus interesses variam muito desde Filmes, digasse de passagem que meus favoritos são Interstellar
                            e Tudo em todo Lugar Ao Mesmo Tempo, a sair para socializar. Todos os dias estou dando meu maximo para
                            estudar e cada dia mais me aprofundar mais na tecnologias que mais me dou bem.
                        </Typography>
                    </Box>
                    <Box >
                        <img src="https://cdn141.picsart.com/310566252115211.png" className="neon" />
                    </Box>

                </Grid>
                <Grid xs={2} direction='column'>

                    <Box>
                        <img src="https://thumbs.gfycat.com/WeepyActiveHornet-max-1mb.gif" alt="" className="gif2" />
                    </Box>
                    <Box>
                        <img src="https://31.media.tumblr.com/546979a7a7b9eadcaff5dbdae13a9188/tumblr_midx2qjgQQ1r9lsipo1_500.gif" className="gif2" />
                    </Box>
                    <Box>
                        <img src="https://media.giphy.com/media/SVCSsoKU5v6ZJLk07n/giphy.gif" className="gif2" />
                    </Box>
                </Grid>
                <Grid xs={2} direction='column'>
                    <Box>
                        <img src="https://i.pinimg.com/originals/d8/4f/83/d84f83fa075d09fed4a559cb0015a68b.gif" className="gif2" />
                    </Box>
                    <Box>
                        <img src="https://media1.giphy.com/media/BdghqxNFV4efm/200.gif" className="gif2" />
                    </Box>
                    <Box>
                        <img src="https://www.reactiongifs.us/wp-content/uploads/2015/07/obvious_sherlock_holmes.gif" className="gif2" />
                    </Box>

                </Grid>
                <Grid xs={3}>

                    <img src=".\src\pages\SobreMim\App-list.gif" className="gif" />

                </Grid>

            </Grid>
            </Grid>
        </>
    )

}
export default SobreMim