## Amazon Web Services

### Popular AWS Services (DevOps):

 - **S3:** Object storage service (metadata, id), upload, store and download any file here (5 GB size limit).  S3 bucket can store responses, analyze and return to EC2. 
 - **DynamoDB:** Fast, noSQL database, scaling is managed by Amazon (key, value), highly performant.  User profiles, images can be stored here.
 - **EC2:** Basic server similar to Digital Ocean server or Heroku (backend can be uploaded here). Can work as a REST API, Express server.
 - **Lambda:** Runs any type of code for backend services, highly scalable for many users to use same function(s) at same time.  Makes a call to API and get a response which can be stored in S3.
    - **Serverless:** Runs code for AWS Lambda functions easily from the command line instead of logging in and using Amazon's dashboard.
     - ``sls create -t aws-nodejs`` creates a new node js serverless template when ran in Terminal CLI
     - ``sls config credentials --provider aws --key ENTER_KEY_HERE --secret ENTER_SECREY_KEY_HERE`` sets permission for Serverless to access AWS Lambda functions
     - ``cd ~/.aws`` access to AWS root folder
     - ``sls deploy`` Upload and deploy setup files to AWS Lambda server
     - ``sls invoke --function NAME_OF_FUNCTION_HERE`` runs the function from the AWS Lambda server (not free and not recommended for use while in development)
     - ``sls invoke local --function NAME_OF_FUNCTION_HERE`` runs the function from the AWS Lambda server locally (free and better for development purpose)
     
 - **CloudFront:** Web server that speeds up distribution of static files (similar to CDN - Content Delivery Network, system of distributed servers). Provides automatic HTTPS for added security.

   **Useful INFO:**
   - https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html (Managing IAM policies)
   - *"Every AWS Lambda function needs permission to interact with other AWS infrastructure resources within your account. These permissions are set via an AWS IAM Role which the Serverless Framework automatically creates for each Serverless Service, and is shared by all of your Functions. The Framework allows you to modify this Role or create Function-specific Roles, easily."*  
Source: https://serverless.com/framework/docs/providers/aws/guide/iam/
     
   
   
   
