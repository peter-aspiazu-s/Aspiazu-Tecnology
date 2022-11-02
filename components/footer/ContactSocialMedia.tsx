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
            sx={{
                mb: 3,
                fontSize: {xs: '0.8rem', xl: '1rem'}
            }}
            href="https://walink.co/5e72b8"
            target="_blank"
        >
            {contactUs}
        </Button>
        <IconButton color="secondary" href="https://www.facebook.com/profile.php?id=100083073915723" target="_blank">
            <FacebookIcon />
        </IconButton>
        <IconButton color="secondary" href="https://instagram.com/paspiazus?igshid=YmMyMTA2M2Y=" target="_blank">
            <InstagramIcon />
        </IconButton>
        <IconButton color="secondary" href="https://twitter.com/AspiazuPeter" target="_blank">
            <TwitterIcon />
        </IconButton>
        <IconButton color="secondary">
            <YouTubeIcon />
        </IconButton>
    </>
  )
}
