URL:http://ap-calculator.s3-website.ap-south-1.amazonaws.com/

To host a simple static web application (HTML, CSS, JavaScript) on AWS, the easiest way is to use Amazon S3 (Simple Storage Service). Below are the step-by-step instructions to host your calculator web app using AWS S3:

Step 1: Create an AWS Account

If you don’t have an AWS account, go to https://aws.amazon.com and sign up.
Once you’ve signed up, log into your AWS Management Console.

Step 2: Create an S3 Bucket

From the AWS Management Console, search for S3 in the top search bar and click on S3 to access the service.
Click on the Create bucket button.
In the Bucket name field, provide a globally unique name for your bucket (e.g., my-calculator-app).
Select the AWS Region closest to your users.
Scroll down to Bucket settings for Block Public Access, and uncheck Block all public access (since this is a public website). Confirm the warning prompt.
Leave the rest of the settings at their default values and click Create bucket.

Step 3: Upload Your Web Application Files

Once your bucket is created, click on the bucket name in the S3 console to open it.
Click on the Upload button.
Drag and drop your index.html, styles.css, and script.js files into the upload area.
Click Upload at the bottom.

Step 4: Configure the S3 Bucket for Static Website Hosting

With your files uploaded, navigate to the Properties tab in your bucket.
Scroll down to the Static website hosting section and click Edit.
Choose Enable under Static website hosting.
In the Index document field, type index.html.
Optionally, if you want to handle errors, set an Error document (e.g., 404.html), but for a simple app, this can be left blank.
Click Save changes.

Step 5: Make Your Files Public

Go to the Objects tab of your bucket, where your files are listed.
Select each file (e.g., index.html, styles.css, script.js).
Click Actions > Make public.
Confirm the prompt to make the files public.
Step 6: Access Your Website
Go back to the Properties tab of your bucket.
Scroll to the Static website hosting section.
Copy the Endpoint URL provided by S3. This is the public URL of your web application.
Paste the URL into your browser to access your hosted calculator web application.
