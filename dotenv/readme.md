# -------------------------- Dotenv -------------------------- 

Dotenv modules facilitate how to load environment variables in JavaScript .



## The dotenv module

- The dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.


## Environment variables
- Environment variables allow us to manage the configuration of our applications separately from our codebase.
-  Separating configurations makes it easier for our application to be deployed in different environments.
-  Environment variables are variables external to our application which reside in the OS or the container where the production application is running

<b>Note</b> By convention, the variables are written in uppercase letters (e.g. PORT). 


<hr>

Common examples of configuration data that are stored in environment variables include:
- HTTP port
- database connection string
- location of static files
- endpoints of external services

The .env file should never be committed to the source code repository. We must place the file into the .gitignore file. (When using git.)


