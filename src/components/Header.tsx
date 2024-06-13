import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

// mui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const pages = ['Mens', 'Women', 'Kids'];
const settings = ['Profile', 'Account', 'Logout'];

type Props = {};

function Header({}: Props) {
  const [profileEl, setProfileEl] = useState<null | HTMLElement>(null);

  const { cartItems } = useAppSelector((store) => store.cart);

  const handleOnProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileEl(event.currentTarget);
  };

  return (
    <AppBar position='static' elevation={0} color='inherit'>
      <Container maxWidth='lg'>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Typography
              variant='h6'
              noWrap
              component='a'
              fontWeight={600}
              marginRight={4}
            >
              Drip Shop
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page} color='inherit' sx={{ display: 'block' }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <IconButton size='large' color='inherit'>
              <FavoriteBorder />
            </IconButton>
            <IconButton
              size='large'
              color='inherit'
              component={Link}
              to='/cart'
            >
              <Badge
                badgeContent={cartItems.length}
                color='error'
                showZero={true}
              >
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              color='inherit'
              onClick={handleOnProfileClick}
            >
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={profileEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(profileEl)}
              onClose={() => setProfileEl(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
