import ReactDOM from 'react-dom';
import App from './App';

for (let element of document.getElementsByClassName("transfermovil")){
  ReactDOM.render(
    <App 
      bank={element.getAttribute("bank")} 
      card={element.getAttribute("card")}
      mobile={element.getAttribute("mobile")}
      color={element.getAttribute("color")}
    />,
    element
  );
}
