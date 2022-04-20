import { Home } from "./pages/Home";
import Global from "./styles/global";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Register } from "./pages/Register";
import { Email } from "./pages/Register/Email";
import { ToastProvider } from "./hooks/ToastContext";

function App() {
  return (
    <>
      <Router>
        <ToastProvider>
        <Global />         
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/entrar" element={<Register />}/>  
              <Route path="/entrar/email" element={<Email />} />                
          </Routes>    
        </ToastProvider>   
      </Router>        
    </>
  );
}

export default App;
