import React from 'react';

import { Button, Grid } from '@mui/material';
import { getContacts } from '@modules/contact/service';
import CreateContact from '@pages/Home/form/CreateContact';


interface HomeProps {
   children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({  ...props }) => {

   const handleGetAllContacts = () => {
      console.log("handleCreateContact")
      getContacts();
   }

   return (
      <Grid container { ...props} justifyContent={"center"} alignItems={"center"} gap={1} >
         {/* home */}

         <Grid item xs={12} sm={8} md={8} lg={5.5} sx={{border:"0px solid red"}}>
            <Button variant={"contained"} onClick={()=>handleGetAllContacts()} >Busca Todos</Button>
         </Grid>

         <Grid item xs={12} sm={8} md={8} lg={5.5} sx={{border:"0px solid red"}}>
            <CreateContact/>
         </Grid>
         
      </Grid>
   )
}

export default Home;