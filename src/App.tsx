// import  {  useState } from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'
import {  TripProvider } from './lib/context'
import { Toaster } from "@/components/ui/sonner"


const App = () => {
  // const [aiTrip,setAiTrip] = useState("")
  return (
    <>
    <TripProvider>

    <Header/>
    <Outlet/>
     <Toaster />
    </TripProvider>
    </>
  )
}

export default App