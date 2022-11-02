import {FC} from 'react'
import { Typography } from '@mui/material'

interface FooterProps {
  presentCompany: string;
}

export const PresentCompanyFooter: FC<FooterProps> = ({presentCompany}) => {
  return (
    <>
        <Typography  
            sx={{ 
                fontWeight: 'bold', 
                mb:2, 
                textAlign: {xs: 'center', sm: 'left'},
                fontSize: {xs:'1.4rem', sm:'1.5rem', md:'1.7rem', lg: '1.8rem', xl: '1.9rem'}
            }}
            component="h3"
        >
          Aspiazu Tecnology
        </Typography>
        <Typography 
          sx={{
            textAlign: {xs: 'justify', sm: 'left'},
            fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'}
          }}
        >
          {presentCompany}
        </Typography>
    </>
  )
}
