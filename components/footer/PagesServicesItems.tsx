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
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb:2 }}>{titleItemsServices}</Typography>
        <NextLink href={linkServiceOne} passHref>
            <Link 
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.primary', textDecorationColor:'#90a4ae' }}
                underline={ (pathname === linkServiceOne) ? 'always' : 'hover' }
            >
                {serviceOne}
            </Link>
        </NextLink>
        <NextLink href={linkServiceTwo} passHref>
            <Link   
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.primary', textDecorationColor:'#90a4ae' }}
                underline={ (pathname === linkServiceTwo) ? 'always' : 'hover' }
            >
                {serviceTwo}
            </Link>
        </NextLink>
        <NextLink href={linkServiceThree} passHref>
            <Link   
                variant="overline" 
                sx={{ mb:1, display: 'block', color:'text.primary', textDecorationColor:'#90a4ae' }}
                underline={ (pathname === linkServiceThree) ? 'always' : 'hover' }
            >
                {serviceThree}
            </Link>
        </NextLink>
    </>
  )
}
