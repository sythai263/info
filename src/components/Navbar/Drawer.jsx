import {
	Drawer,
	IconButton,
	Link,
	List,
	ListItemButton,
	ListItemIcon
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
	
	useEffect(() => {
		const l = languages.find(item => item.id === lang);
		axios.get(l.path + '/nav.json').then(res => {
			setNavItem(res.data);
		})
	}, [lang])

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { width: '190px' },
				}}>
				
				<List>
          {navItems.map((page, index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link color='inherit' underline='none'>
                  {page}
                </Link>
              </ListItemIcon>
            </ListItemButton>
          ))}
				</List>
				<ChooseTheme/>
				<ChooseLanguage/>
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