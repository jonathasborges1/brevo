import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack'

import { Button, CircularProgress, Grid, Typography } from '@mui/material';

import { IContact } from '@modules/contact/model/IContact';
import { createContact } from '@modules/contact/service';

import TextFieldCustom from '@components/TextFieldCustom';

interface CreateContactProps {
   children?: React.ReactNode;
}

interface IContactForm {
   name: string;
   email: string;
   phone: string;
}

const CreateContact: React.FC<CreateContactProps> = ({ ...props }) => {

   const { enqueueSnackbar } = useSnackbar();

   const initialValues: IContactForm = {
      name: '',
      email: '',
      phone: '',
   }

   const validationSchema = Yup.object({
      name: Yup.string().required('Obrigatório'),
      email: Yup.string().required('Obrigatório'),
      phone: Yup.string().required('Obrigatório'),
   })

   const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: async(values,actions) => {
         console.log(values)
         try {
            const payloadContactData: IContact = {
               email: values.email,
               attributes: {
                  "NOME": values.name,
                  "PHONE": values.phone,
               }
            }

            await createContact(payloadContactData);
            enqueueSnackbar('Contato cadastrado com sucesso', { variant: 'success' });
            
            actions.resetForm();
         } catch (error) {
            enqueueSnackbar('Erro ao cadastrar contato', { variant: 'error' });
            throw new Error("Erro ao cadastrar contato");
         }
      }
   })


   return (
      <form {...props} onSubmit={formik.handleSubmit}>
         <Grid container gap={2}>

            <Grid item xs={12}>
               <Typography variant='h2'>Formulario de Cadastro</Typography>
            </Grid>

            <Grid item xs={12}>
               <TextFieldCustom
                  name="name"
                  label={"Nome Completo"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
               />
            </Grid>

            <Grid item xs={12}>
               <TextFieldCustom
                     name="email"
                     label={"E-mail"}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.email}
                  />
            </Grid>

            <Grid item xs={12}>
               <TextFieldCustom
                     name="phone"
                     label={"Telefone"}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.phone}
                  />
            </Grid>

            <Grid item xs={12}>
               
               {formik.isSubmitting ? (<CircularProgress/>):(<Button variant='contained' type={"submit"} >Enviar</Button>)}
            </Grid>

         </Grid>
      </form>
   )
}

export default CreateContact;