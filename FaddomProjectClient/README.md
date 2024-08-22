# Faddom – AWS CPU Usage Monitor

## Overview

AWS CPU Usage Monitor is a project designed to extract performance information for an AWS instance and display the CPU usage over time. It consists of a backend server that fetches CPU usage data from AWS CloudWatch and a frontend web application that visualizes this data using charts.

## Components

- **Frontend**: A web UI built with React, Material UI, and `react-charts` for visualizing CPU usage.
- **Backend**: A Fastify server that communicates with AWS CloudWatch to retrieve CPU usage metrics.

## Features

- **Frontend**:

  - Fetches and displays CPU usage data in a time-series chart.
  - User inputs to specify the instance IP address, time period, and sample interval.
  - Animated and responsive UI components using Material UI and `@emotion/react`.

- **Backend**:
  - Retrieves CPU usage data from AWS CloudWatch.
  - Handles requests to fetch data based on provided parameters (IP address, start time, end time, and interval).

## Prerequisites

- Node.js (v18 or later)
- AWS Credentials (Access Key ID, Secret Access Key, and Region)
- `pnpm` (for managing dependencies)

## Getting Started

### Backend

1. **Set up Environment Variables**:
   Create a `.env` file in the root directory of the backend server with the following content:

   ```env
   ACCESS_KEY_ID=your-access-key-id
   SECRET_ACCESS_KEY=your-secret-access-key
   REGION=your-region
   ```

2. **Install Dependencies**:

   ```bash
   cd server
   pnpm install
   ```

3. **Start the Server**:
   ```bash
   pnpm run dev
   ```
   The server will start on `http://localhost:3000`.

### Frontend

1. **Install Dependencies**:

   ```bash
   cd frontend
   pnpm install
   ```

2. **Start the Development Server**:
   ```bash
   pnpm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

## Code Overview

### Frontend

- **`Chart.tsx`**: Component for displaying CPU usage data using `react-charts`.
- **`fetchCpuUsage.ts`**: Function to fetch CPU usage data from the backend API.
- **`Main.tsx`**: Main React component managing state, fetching data, and rendering UI components.

### Backend

- **`server.ts`**: Fastify server setup and configuration.
- **`awsConfig.ts`**: AWS CloudWatch and EC2 integration for fetching CPU usage data.
- **`routes/AWSroutes.ts`**: Route handler for the AWS CPU usage API.

## Project Structure

- **`frontend/`**: Contains the React application and UI components.
- **`server/`**: Contains the Fastify server and AWS integration code.
- **`.env`**: Configuration file for environment variables.

## Development

- **Linting**: ESLint and TypeScript configurations are included. Run `pnpm run lint` to check for issues.
- **TypeScript**: The project uses TypeScript for type safety and better development experience.

## Deployment

Deploy the frontend and backend applications separately, or as a unified solution, depending on your infrastructure.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the maintainers of the libraries and frameworks used in this project.
