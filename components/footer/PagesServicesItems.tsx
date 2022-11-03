import {FC, useContext} from 'react'
import NextLink from 'next/link';
import { Typography, Link } from '@mui/material';
import { UiContext } from '../../context';

interface FooterProps {
    titleItemsServices: string;
    serviceOne:string;
    linkServiceOne:string;
    serviceTwo:string;
    linkServiceTwo:string;
    serviceThree:string;
    linkServiceThree:string;
}

export const PagesServicesItems: FC<FooterProps> = ({
    titleItemsServices,
    serviceOne,
    linkServiceOne,
    serviceTwo,
    linkServiceTwo,
    serviceThree,
    linkServiceThree,
}) => {

    const { pathname } = useContext(UiContext)

  return (
    <>
        <Typography 
            sx={{ 
                fontWeight: 'bold', 
                mb:2, 
                fontSize:{xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}
            }}
        >
            {titleItemsServices}
        </Typography>
        <NextLink href={linkServiceOne} passHref>
            <Link 
                variant="overline" 
                sx={{ 
                    mb:1, 
                    display: 'block', 
                    color:'text.primary', 
                    textDecorationColor:'#90a4ae',
                    fontSize: {xs:'0.7rem', lg:'0.8rem'} 
                }}
                underline={ (pathname === linkServiceOne) ? 'always' : 'hover' }
            >
                {serviceOne}
            </Link>
        </NextLink>
        <NextLink href={linkServiceTwo} passHref>
            <Link   
                variant="overline" 
                sx={{ 
                    mb:1, 
                    display: 'block', 
                    color:'text.primary', 
                    textDecorationColor:'#90a4ae',
                    fontSize: {xs:'0.7rem', lg:'0.8rem'} 
                }}
                underline={ (pathname === linkServiceTwo) ? 'always' : 'hover' }
            >
                {serviceTwo}
            </Link>
        </NextLink>
        <NextLink href={linkServiceThree} passHref>
            <Link   
                variant="overline" 
                sx={{ 
                    mb:1, 
                    display: 'block', 
                    color:'text.primary', 
                    textDecorationColor:'#90a4ae',
                    fontSize: {xs:'0.7rem', lg:'0.8rem'} 
                }}
                underline={ (pathname === linkServiceThree) ? 'always' : 'hover' }
            >
                {serviceThree}
            </Link>
        </NextLink>
    </>
  )
}
