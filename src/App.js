import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Dashboard } from './views/dashboard/Dashboard';
import { Login } from './views/login/Login';
import { Content } from './views/content/Content';
import { Vendedor } from './views/vendedor/Vendedor';
import { Cliente } from './views/cliente/Cliente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Content />} />
        </Route>

        <Route path="/vendedor" element={<Dashboard />}>
          <Route index element={<Vendedor />} />
        </Route>

        <Route path="/cliente" element={<Dashboard />}>
          <Route index element={<Cliente />} />
        </Route>

        {/* <Route path="vendedor" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
