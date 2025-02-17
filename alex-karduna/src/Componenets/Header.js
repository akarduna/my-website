import { Typography, Grid2} from '@mui/material';
import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';


export default function Header(){
    return ( 
        <Grid2 container width="100%" paddingTop="1%" justifySelf="center" justifyContent="space-between" alignItems="center">
            <Grid2 size={4}>
                <Typography variant='h5' sx={{color:"palette.text.primary"}}>Alex Karduna</Typography> 
            </Grid2>
            <Grid2 size="auto">
                <Typography variant='h5' sx={{color:"palette.text.primary"}}>Projects</Typography> 
            </Grid2>
            <Grid2 size={4}>
                <Grid2 container direction="row" justifyContent="flex-end" spacing={1}>
                    <Grid2 size="auto">
                        <SvgIcon>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                width="24" 
                                height="24" 
                                stroke-width="2"
                            >
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </SvgIcon>
                    </Grid2>
                    <Grid2 size="auto">
                        <SvgIcon>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                width="24" 
                                height="24" 
                                stroke-width="2"
                            >
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </SvgIcon>
                    </Grid2>                      
                </Grid2>
            </Grid2>
        </Grid2>
    );
}