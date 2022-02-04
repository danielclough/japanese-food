import React, { useState } from "react";
// components
import UiListItem from './common/UiListItem';
// data
import frozen from '../../data/frozen'
// styles
import {Typography, Grid, Box} from "@mui/material";

const ButtonGrid = ({stateObj, setStateObj, choose, choice, dataObj}) => {
  let final = [];
  
  for (let d of dataObj) {
    let price = 0;
    let per = "";
    if (!d.price) {
      let item = frozen.find(x => x["RETAIL NAME"].includes(d.title) && (x["PRICE"] !== "n/a"))
      if (item) {
        price = Number(item["PRICE"].split(" ")[1])
        per = item["SOLD BY"]
      };
    };
    final.push(<>
      <UiListItem stateObj={stateObj} setStateObj={setStateObj} choose={choose}
        title={d.title}
        type={d.type}
        description={d.description}
        imgSrc={d.imgSrc}
        imgAlt={d.imgAlt}
        price={d.price || price}
        per={per}
      />
    </>);
  }
  return (
    <Box>
      <Grid
        container
        justifyContent="space-around"
      >

        {final}

      </Grid>
    </Box>
  );
}

export default ButtonGrid;
