import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  useTheme,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import languages from '../../data/language.json';
import ChooseLanguage from './ChooseLanguage';
import ChooseTheme from './ChooseTheme';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [navItems, setNavItem] = useState([]);
  const lang = useSelector(state => state.language.current);
  const theme = useTheme();
  const curr = useSelector(state => state.theme.current);

  useEffect(() => {
    const l = languages.find(item => item.id === lang);
    axios.get(l.path + '/nav.json').then(res => {
      setNavItem(res.data);
    });
  }, [lang]);

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: '190px',
            background:
              curr === 'dark'
                ? theme.palette.grey[900]
                : theme.palette.secondary.main,
          },
        }}>
        <Box
          sx={{ textAlign: 'center' }}
          display='flex'
          flexDirection='column'
          justifyContent='space-between'>
          <List>
            {navItems.map((page, index) => (
              <ListItemButton
                sx={{ textAlign: 'center' }}
                key={index}
                onClick={() => setOpenDrawer(false)}>
                <Link color='#fff' underline='none'>
                  {page}
                </Link>
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <Box marginTop={2}>
            <ChooseLanguage />
          </Box>
          <Box sx={{ marginTop: 'auto' }}>
            <ChooseTheme />
          </Box>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}>
        <BiMenu />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
