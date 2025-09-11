import React from 'react'
import Home from './Components/Home/Home';
import { QueryClient , QueryClientProvider } from 'react-query'

function App() {

  const myClient = new QueryClient();
  return <>
  <QueryClientProvider client={myClient}>
    <Home/>
  </QueryClientProvider>
  </>
}

export default App

