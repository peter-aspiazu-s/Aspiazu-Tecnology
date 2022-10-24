import {FC} from 'react'
import { Typography } from '@mui/material'

interface FooterProps {
  presentCompany: string;
}

export const PresentCompanyFooter: FC<FooterProps> = ({presentCompany}) => {
  return (
    <>
        <Typography 
            variant="h5" 
            sx={{ fontWeight: 'bold', mb:2, textAlign: {xs: 'center', sm: 'left'}}}
        >Aspiazu Tecnology</Typography>
        <Typography variant="subtitle1" sx={{textAlign: {xs: 'justify', sm: 'left'}}}>{presentCompany}</Typography>
    </>
  )
}
