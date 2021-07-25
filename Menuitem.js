import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
  cursor: {
    cursor:'pointer',
    "&:hover":{
     backgroundColor:'#7bed9f',

    }
}  
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
      
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#FFF',
  
    },
    cursor:'pointer',
    //backgroundColor:'#7bed9f',
    "&:hover":{
    color:'#7bed9f',

    }
    
  },
}))(MenuItem);

export default function Menuitem() {
    const classes = withStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [anchorE4, setAnchorE4] = React.useState(null);
  const [anchorE5, setAnchorE5] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleClick2= (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };
  const handleClick4 = (event) => {
    setAnchorE4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorE4(null);
  };
  const handleClick5 = (event) => {
    setAnchorE5(event.currentTarget);
  };

  const handleClose5 = () => {
    setAnchorE5(null);
  };
  return (
    <div>
        <span style={{marginLeft:32}}>
      <Button
     className={classes.cursor}
      aria-controls="simple-menu" aria-haspopup="true"
        onClick={handleClick1}
      >
      Music & Audio
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
   
        open={Boolean(anchorEl)}
        onClose={handleClose1}
      >
        <StyledMenuItem className={classes.cursor} >
          <ListItemText className={classes.cursor} >Voice Over</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem className={classes.cursor} > 
          <ListItemText  className={classes.cursor}>Podcad</ListItemText>
        </StyledMenuItem>
      </StyledMenu>
      </span>
      <span style={{marginLeft:10}}>
      <Button
     className={classes.cursor}
      aria-controls="simple-menu" aria-haspopup="true"
        onClick={handleClick2}
      >
      Programming & Tech
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorE2={anchorE2}
   
        open={Boolean(anchorE2)}
        onClose={handleClose2}
      >
        <StyledMenuItem className={classes.cursor} >
          <ListItemText className={classes.cursor} >Web Development</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem className={classes.cursor} > 
          <ListItemText  className={classes.cursor}>Tech Marketing</ListItemText>
        </StyledMenuItem>
      </StyledMenu>
      </span>
      <span style={{marginLeft:10}}>
      <Button
     className={classes.cursor}
      aria-controls="simple-menu" aria-haspopup="true"
        onClick={handleClick3}
      >
      Digital Marketing
      </Button>
      <StyledMenu
        id="customized-menu"
        setAnchorE3={anchorE3}
   
        open={Boolean(anchorE3)}
        onClose={handleClose3}
      >
        <StyledMenuItem className={classes.cursor} >
          <ListItemText className={classes.cursor} >Social Media Marketing</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem className={classes.cursor} > 
          <ListItemText  className={classes.cursor}>Video Marketing</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem className={classes.cursor} > 
          <ListItemText  className={classes.cursor}>Influencer Marketing</ListItemText>
        </StyledMenuItem>
      </StyledMenu>
      </span>
      <span style={{marginLeft:10}}>
      <Button
     className={classes.cursor}
      aria-controls="simple-menu" aria-haspopup="true"
        onClick={handleClick4}
      >
      Writing & Translation
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorE4={anchorE4}
   
        open={Boolean(anchorE4)}
        onClose={handleClose4}
      >
        <StyledMenuItem className={classes.cursor} >
          <ListItemText className={classes.cursor} >Articles & Blog Posts</ListItemText>
        </StyledMenuItem>
       
      </StyledMenu>
      </span>
      <span style={{marginLeft:10}}>
      <Button
     className={classes.cursor}
      aria-controls="simple-menu" aria-haspopup="true"
        onClick={handleClick5}
      >
      Graphics & Design
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorE5={anchorE5}
   
        open={Boolean(anchorE5)}
        onClose={handleClose5}
      >
        <StyledMenuItem className={classes.cursor} >
          <ListItemText className={classes.cursor} >Logo & Brand Identity</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem className={classes.cursor} > 
          <ListItemText  className={classes.cursor}>Packaing & Labels</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem className={classes.cursor} > 
          <ListItemText  className={classes.cursor}>Art & illustration</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem className={classes.cursor} > 
          <ListItemText  className={classes.cursor}>Visual Design</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem className={classes.cursor} > 
          <ListItemText  className={classes.cursor}>Graphics & Design</ListItemText>
        </StyledMenuItem>
      </StyledMenu>
      </span>
    </div>
  );
}