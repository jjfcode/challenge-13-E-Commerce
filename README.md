# challenge-13-E-Commerce

## Description

This project aims to build the back end for an e-commerce site using Express.js and Sequelize with a PostgreSQL database. The application will provide RESTful API endpoints to manage categories, products, and tags for an online retail platform. This README will guide you through the setup, functionality, and usage of the application.

 --- 

### Table of Contents

-[Features](#features)

-[Installation](#installation)

-[Usage](#usage)

-[Repo](#repo)

-[Video](#video)

-[Credits](#credits)

-[License](#license)

## Features


- Connect to a PostgreSQL database using Sequelize

- Perform CRUD operations on categories, products, and tags

- Use environment variables to manage sensitive information

- Comprehensive API testing with Insomnia Core

 
## Installation

Clone the repository:

```
git clone https://github.com/jjfcode/challenge-13-E-Commerce
```
Install the dependencies:
```
npm i
```
Set up your PostgreSQL database and create a .env file with your credentials:

```
USER_NAME=your_db_username
PASSWORD=your_db_password
DB_NAME='ecommerce_db'
````
Run Postgres:

```
cd db
psql -U postgres
\i schema.sql
```

 --- 

## Usage

To use this application, simply run the following command in your terminal:


```
npm run seed
npm start
now you can used Insomnia
```

## **Repo:**

[Github Repo](https://github.com/jjfcode/challenge-13-E-Commerce)

---

## **Video:**

[Video](https://drive.google.com/file/d/14lBCenbAaL36Uz6q4loymZ95qGp20mVC/view?usp=sharing)

## Credits

I used [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) and [CHAT & ASK AI](https://askaichat.app/) for help on my README.
 
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
