import React from 'react'

import {
    Grid,
    Container,
    Button,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '0.6rem'
    }
}))

export default (props) => {

    const classes = useStyles()

    return (
        <div>

            <Grid container>

                <Grid item xs={12}>
                    <Container className={classes.container}>
                    <Button href="https://github.com/login/oauth/authorize?client_id=7a6d5ad49772a03f5777" variant="outlined" color="secondary" >Login</Button>
                    </Container>
                </Grid>

            </Grid>

        </div>
    )
}