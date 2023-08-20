import axios, { AxiosResponse, AxiosError } from 'axios';
import appConfig from '@config/index';

const createContact = async () => {

   const url = `${appConfig.api.url}/contacts` // url = 'https://api.brevo.com/v3/contacts';

   const data = { 
      updateEnabled: false, 
      email: 'teste4@gmail.com', 
      attributes: {
         'PHONE': '1231323891',  
         'ADDRESS': 'rua tananana'
      }
   };

   const headers = {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'api-key': `${appConfig.api.key}`
   };

   try {
      axios.post(url, data, { headers })
         .then((response: AxiosResponse) => {
            console.log(response.data);
         })
         .catch((error: AxiosError) => {
            console.error('error:', error);
         }); 
   } catch (error) {
      console.error("[ERROR createContact]:  ", error);
      throw new Error(error as string);
   }
}

const getContacts = async () => {
   
   const url = `${appConfig.api.url}/contacts?limit=3000&offset=0&sort=desc`

   const options = {
      method: 'GET', 
      headers: {
         accept: 'application/json', 
         'api-key': `${appConfig.api.key}`
      }
   };

   try {
      axios.get(url, options)
         .then((response: AxiosResponse) => {
            console.log(response.data);
         })
         .catch((error: AxiosError) => {
            console.error('error:', error);
         }); 
   } catch (error) {
      console.error("[ERROR createContact]:  ", error);
      throw new Error(error as string);
   }
}

export {createContact, getContacts}