import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Login from './components/auth/Login';
import UploadImage from './components/UploadImage';
import CameraForm from './components/CameraForm';
import ListenForm from './components/ListenForm';
import SignUp from './components/auth/SignUp';
import PreviewImage from './components/previewImage';
import ResetPassword from './components/auth/ResetPassword';
import Dashboard from '../src/components/Dashboard';
import TextComponent from '../src/components/TextComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route exact path="/" component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/signup" component={SignUp} />
          <Route path="/upload-image" component={UploadImage} />
          <Route path="/camera" component={CameraForm} />
          <Route path="/listen-form" component={ListenForm} />
          <Route path="/preview" component={PreviewImage} />  
          <Route path="/text" component={TextComponent} />  
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;