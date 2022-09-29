import { Avatar, Link, useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import languages from '../../data/language.json';
import DrawerComponent from '../Navbar/Drawer';
import ChooseLanguage from './ChooseLanguage';
import ChooseTheme from './ChooseTheme';

const Navbar = () => {
  
  const [pages, setPages] = useState([])
  const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
	const lang = useSelector(state => state.language.current);

	useEffect(() => {
		const l = languages.find(item => item.id === lang);
		axios.get(l.path + '/nav.json').then(res => {
			setPages(res.data);
		})
	}, [lang])
	


  return (
     <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Link href='/' color='inherit'>
            <Avatar src='/logo.svg' alt='logo' />
          </Link>
          {isMatch ? (
						<>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  marginLeft: 'auto',
                }}>
                {pages.map(page => (
                  <Button
										key={page}
										sx={{ color: '#fff' }}
                    >
                    {page}
                  </Button>
                ))}
								</Box>
								<ChooseTheme/>
								<ChooseLanguage />
            </>
					)}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;