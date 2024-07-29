# Tech Blog CMS: A Full-Stack Blogging Platform

## Description

This is a CMS-style blog application built with Express.js, PostgreSQL, and Sequelize. The backend provides RESTful API endpoints to manage blog posts and comments, and uses Handlebars.js for templating. It supports user authentication, allowing developers to create, update, delete, and comment on blog posts. The application follows the MVC (Model-View-Controller) architecture, separating concerns into distinct layers for data management, business logic, and presentation, ensuring a scalable and maintainable codebase.

## Installation 🚀

1. Clone the Repository:

```sh
git clone https://github.com/A-MOHAMED14/Tech-Blog.git
```

2. Navigate to the Project Directory:

```sh
cd Tech-Blog
```

3. Install dependencies:

```sh
npm install
```

4. Set up enviroment variables:

- Create a .env file in the root directory and add your PostgreSQL database credentials:

```sh
DB_NAME=your_database_name
DB_USER=your_postgresql_username
DB_PASSWORD=your_postgresql_password
```

5. Create the database and seed data:

```sh
psql -U <your_postgresql_username> -d <your_database_name> -f db/schema.sql

npm run seed
```
