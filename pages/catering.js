import React, { useState } from "react";
import UiList from '../src/components/UiList/';
import Header from '../src/components/PriceHeader/';
import {Typography, Toolbar, Grid, Paper, Button, SwipeableDrawer} from '@mui/material';
// data
import service from '../src/data/service';
import partySize from '../src/data/partySize';
import menu from '../src/data/menu';

const CateringPage = () => {
      // Set State
      const [stateObj, setStateObj] = useState({});
      const [subtotal, setSubtotal] = useState(0);
      const [menuIterator, setMenuIterator] = useState(0);
      const [displayCheckout, setDisplayCheckout] = useState(false);
        
      let uiList = [];
      let i = 0;
    
      const uiListData = [
        partySize,
        service,
        menu,
      ]
    
      // Functions
      const choose =(x)=> {
        const [type, title, price] = x
        // !menu ? Remove On Click : Set Menu Prices
        if (type !== 'menu') {
          const elems = document.getElementsByClassName(type);
          for (let e of elems) {
            e.style.display = 'none'
          }
          setStateObj({...stateObj, [type]: title});
          setSubtotal(Number(subtotal) + Number(price));
          // scroll to top
          window.scrollTo(0,0);
        } else {
          setStateObj({...stateObj, [menuIterator] : title, price});
          setMenuIterator(menuIterator+1);
          // enable checkout
          (!displayCheckout && menuIterator > 3 ) && setDisplayCheckout(true)
          const newSubtitle = Number(subtotal) + Number(price)
          setSubtotal(newSubtitle.toFixed(2));
          const elems = document.getElementById(title).style.display = 'none';
        }
      };
      // UI List
      i=1
      for (let opts of uiListData) {
        uiList.push(<>
          <Typography variant='h4' className={opts.options[0].type}>{opts.title}</Typography>
          <UiList dataObj={opts.options} stateObj={stateObj} setStateObj={setStateObj} choose={choose} />    
      </>)
        // !lastItem ? 'Before Continuing' Message : Display Checkout
        if (i < uiListData.length) {
          uiList.push(<>
            <hr className={opts.options[0].type} />
            <Typography mb={100} variant='h5' className={opts.options[0].type}>Choose a {opts.title} before continuing.</Typography>
            <div className={`${opts.options[0].type}`}></div>
          </>)
        } else {
          uiList.push(<>
            {displayCheckout && <Button>Checkout</Button>}
          </>)
        }
    
        i += 1;
      }
  return (

        <>
          <Header subtotal={subtotal}/> 
          {uiList}
        </>
  );
};

export default CateringPage;

