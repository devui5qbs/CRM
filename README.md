# CRM Project Readme

This repository contains the CRM (Customer Relationship Management) project, which is divided into backend and frontend components.

## Getting Started

To start the project, follow these steps:

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [Node.js website](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/crm.git
   ```

2. Change into the project directory:

   ```bash
   cd crm
   ```

3. Install dependencies for both the backend and frontend:

   ```bash
   npm install
   cd back && npm install
   cd ../client && npm install
   ```

### Development

To run the project in development mode, you can use the following script:

```bash
npm run dev
```

This command will concurrently start both the backend and frontend development servers.

Alternatively, you can start them individually:

```bash
npm run start:backend  # Start the backend server
npm run start:frontend # Start the frontend server
```

The backend server runs on `http://localhost:3000`, and the frontend server runs on `http://localhost:8080`. You can access the application by navigating to these URLs in your web browser.

### Project Structure

- The backend code is located in the `back` directory.
- The frontend code is located in the `client` directory.

Feel free to explore each directory for more details on the project structure.

## Versioning

This project uses [Semantic Versioning](https://semver.org/) for versioning. The current version is `0.0.0`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Concurrently](https://www.npmjs.com/package/concurrently) for simplifying the concurrent execution of commands.

Happy coding!