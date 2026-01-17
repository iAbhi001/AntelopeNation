import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true, // Required for Feature #1
  },
  userAttributes: {
    // You can add custom attributes here if needed
  },
});