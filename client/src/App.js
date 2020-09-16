import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import News from './components/pages/News';
import About from './components/pages/About';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NotFound from './components/pages/NotFound';
import NewsState from './context/news/NewsState';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/routing/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? '#15202b' : '#f8dbd5'};
  color: ${(props) => (props.theme.mode === 'dark' ? '#FFF' : '#15202b')};
}

.filter > form > .button {
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? '#6400e4' : 'rgba(38, 50, 56, 0.8)'};
}
`;

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('Alps-Theme');
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('Alps-Theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthState>
        <NewsState>
          <Fragment>
            <Router>
              <Navbar />
              <ToastContainer
                style={{
                  'margin-top': '11.5vh'
                }}
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
              />
              <label class='rocker'>
                <input
                  type='checkbox'
                  onClick={() =>
                    setTheme(
                      theme.mode === 'dark'
                        ? { mode: 'light' }
                        : { mode: 'dark' }
                    )
                  }
                />
                <span class='switch-left'>On</span>
                <span class='switch-right'>Off</span>
              </label>
              <Switch>
                <Route exact path='/' component={Home} />
                <PrivateRoute exact path='/news' component={News} />
                <Route exact path='/privacy' component={Privacy} />
                <Route exact path='/terms' component={Terms} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/about' component={About} />
                <Route path='/' component={NotFound} />
              </Switch>
              <Footer />
            </Router>
          </Fragment>
        </NewsState>
      </AuthState>
    </ThemeProvider>
  );
}

export default App;
