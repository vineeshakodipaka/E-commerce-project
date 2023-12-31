import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: '0.5',
  1: '1',
  1.5: '1.5',
  2: '2',
  2.5: '2.5',
  3: '3',
  3.5: '3.5',
  4: '4',
  4.5: '4.5',
  5: '5',
}

function Ratingicon(props) {
  console.log(props)
 const value=props.r;

  return (
    <Box
      // sx={{
      //   width: 200,
      //   display: 'flex',
      //   alignItems: 'center',
      // }}
    >
     <center> <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      /></center>
      
    </Box>
  );
}
export default Ratingicon