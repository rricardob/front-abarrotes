import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Dashboard } from './views/dashboard/Dashboard';
import { Login } from './views/login/Login';
import { Content } from './views/content/Content';
import { Vendedor } from './views/vendedor/Vendedor';
import { Cliente } from './views/cliente/Cliente';
import { Producto } from './views/producto/Producto';
import { Categoria } from './views/categoria/Categoria';
import { Comprobante } from './views/comprobante/Comprobante';
import { ComprobanteMnt } from './views/comprobante/ComprobanteMnt';

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

        <Route path="/producto" element={<Dashboard />}>
          <Route index element={<Producto />} />
        </Route>

        <Route path='/categoria' element={<Dashboard />}>
          <Route index element={<Categoria />} />
        </Route>

        <Route path='/comprobante' element={<Dashboard />}>
          <Route index element={<Comprobante />} />
        </Route>

        <Route path='/comprobanteMnt' element={<Dashboard />}>
          <Route index element={<ComprobanteMnt />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
