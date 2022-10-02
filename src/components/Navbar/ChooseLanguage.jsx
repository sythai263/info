import { ExpandMoreRounded } from '@mui/icons-material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import languages from '../../data/language.json';
import { setLanguageGlobal } from '../../features/language';

const ChooseLanguage = () => {
  const lang = useSelector(state => state.language.current);
  const [language, setLanguage] = useState({
    id: 'en',
    path: '',
    display: 'English',
    label: 'Language',
    flag: 'EN',
  });
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setLanguageGlobal(event.target.value));
  };

  useEffect(() => {
    const l = languages.find(item => item.id === lang);
    setLanguage(l);
  }, [lang]);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        size='small'
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
            '& .Mui-focused': {
              borderColor: 'white',
            },
          },
        }}>
        <InputLabel
          id='language'
          sx={{
            color: '#fff',
            '&.Mui-focused': {
              color: '#fff',
            },
          }}>
          {language.label}
        </InputLabel>
        <Select
          IconComponent={ExpandMoreRounded}
          labelId='language'
          sx={{
            '&.Mui-focused': {
              borderColor: '#fff',
            },
          }}
          value={language.id}
          label={language.label}
          onChange={handleChange}>
          {languages.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {getUnicodeFlagIcon(item.flag)} {item.display}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ChooseLanguage;
