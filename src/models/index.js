// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tasks } = initSchema(schema);

export {
  Tasks
};