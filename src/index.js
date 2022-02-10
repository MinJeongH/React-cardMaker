import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app.jsx';
import AuthService from './service/auth_sevice.js';
import ImageUploader from './service/image_uploader.js';
import ImageFileInput from './component/image_file_input/image_file_input.jsx';
import CardRepository from './service/card_repository.js';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo(props => (<ImageFileInput {...props} imageUploader={imageUploader} />));

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);
