import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const BaseTemplate = ({className=null, textTitle=null, children}) => {
    return (
        <main className={className}>
            <Container>
                {textTitle &&
                <Typography
                    variant='h4'
                    component='div'
                    gutterBottom={true}
                    sx={{mb:10, textAlign:'center', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem',}} >
                    {textTitle}
                </Typography>}
                {children}
            </Container>
        </main>
    )

}

export default BaseTemplate;
