import {FC} from 'react'
import { Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface FooterProps {
    contactUs:string;
}

export const ContactSocialMedia: FC<FooterProps> = ({ contactUs }) => {
  return (
    <>
        <Button 
            variant="contained" 
            size="large" 
            fullWidth 
            color="secondary"
            sx={{mb: 3}}
        >
            {contactUs}
        </Button>
        <IconButton color="secondary">
            <FacebookIcon />
        </IconButton>
        <IconButton color="secondary">
            <InstagramIcon />
        </IconButton>
        <IconButton color="secondary">
            <TwitterIcon />
        </IconButton>
        <IconButton color="secondary">
            <YouTubeIcon />
        </IconButton>
    </>
  )
}