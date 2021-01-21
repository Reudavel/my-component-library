import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton from './components/Buttons';
//descubrir como usar el base.scss para estilos globales

const App = () => {
    return <PrimaryButton>Hello world</PrimaryButton>
}

ReactDOM.render(<App/>, document.getElementById("root"));