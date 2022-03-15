import { Grid, Typography } from '@mui/material'
import React from 'react'
import CardComp from './CardComp'

function CardContainer() {
  return (
    <>
    <Typography color="secondary" variant='h6'>
        TOP LIVE EVENTS FROM DATA SCIENCE WORLD
    </Typography>
    <Grid container>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
    </Grid>

    <Typography color="secondary" variant='h6'>
        TOP LIVE EVENTS FROM    SOFTWARE ENGINEERING WORLD
    </Typography>
    <Grid container>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
        <Grid item md={3}>
            <CardComp/>
        </Grid>
    </Grid>
    </>
  )
}

export default CardContainer