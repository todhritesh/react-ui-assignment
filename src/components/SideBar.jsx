import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { ListItemIcon, Typography } from '@mui/material';
import RecommendationList from './RecommendationList';


export const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar({open , setOpen}) {
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} color="secondary">
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
              <ListItem button >
                  <ListItemIcon>
                    <HomeIcon  color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
              </ListItem>
              <Divider />
              <ListItem button >
                  <ListItemIcon>
                    <ShuffleIcon  color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Culture" />
              </ListItem>
              <Divider />
              <ListItem button >
                  <ListItemIcon>
                    <PlaylistAddCheckIcon  color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Playlist" />
              </ListItem>
              <Divider />
              <ListItem button >
                  <ListItemIcon>
                    <ShuffleIcon  color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Rooms" />
              </ListItem>
              <Divider />
              <Typography sx={{fontWeight:'bold',mt:2}} color="secondary" variant='body2' >
                Recommended Rooms
              </Typography>
              <RecommendationList text="Rahul Channel" btn="Join" />
              <RecommendationList text="Virus Channel" btn="Join" />
              <RecommendationList text="Comp Channel" btn="Join" />
              <RecommendationList text="Food Channel" btn="Join" />
              <RecommendationList text="Vlog Channel" btn="Join" />
              <Typography sx={{fontWeight:'bold',mt:2}} color="secondary" variant='body2' >
                Recommended Creators
              </Typography>
              <RecommendationList text="Rahul Channel" btn="Room"/>
              <RecommendationList text="Virus Channel" btn="Room"/>
              <RecommendationList text="Comp Channel" btn="Room"/>
              <RecommendationList text="Food Channel" btn="Room"/>
              <RecommendationList text="Vlog Channel" btn="Room"/>
          </List>
        </Drawer>
    </Box>
  );
}