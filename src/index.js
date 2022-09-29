import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import TOS from "./TOS/TOS"
import Contact from "./Contact/Contact"
import Invite from './Invite/Invite'
import Commands from './Commands/Commands'
import Manacube from './Manacube/Manacube'
import NotFound from "./NotFound/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="terms" element={<TOS />} />
          <Route path="contact" element={<Contact />} />
          <Route path="commands" element={<Commands />} />
          <Route path="manacube" element={<Manacube />} />
          <Route path="invite" element={<Invite />} />
          <Route path="*" element ={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="home" />);
