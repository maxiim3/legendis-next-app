import {createClient, SanityClient} from '@sanity/client';

class SingletonSanityClient {
   private static instance: SanityClient;

   // Private constructor to prevent instantiation from the outside
   private constructor() {
      // Intentionally empty, and private to prevent instantiation from the outside
   }

   public static getInstance(): SanityClient {
      if (!SingletonSanityClient.instance) {
         SingletonSanityClient.instance = createClient({
            projectId: 'lo6ab3qt',
            dataset: 'production',
            apiVersion: '2023-12-12',
            useCdn: false, // If you set this to true the client will fetch content from our cache delivery network. Set to True to instant updates
         });
      }
      return SingletonSanityClient.instance;
   }
}

// Usage
const sanityClient = SingletonSanityClient.getInstance();
export default sanityClient;
