# Crypto Dashboard  

## Author  
[**Mohammad Naeem**](https://github.com/mitcareem)  

## Live Demo  
[Check out the live demo here](https://crypto-dashboard-livid-nine.vercel.app/)  

## Description  
[Crypto Dashboard](https://crypto-dashboard-livid-nine.vercel.app/) is a dynamic and responsive dashboard built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Shadcn](https://shadcn.dev/) for styling. It provides a real-time view of cryptocurrency data, including prices, market caps, and other relevant information. The app uses modern web technologies to deliver a smooth user experience with features such as data fetching, pagination, and a dark/light mode toggle.  

## Features  
- **[Real-time cryptocurrency data](https://crypto-dashboard-livid-nine.vercel.app/)**: Fetches data from a cryptocurrency API (e.g., [CoinGecko](https://www.coingecko.com/)).  
- **Dark/Light mode toggle**: Switch between dark and light themes using [Shadcn](https://shadcn.dev/) for styling.  
- **Responsive design**: Fully responsive layout built with [Tailwind CSS](https://tailwindcss.com/) for a seamless experience across devices.  
- **Pagination**: Handles large datasets by paginating results.  
- **Search functionality**: Allows users to search for specific cryptocurrencies.  
- **Error handling**: Displays error messages if data fetching fails.  
- **Loader**: Shows a loading spinner while data is being fetched.  

## Tech Stack  
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.  
- **[Vite](https://vitejs.dev/)**: A fast build tool for modern web projects.  
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.  
- **[Shadcn](https://shadcn.dev/)**: A component library used for modern UI elements and styling.  
- **[SWR](https://swr.vercel.app/)**: React hook for data fetching with caching and revalidation.  

## Installation  

### Prerequisites  
- [Node.js](https://nodejs.org/) (v16 or higher)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/mitcareem/crypto-dashboard.git
   cd crypto-dashboard


### Key Points:
1. **Creating `.env` file**: This step ensures sensitive information like API keys are not hardcoded in your codebase.
2. **Setting environment variables**: The line `VITE_API_KEY=your_api_key_here` should be added to the `.env` file.
3. **Using `.env` in the code**: You can access this API key in your React code like so: `process.env.VITE_API_KEY`.



### Key Points:
- The **License** section at the end of the README file tells others that this project is licensed under the **MIT License**.
- Make sure to add a `LICENSE` file to your repository containing the full text of the MIT License (or whichever license you choose).

### MIT License:

```text
MIT License

Copyright (c) [2024] [Mohammad Naeem]

