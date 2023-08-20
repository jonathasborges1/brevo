import { createContact, getContacts } from '@modules/contact';
import { Button } from '@mui/material';
import React from 'react';

interface HomeProps {
   children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({  ...props }) => {

   const handleCreateContact = () => {
      createContact();
   }

   const handleGetAllContacts = () => {
      console.log("handleCreateContact")
      getContacts();
   }

   return (
      <div { ...props}>
         home
         <Button variant={"contained"} onClick={()=>handleCreateContact()} >Teste</Button>
         <Button variant={"contained"} onClick={()=>handleGetAllContacts()} >Busca Todos</Button>
      </div>
   )
}

export default Home;