import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';

// ##############################################################
// Component to sort books alpha by title in book browser
// ##############################################################

export default function FilterBooks(props) {
  const [sortBy, setSortBy] = useState('Title A-Z');

  const handleChange = (event) => {
    setSortBy(event.target.value)
    props.handleSorting(sortBy)
    console.log(sortBy)
  };

  return (
    <FormControl sx={{mb:2}}>
      <FormLabel id="alpha-sort">Sort By:</FormLabel>
      <RadioGroup
        aria-labelledby="alpha-sort"
        name="alpha-sort"
        value={sortBy}
        onChange={handleChange}
      >
        <FormControlLabel 
          value={'Title A-Z'}
          control={<Radio/>} 
          label={'Title A-Z'}
        />
        <FormControlLabel 
          value={'Title Z-A'}
          control={<Radio/>} 
          label={'Title Z-A'}
        />
      </RadioGroup>
    </FormControl>
  );
}
