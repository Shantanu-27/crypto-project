import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

export default function SelectDays({days,handleDaysChange}) {

  return (
    <div className='select-days'>
        <InputLabel id="demo-simple-select-label" sx={{color:"var(--white)"}}>Price Change In</InputLabel>
        <Select
          sx={{
            heigth:"2.5rem",
            color:"var(---white)",
            "& .MuiOutlinedInput-notcheckedOutline":{
                borderColor:"var(--white)",
            },
            "& .MuiSvgIcon-root":{
                color:"var(--white)",
            },
            "&:hover":{
                "&& fieldset":{
                    borderColor:"#3a80e9"
                },
            },
          }} 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>365 Days</MenuItem>
        </Select>
    </div>
  );
}