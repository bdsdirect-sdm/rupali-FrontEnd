// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// const queryClient=new QueryClient();

// root.render(
//   <QueryClientProvider client={queryClient}>
//     <App/>
//   </QueryClientProvider>

// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);


