# Tech Blog CMS: A Full-Stack Blogging Platform

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

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

## Usage 🏗️

To start the application, run the following command:

```sh
npm run start
```

This will sync the Sequelize models to your PostgreSQL database, and will then start the server. The server will be running on http://localhost:3001

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:

```sh
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them with descriptive messages:

```sh
git commit -m "Add new feature: your feature description"
```

4. Push your changes to your forked repository:

```sh
git push origin feature/your-feature-name
```

5. Open a pull request to the main repository, describing your changes in detail.

## License 📄

This project is licensed under the MIT License. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the original copyright notice and permission notice are included in all copies or substantial portions of the software. For more details, see the MIT [LICENSE](https://opensource.org/licenses/MIT) file.
