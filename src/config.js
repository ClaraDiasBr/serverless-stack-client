const config = {
    STRIPE_KEY: "pk_test_51IWqgsCuu7TBiVaXWuB0Jfg5w7iprrXuudEgjaLBX4vYo6ARdMNx1KZwIwlS0LBF08epd7T3UPJYgUAWaGXTYpzi00X9BPNLCp",
    MAX_ATTACHMENT_SIZE: 5000000,
    
    s3: {
      REGION: "us-east-1",
      BUCKET: "note-app-upload96",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://37qf9lm2hb.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_U5me4FQqB",
      APP_CLIENT_ID: "2hek7d2g5h00d69ncrbpsigdb",
      IDENTITY_POOL_ID: "us-east-1:4270d8a5-38c8-4dba-8ea2-f5a3c35f4e10",
    },
};
  
export default config;