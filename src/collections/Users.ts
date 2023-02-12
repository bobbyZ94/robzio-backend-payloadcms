import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    maxLoginAttempts: 10,
    // login lockout time in milliseconds set to 1h
    lockTime: 3600000,
    useAPIKey: true,
    cookies: {
      secure: true,
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;