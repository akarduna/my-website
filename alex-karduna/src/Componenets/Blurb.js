import { Box } from '@mui/material';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItem';

export default function Blurb(){
    return (
        <Box paddingTop="2%">
            I have a bachelor's degree in computer science, with a minor in mathematics, from Colorado State University. <br/>
            My computer science and mathematical interests are: <br/>
            <List>
                <ListItemText>
                    Combinatorics and Combinatorial Optimization
                </ListItemText>
                <ListItemText>
                    Linear Programing 
                </ListItemText>
                <ListItemText>
                    Markov chain Monte Carlo methods
                </ListItemText>
                <ListItemText>
                    Computational Complexity
                </ListItemText>
                <ListItemText>
                    Machine Learning and Artificial Intelligence
                </ListItemText>
                <ListItemText>
                    Category Theory and Type Theory
                </ListItemText>
            </List>
        </Box>
    );
}