# Build a REST API with Node.js, Express, and MySQL

Building a MySQL Database Connection with Node.js and Express

## Setting up table and data

### Parameters Connection for MySQL

Create a new connection

![Parameters Connection for MySQL](./screenshots/myqsl-parameters-for-the-connection.png)

### Create the Database and Table

- Run this query to create a new database:

```sql
CREATE DATABASE IF NOT EXISTS testdb;
```

- Run this query to use the above created database:

```sql
USE testdb;
```

- Run this create query to create a new table named users:

```sql
CREATE TABLE IF NOT EXISTS users (
id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL
);
```

- After the creation of the table run this command to insert some values into this table:

```sql
INSERT INTO users(name, email) VALUES
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Alice Johnson', 'alice.johnson@example.com'),
('Bob Brown', 'bob.brown@example.com'),
('Charlie Davis', 'charlie.davis@example.com'),
('Eve White', 'eve.white@example.com'),
('Frank Black', 'frank.black@example.com'),
('Grace Green', 'grace.green@example.com'),
('Hank Blue', 'hank.blue@example.com'),
('Ivy Yellow', 'ivy.yellow@example.com');

```
