import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const FilterList = () => {
  const list = [
    "🦁Lion",
    "🐵Monkey",
    "🐶Dog",
    "🐮Cow",
    "🐻Bear",
    "🐹Rat",
    "🐼Panda",
    "🐸Frog",
  ];

  const [filterList, setFilterList] = useState(list);
  const searchHandler = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
    }
    const filteredList = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1,
    );
    setFilterList(filteredList);
  };
  return (
    <>
      <Box>
        <Typography variant='h4' color='primary'>
          Search Animal
        </Typography>
        <TextField
          name='query'
          type='text'
          onChange={searchHandler}
          size='small'
        ></TextField>
        {filterList &&
          filterList.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
      </Box>
    </>
  );
};

export default FilterList;
