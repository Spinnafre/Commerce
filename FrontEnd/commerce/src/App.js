import './App.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  let navigate = useNavigate();

  // Obtém os dados da sessionStorage
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem('isAdmin'));

  const getData = () => {
    setToken(sessionStorage.getItem('token'));
    setIsAdmin(sessionStorage.getItem('isAdmin'));
    console.log(token)
  }

  const DeleteUserData = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('isAdmin');
    setToken("");
    navigate("/")
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    getData();
  }, [token])

  return (
    <div className="container">
      <nav
        style={{
          paddingBottom: "1rem",
          marginLeft: "1rem"
        }}
      >
        <h1 style={{
          color: 'white'
        }}>E.Commerce</h1>

        <div style={{
          display: "flex",
          columnGap: "20px"
        }}>
          <Link style={{
            textDecoration: "none",
            color: '#1a0d00',
            cursor: 'pointer',
            margin: '0 5px',
            padding: '2px 6px',
            borderRadius: '4px',
            backgroundColor: '#ffe680'
          }} to="/">Produtos</Link>

          {
            token ? 
            <>
              <Link style={{
                textDecoration: "none",
                color: '#1a0d00',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: '#ffe680'
              }} to="/userinfo">Perfil</Link>

              <p style={{
                textDecoration: "none",
                color: '#1a0d00',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: '#ffe680'
              }} onClick={() => DeleteUserData()}>Logout</p>

              <Link style={{
                textDecoration: "none",
                color: '#1a0d00',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: '#ffe680'
              }} to="/compras">Minhas Compras</Link>
            </>
            : 
            <>
              <Link style={{
                textDecoration: "none",
                color: '#1a0d00',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: '#ffe680'
              }} to="/login">Login</Link>
      
              <Link style={{
                textDecoration: "none",
                color: '#1a0d00',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: '#ffe680'
              }} to="/cadastro">Cadastre-se</Link>
            </>
          }

          {
            isAdmin ? 
            <>
              <Link style={{
                textDecoration: "none",
                color: '#1a0d00',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: '#ffe680'
              }} to="/admin">Painel de Adm.</Link>

              <Link style={{
                textDecoration: "none",
                color: '#1a0d00',
                cursor: 'pointer',
                margin: '0 5px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: '#ffe680'
              }} to="/relatorios">Relatórios</Link>
            </> : ""
          }
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
