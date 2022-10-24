import React, { FC, useContext } from 'react'
import NextLink from 'next/link';
import { 
    Drawer, 
    Box, 
    List, 
    ListItem, 
    ListItemText, 
    Accordion, 
    AccordionSummary, 
    Typography,
    AccordionDetails,
    IconButton,
    Divider,
    Button,
    Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { UiContext } from '../../context';

interface ItemsMenuProps {
    home: string;
    linkHome: string;
    about: string;
    linkAbout: string;
    contact: string;
    linkContact: string;
    services: string;
    serviceOne: string;
    linkServiceOne: string;
    serviceTwo: string;
    linkServiceTwo: string;
    serviceThree: string;
    linkServiceThree: string;
    btnLanguage: string;
    linkBtnLanguage: string;
  }

export const Sidebar: FC<ItemsMenuProps> = ({
    home, 
    linkHome,
    about,
    linkAbout,
    contact,
    linkContact,
    services,
    serviceOne,
    linkServiceOne,
    serviceTwo,
    linkServiceTwo,
    serviceThree,
    linkServiceThree,
    btnLanguage,
    linkBtnLanguage,
}) => {

    const { sidemenuOpen, closeSideMenu, handleModeTheme, modeTheme } = useContext(UiContext)

    const handleDispatchFunctions = () => {
        handleModeTheme()
        closeSideMenu()
    }

    return (
        <Drawer
            open={sidemenuOpen}
            onClose={ closeSideMenu }
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 1, color:'primary.dark' }}>
                <List>
                    <Grid container alignItems='center'>
                        <Grid item xs={4} sx={{display: 'flex', justifyContent: {xs:'center', sm:'start'}}}>
                            <IconButton onClick={ closeSideMenu } sx={{ color:'text.disabled' }}>
                                <KeyboardArrowRightIcon fontSize='large' />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} sx={{display: {xs: 'flex', sm: 'none'}, justifyContent: 'center'}}>
                            <NextLink href={linkBtnLanguage}>
                                <Button onClick={ closeSideMenu } variant="contained" color="secondary">
                                    {btnLanguage}
                                </Button>
                            </NextLink>
                        </Grid>
                        <Grid item xs={4} sx={{display: {xs: 'flex', sm: 'none'}, justifyContent: 'center'}}>
                            <IconButton color="secondary" onClick={handleDispatchFunctions}>
                            {
                                modeTheme
                                ? <LightModeIcon />
                                : <NightlightIcon />
                            }
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                    <NextLink href={linkHome} passHref>
                        <ListItem button onClick={ closeSideMenu }>
                            <ListItemText primary={home} sx={{color: 'text.disabled'}} />
                        </ListItem>
                    </NextLink>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:"text.disabled"}} />}
                            aria-controls="panella-content"
                            id="panella-header"
                        >
                            <Typography sx={{color: 'text.disabled'}}>{services}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color:'text.disabled' }}>     
                            <Divider />
                            <NextLink href={linkServiceOne} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText primary={serviceOne} />
                                </ListItem>
                            </NextLink>
                            <Divider />
                            <NextLink href={linkServiceTwo} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText primary={serviceTwo} />
                                </ListItem>
                            </NextLink>  
                            <Divider />
                            <NextLink href={linkServiceThree} passHref>
                                <ListItem button onClick={ closeSideMenu }>
                                    <ListItemText primary={serviceThree} />
                                </ListItem>
                            </NextLink>
                            <Divider />
                        </AccordionDetails>
                    </Accordion>
                    <NextLink href={linkAbout} passHref>
                        <ListItem button onClick={ closeSideMenu }>
                            <ListItemText primary={about} sx={{color: 'text.disabled'}} />
                        </ListItem>
                    </NextLink>
                    <Divider />
                    <NextLink href={linkContact} passHref>
                        <ListItem button onClick={ closeSideMenu }>
                            <ListItemText primary={contact} sx={{color: 'text.disabled'}} />
                        </ListItem>
                    </NextLink>
                    <Divider />
                </List>
            </Box>
        </Drawer>
    )
}