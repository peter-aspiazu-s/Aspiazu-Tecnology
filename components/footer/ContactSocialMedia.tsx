import {FC} from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface FooterProps {
    contactUs:string;
    linkContactFooter: string;
}

export const ContactSocialMedia: FC<FooterProps> = ({ 
    contactUs,
    linkContactFooter 
}) => {
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
            href={linkContactFooter}
            target="_blank"
        >
            {contactUs}
        </Button>
        <IconButton color="secondary" href="https://www.facebook.com/profile.php?id=100083073915723" target="_blank">
            <FacebookIcon />
        </IconButton>
        <IconButton color="secondary" href="https://www.instagram.com/paspiazus/" target="_blank">
            <InstagramIcon />
        </IconButton>
        <IconButton color="secondary" href="#">
            <YouTubeIcon />
        </IconButton>
    </>
  )
}
