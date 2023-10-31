import React from 'react';

export interface EmailTemplateProps {
   name: string;
   email: string;
   message: string;
}

export const EmailTemplate = ({name, email, message}: EmailTemplateProps) => (
   <div
      className={
         'text-poppins mx-auto my-4 flex w-2/3 flex-col gap-4 rounded-3xl border-base-100/50 bg-primary text-base'
      }>
      <h1 className={'text-xl font-bold'}>Vous avez reçu un email de : {name}</h1>
      <p className={'font-italic font-sm'}>Email de {email}</p>
      <p>{message}</p>
   </div>
);

export class ContactStaticContent {
   private static readonly _email = 'contact@prod203.com';
   private static readonly _domain = 'prod203.com';
   private static readonly _phone = '0778818583';
   private static readonly _adresse = '20 avenue des violettes 34780 Ma-Ville-sur-Seine';

   private constructor() {
      // Private constructor to prevent instantiation from the outside
      // Intentionally empty
   }

   static get email(): string {
      return this._email;
   }

   static get domain(): string {
      return this._domain;
   }

   static get phone(): string {
      return this._phone;
   }

   static get adresse(): string {
      return this._adresse;
   }
}
