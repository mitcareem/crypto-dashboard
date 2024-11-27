# Crypto Dashboard

## Author: Mohammad Naeem(https://github.com/mitcareem)

## Description
Crypto Dashboard is a dynamic and responsive dashboard built with React, Vite, Tailwind CSS, and Shadcn for styling. It provides a real-time view of cryptocurrency data, including prices, market caps, and other relevant information. The app uses modern web technologies to deliver a smooth user experience with features such as data fetching, pagination, and a dark/light mode toggle.

## Features
- **Real-time cryptocurrency data**: Fetches data from a cryptocurrency API (e.g., CoinGecko).
- **Dark/Light mode toggle**: Switch between dark and light themes using Shadcn for styling.
- **Responsive design**: Fully responsive layout built with Tailwind CSS for a seamless experience across devices.
- **Pagination**: Handles large datasets by paginating results.
- **Search functionality**: Allows users to search for specific cryptocurrencies.
- **Error handling**: Displays error messages if data fetching fails.
- **Loader**: Shows a loading spinner while data is being fetched.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn**: A component library used for modern UI elements and styling.
- **SWR**: React hook for data fetching with caching and revalidation.

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mitcareem/crypto-dashboard.git



### Key Points:
1. **Creating `.env` file**: This step ensures sensitive information like API keys are not hardcoded in your codebase.
2. **Setting environment variables**: The line `VITE_API_KEY=your_api_key_here` should be added to the `.env` file.
3. **Using `.env` in the code**: You can access this API key in your React code like so: `process.env.VITE_API_KEY`.