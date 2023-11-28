import React from "react";
import Navbar from './components/Navbar'
import Chat from "./components/Chat";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] =useAuthState(auth)
  return (
    <div className="max-w-w[728] mx-auto text-center">
      <section className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative">
      <Navbar />
      {user? <Chat/> : null}
      </section>
     
    </div>
  );
}

export default App;
