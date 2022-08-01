import 'amazon-connect-streams'
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const CCP_URL = "https://candeleteoct28.my.gamma.us-west-2.nonprod.connect.aws.a2z.com/connect-gamma/ccp-v2";
const LOGIN_URL = "https://candeleteoct28.my.gamma.us-west-2.nonprod.connect.aws.a2z.com/connect-gamma/ccp-v2";
const REGION = "us-west-2"; 

function InitApp() {
  useEffect(() => {
    const container = document.getElementById("ccp");
    // eslint-disable-next-line no-undef
    connect.core.initCCP(container, {
      ccpUrl: CCP_URL,
      loginUrl: LOGIN_URL,
      loginPopup: true,
      loginPopupAutoClose: true,
      region: REGION,
      softphone: {
        allowFramedSoftphone: true
      }
    });

    // setTimeout(() => {console.log("Waited here");
    // connect.agent(function(agent) { console.log("my agent", agent) });
  
    // }, 10000)
  }, []);

  return (
    <div>
      <App />
      <div id="ccp" style={{ display:'none' }}></div>
    </div>
  )
  
  
}

ReactDOM.render(
  <React.StrictMode>
    <InitApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
