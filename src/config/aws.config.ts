import * as AWS from 'aws-sdk';
import { configDotenv } from 'dotenv';

configDotenv();

if (
  !process.env.ACCESS_KEY_ID ||
  !process.env.SECRET_ACCESS_KEY ||
  !process.env.REGION
) {
  throw new Error('Missing necessary environment variables.');
}

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

export const cloudwatch = new AWS.CloudWatch();
export const ec2 = new AWS.EC2();
