# Expense.

A finance tracker built with Vue.js

Deployed app: https://quiet-spire-74175.herokuapp.com

# Tech Overview
    User Authentication - Passport.js Passport-Local Strategy (Connect style middleware)
    Framework - Vue.js with bootstrap and CSS for styling
    Image Capture - HTML and AWS S3 for image storage
    Database - MySQL, Sequelize, JawsDB

# Understanding the application
    User visits page to create an account. After creating account and with every login they are routed to their dashboard where they can view and update their expenses and budgets
    The dashboard consists of 4 elements: Receipt Que, Budgets, Transactions, and Upcoming bills
    The user will manually keep the dashboard information up to date by adding in all of their expenses.

# To run on local machine:

    1. clone repository
    2. npm i - run this in root and in Expense/client directory
    3. create .env file to store root password for MySQL and AWS credentials
    4. run models/schema.sql in your local MySQL server
    5. navigate to Expense/client and type npm run build in CLI
    6. After build completed navigate to root and type node server.js
    7. go to localhost:NNNN in your browser

# Developer Credits

Hunter Trammell:
- Github: https://github.com/huntertrammell
- Portfolio: https://huntertrammell.github.io/

Ryan Freeman:
- Github: https://github.com/RJFreeman77
- Portfolio: 

David Knittel:
- Github: https://github.com/djknit
- Portfolio: https://djknit.github.io

Douglas Boyce:
- Github: https://github.com/douglasboyce
- Portfolio: https://douglasboyce.github.io
