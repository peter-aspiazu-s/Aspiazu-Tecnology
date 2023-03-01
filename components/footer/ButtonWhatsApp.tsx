import {FC} from 'react'
import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface ButtonWhatsAppProps {
    TextButtonWhatsApp: string;
    messageButtonWhatsapp: string;
}

export const ButtonWhatsApp: FC<ButtonWhatsAppProps> = ({
    TextButtonWhatsApp,
    messageButtonWhatsapp,
}) => {

    const ButtonWhatsAppImg = '/images/btn-whatsapp.webp';

  return (
    <>
        <Box 
            className='animate__animated animate__tada animate__repeat-3'
            sx={{cursor: 'pointer'}}
        >   
            <Button
                href={messageButtonWhatsapp}
                target="_blank"
            >
                <Image 
                    src={ButtonWhatsAppImg} 
                    width={50} 
                    height={50}
                    title={TextButtonWhatsApp}
                    alt="WhatsApp"
                />
            </Button>
        </Box>
    </>
  )
}
