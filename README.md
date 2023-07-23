# Todo App

This is a Ruby on Rails project with a client (frontend) built with React Native.

## Getting Started

### Prerequisites

- Ruby (>= 2.7.0)
- Ruby on Rails (>= 6.0)
- [Your Frontend Framework Here]

### Installation

1. Clone the repository:

```bash
git clone git@github.com:morehwachege/rn-todo-front.git
cd rn-todo-front
```

Install the required gems:
```bash
bundle install
```

Install the client dependencies:
```bash
cd client
npm install   # Or yarn install
cd ..
```

## Configuration
Database Setup:
```bash
rails db:create
rails db:migrate
```

## Running the Application
To start both the Rails server and the client (frontend) together using Foreman:

```bash
foreman start -f Procfile.dev
```
This command will start both the Rails server and your client application, as specified in the Procfile.dev. The Rails server will run on ```http://localhost:3000```, and your client application will run on a different port (e.g., ```http://localhost:3001```).

Contributing
We welcome contributions! To contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your changes.
Make your changes and commit them.
Push the changes to your fork.
Submit a pull request with a clear description of your changes.

# License

MIT License

Feel free to modify it based on your project's specific requirements and instructions.




