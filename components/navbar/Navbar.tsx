import React, { FC, useState, MouseEvent, useContext } from 'react'
import NextLink from 'next/link';
import Image from 'next/image';
import { 
  AppBar, 
  Toolbar, 
  Grid, 
  Typography, 
  Button, 
  Stack,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  Container
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import MenuIcon from '@mui/icons-material/Menu';
import { UiContext } from '../../context';

import ImageEnglish from '../../public/images/english.webp'
import ImageSpanish from '../../public/images/spanish.webp'

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
  linkBtnLanguage: string;
}

export const Navbar: FC<ItemsMenuProps> = ({
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
  linkBtnLanguage,
}) => {

  const { pathname, openSideMenu, handleModeTheme, modeTheme } = useContext( UiContext )
  
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar 
      sx={{ 
        backgroundColor: 'primary.dark', 
        height:{xs: '80px', sm: '100px', md:'120px', lg:'140px', xl: '160px'},
        display: {xs: 'flex'}, 
        justifyContent: {xs:'center'}, 
        alignItems: {xs:'space-between'}
      }}
      >
      <Toolbar sx={{px: {xl: 10}}}>
          <Grid container>
            <Grid item xs={10} sm={9} md={4}>
              <NextLink href={linkHome} passHref>
                <Typography  
                  component="h2" 
                  sx={{
                    cursor: 'pointer', 
                    fontSize: {xs:'1.4rem', sm:'1.6rem', md:'1.8rem', lg: '2rem', xl: '2.2rem'}
                  }}
                >
                  Aspiazu Tecnology
                </Typography>
              </NextLink>
            </Grid>
            <Grid 
              item 
              md={6} 
              sx={{ 
                display: { xs: 'none', md:'flex' }, 
                justifyContent: 'end',
                alignItems: 'center'
              }}>
              <Stack spacing={1} direction="row">
                <NextLink href={linkHome} passHref>
                  <Button variant={ pathname === linkHome ? "contained" : "text" } color="secondary">
                  <Typography
                    variant="subtitle2" 
                    sx={{ 
                      color: '#eceff1', 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      fontSize: {md:'0.8rem', lg:'1rem', xl: '1.2rem'}
                    }}>
                    {home}
                  </Typography>
                  </Button>
                </NextLink>
                {/* TODO: colocar una animacion que cambie el icono si se abre el submenu */}
                <Button
                  id="services-botton"
                  aria-controls={ open ? 'services-botton' : undefined }
                  aria-haspopup="true"
                  aria-expanded={ open ? 'true' : undefined }
                  onClick={ handleClick }
                  variant={ 
                    pathname === linkServiceOne 
                    || pathname === linkServiceTwo
                    || pathname === linkServiceThree ? "contained" : "text" 
                  }
                  color="secondary"
                >
                  <Typography
                    variant="subtitle2" 
                    sx={{ 
                      color: '#eceff1', 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      fontSize: {md:'0.8rem', lg:'1rem', xl: '1.2rem'}
                    }}>
                    {services}
                  <KeyboardArrowDownIcon />
                  </Typography>
                </Button>
                <Menu 
                  id="services-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={ handleClose }
                  MenuListProps={{
                    'aria-labelledby': 'services-menu',
                  }}
                >
                  <NextLink href={linkServiceOne} passHref>
                    <MenuItem 
                      onClick={ handleClose } 
                      sx={{ 
                        color:'text.disabled',
                        fontSize: {md:'0.8rem', lg:'1rem', xl: '1.2rem'}
                      }}
                    >
                      {serviceOne}
                    </MenuItem>
                  </NextLink>
                  <Divider />
                  <NextLink href={linkServiceTwo} passHref>
                    <MenuItem 
                      onClick={ handleClose } 
                      sx={{ 
                        color: 'text.disabled',
                        fontSize: {md:'0.8rem', lg:'1rem', xl: '1.2rem'} 
                      }}
                    >
                      {serviceTwo}
                    </MenuItem>
                  </NextLink>
                  <Divider />
                  <NextLink href={linkServiceThree} passHref>
                    <MenuItem 
                      onClick={ handleClose } 
                      sx={{ 
                        color: 'text.disabled',
                        fontSize: {md:'0.8rem', lg:'1rem', xl: '1.2rem'} 
                      }}
                    >
                      {serviceThree}
                    </MenuItem>
                  </NextLink>
                </Menu>
                <NextLink href={linkAbout} passHref>
                  <Button variant={ pathname === linkAbout ? "contained" : "text" } color="secondary">
                    <Typography
                      variant="subtitle2" 
                      sx={{ 
                        color: '#eceff1', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        fontSize: {md:'0.8rem', lg:'1rem', xl: '1.2rem'}  
                      }}>
                      {about}
                    </Typography>
                  </Button>
                </NextLink>
                <NextLink href={linkContact} passHref>
                  <Button variant={ pathname === linkContact ? "contained" : "text" } color="secondary">
                    <Typography
                      variant="subtitle2" 
                      sx={{ 
                        color: '#eceff1', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        fontSize: {md:'0.8rem', lg:'1rem', xl: '1.2rem'}
                      }}>
                      {contact}
                    </Typography>
                  </Button>
                </NextLink>
              </Stack>
            </Grid>
            <Grid item sm={1} sx={{ display: {xs: 'none', sm: 'flex'}, justifyContent: 'end' }}>
              <NextLink href={linkBtnLanguage}>
                <Button color="secondary">
                  {
                    pathname.includes('/es') 
                    ? <Image src={ImageEnglish} width={50} height={30} />
                    : <Image src={ImageSpanish} width={50} height={30} />
                  }
                </Button>
              </NextLink>
            </Grid>
            <Grid item sm={1} sx={{ display: {xs: 'none', sm: 'flex'}, justifyContent: 'end' }}>
              <IconButton color="secondary" onClick={handleModeTheme}>
                {
                  modeTheme
                    ? <LightModeIcon sx={{fontSize: {sm: '1.9rem', md: '2rem'}}} />
                    : <NightlightIcon sx={{fontSize: {sm: '1.9rem', md: '2rem'}}} />
                }
              </IconButton>
            </Grid>
            <Grid item xs={2} sm={1} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }} >
                <IconButton onClick={ openSideMenu } sx={{ color:'text.primary' }}>
                    <MenuIcon sx={{fontSize: {xs: '1.5rem', sm: '2rem'}}} />
                </IconButton>
            </Grid>
          </Grid>
      </Toolbar>
    </AppBar>
  )
}