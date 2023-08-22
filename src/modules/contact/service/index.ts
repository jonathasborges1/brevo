
import axios from 'axios';

import appConfig from '@config/index';
import { IContact } from '@modules/contact/model/IContact';

// url = 'https://api.brevo.com/v3/contacts';
const api = axios.create({
   baseURL: appConfig.api.url,
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'api-key': appConfig.api.key
   }
 });

const createContact = async (data: IContact) => {

   try {
      await api.post('/contacts', data);
   } catch (error) {
      throw new Error(error as string);
   }
}

const getContacts = async () => {

   try {
      
      const response = await api.get('/contacts?limit=1000&offset=0&sort=desc')
      console.log(response.data);

   } catch (error) {

      console.error("[ERROR createContact]:  ", error);
      throw new Error(error as string);

   }
}

export { createContact, getContacts }