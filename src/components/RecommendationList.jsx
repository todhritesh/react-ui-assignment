import { Button, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function RecommendationList({text,btn}) {
  return (
    <ListItem button>
        <ListItemText primary={text} />
        <Button size="small" variant="contained" color="info">{btn}</Button>
    </ListItem>
  )
}

export default RecommendationList