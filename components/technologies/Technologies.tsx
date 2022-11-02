import {FC} from 'react'
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

import TecnologyHtml from '../../public/images/tecnology-html.webp'
import TecnologyCss from '../../public/images/tecnology-css.webp'
import TecnologyJavascript from '../../public/images/tecnology-javascript.webp'
import TecnologyReact from '../../public/images/tecnology-react.webp'
import TecnologyNextJS from '../../public/images/tecnology-nextjs.webp'
import TecnologyMUI from '../../public/images/tecnology-mui.webp'
import TecnologyNodeJS from '../../public/images/tecnology-nodejs.webp'
import TecnologyExpressJS from '../../public/images/tecnology-expressjs.webp'
import TecnologyMongoDB from '../../public/images/tecnology-mongodb.webp'
import TecnologyFigma from '../../public/images/tecnology-figma.webp'
import TecnologyPhotoshop from '../../public/images/tecnology-photoshop.webp'
import TecnologyIlustrator from '../../public/images/tecnology-ilustrator.webp'

interface TechnologiesProps {
    technologiesTitle: string;
    technologiesSubTitle: string;
}

export const Technologies: FC<TechnologiesProps> = ({technologiesTitle, technologiesSubTitle}) => {
  return (
    <Grid container sx={{justifyContent:{md:'center'}, px: {xs: 3, sm: 10, md:10}}} spacing={2}>
        <Grid item xs={12}>
            <Typography 
                component='h5' 
                sx={{
                    fontSize: {
                        xs: '1.4rem', 
                        sm: '1.5rem', 
                        md: '1.7rem', 
                        lg: '1.8rem',
                        xl: '1.9rem'
                    }, 
                    color:'text.disabled', 
                    textAlign:{xs: 'center', lg: 'left'}
                }}
            >
                    {technologiesTitle}
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography 
                component='p' 
                sx={{
                    fontSize: {
                        xs: '0.8rem',
                        sm: '0.9rem',
                        md: '1rem'
                    }, 
                    color:'text.disabled', 
                    textAlign:{xs: 'center', lg: 'left'}
                }}
            >
                {technologiesSubTitle}
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyHtml} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                HTML5
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyCss} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                CSS3
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyJavascript} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                JAVASCRIPT
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyReact} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                REACT
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyNextJS} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1}, 
                    fontSize: '0.9rem'
                }}
            >
                NEXT JS
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyMUI} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                MATERIAL UI
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyNodeJS} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                NODE JS
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyExpressJS} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                EXPRESS JS
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyMongoDB} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                MONGO DB
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyFigma} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                FIGMA
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyPhotoshop} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                PHOTOSHOP
            </Typography>
        </Grid>
        <Grid item xs={3} sm={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={TecnologyIlustrator} width={60} height={60} />
            <Typography 
                component="span" 
                sx={{
                    display: {xs: 'none', lg: 'block'}, 
                    color:'text.disabled', 
                    ml: {md:1},
                    fontSize: '0.9rem'
                }}
            >
                ILUSTRATOR
            </Typography>
        </Grid>
    </Grid>
  )
}
