import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, Paper } from '@mui/material';
import {primaryColor , secondaryColor} from './style'
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export default function CardComp() {
    const imgSrc =`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/200/300`
  return (
    <Card sx={{ maxWidth: 300 , m:1 , backgroundColor:'primary.main' , color:secondaryColor }}>
      <CardActionArea sx={{position:'relative'}}>
          <Paper sx={{position:'absolute',px:1.5,py:1,top:10,left:10,color:'secondary.main',backgroundColor:'error.main'}}>Live</Paper>
          <Avatar sx={{position:'absolute',top:10,right:10}} src={imgSrc} alt={'alt img'}></Avatar>
        <CardMedia 
          sx={{height:'28vh'}}
          component="img"
          height="140"
          image={`https://picsum.photos/id/${Math.floor(Math.random() * 10) + 1}/200/300`}
          alt="green iguana"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography variant="body2" color="#e1e1e1">
            Lizards are a widespread group of squamate reptiles
          </Typography>
          <Typography color='gray' variant='caption'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sol
          </Typography>
          <Typography component="p" sx={{display:'flex',alignItems:'center'}} variant="caption">
             <WatchLaterIcon/> <span style={{marginLeft:'20px'}}>00:00:15</span>
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
