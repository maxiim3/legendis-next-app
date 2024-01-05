export type MemberConstructor = {
   name: string;
   role: string;
   description: string;
   picture: string;
   twitter: string | null;
   instagram: string | null;
   linkedin: string | null;
   personalWebsite: string | null;
};

export class Member {
   private readonly _name: string;
   private readonly _role: string;
   private readonly _description: string;
   private readonly _picture: string;
   private readonly _twitter: string | null;
   private readonly _instagram: string | null;
   private readonly _linkedin: string | null;
   private readonly _personalWebsite: string | null;

   private constructor({
      linkedin,
      name,
      instagram,
      twitter,
      role,
      description,
      personalWebsite,
      picture,
   }: MemberConstructor) {
      this._name = name;
      this._role = role;
      this._description = description;
      this._linkedin = linkedin;
      this._instagram = instagram;
      this._twitter = twitter;
      this._personalWebsite = personalWebsite;
      this._picture = picture;
   }

   get name(): string {
      return this._name;
   }

   get picture(): string {
      return this._picture;
   }

   get role(): string {
      return this._role;
   }

   get description(): string {
      return this._description;
   }

   get twitter(): string | null {
      return this._twitter;
   }

   get instagram(): string | null {
      return this._instagram;
   }

   get linkedin(): string | null {
      return this._linkedin;
   }

   get personalWebsite(): string | null {
      return this._personalWebsite;
   }

   public static create({
      linkedin,
      name,
      instagram,
      twitter,
      role,
      description,
      personalWebsite,
      picture,
   }: MemberConstructor): MemberConstructor {
      const member = new Member({
         linkedin,
         name,
         instagram,
         twitter,
         role,
         description,
         personalWebsite,
         picture,
      } satisfies MemberConstructor);

      return {
         linkedin: member.linkedin,
         name: member.name,
         instagram: member.instagram,
         twitter: member.twitter,
         role: member.role,
         description: member.description,
         personalWebsite: member.personalWebsite,
         picture: member.picture,
      };
   }
}
