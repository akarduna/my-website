import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';


export default function Square(){
    const card = (
        <React.Fragment>
            <CardMedia 
                component="img"
                sx = {{
                    display: "flex",
                    maxWidth:150
                }}
                height="150"
                image={require("./logo512.png")}>
            </CardMedia>
            <CardContent>
                <Typography variant='h4'>Header</Typography>
                <Typography variant='body2'>Body</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Button</Button>
            </CardActions>
        </React.Fragment>
    );
    return (
        <Box>
            <Card variant='outlined'>{card}</Card>
        </Box>
    );
}