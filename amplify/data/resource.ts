import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  // Add the Job model here
  Job: a
    .model({
      companyName: a.string().required(),
      role: a.string().required(),
      domain: a.string(),
      status: a.string(),
      applicationLink: a.string(),
      locationCity: a.string(),
      locationState: a.string(),
      appliedDate: a.date(),
      notes: a.string(),
    })
    // Change this to .authenticated() once you want to private-guard data
    .authorization((allow) => [allow.owner()]), 
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool', // Better for per-user job tracking
  },
});