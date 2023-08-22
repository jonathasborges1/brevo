export interface IContact {
   email: string;
   attributes?: {
      NOME?: string;
      PHONE?: string;
      ADDRESS?: string;
      SMS?: string;
   }
}

export const mockedContactData = {
   updateEnabled: false,
   email: 'teste5@gmail.com',
   attributes: {
      'PHONE': '1231323891',
      'ADDRESS': 'rua tananana'
   }
}
   
