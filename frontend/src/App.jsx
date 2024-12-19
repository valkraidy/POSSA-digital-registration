import { Route, Routes, BrowserRouter } from "react-router-dom";
import  HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage";




const App = () => {
  return (
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/LoginPage" element={<LoginPage />}/>
    
      </Routes>
     </BrowserRouter>

  );
};

export default App;
