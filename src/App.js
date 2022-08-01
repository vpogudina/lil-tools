import React from 'react';
import GetAgentLogs from './AgentLogs/GetAgentLogs';
import CustomSoftphone from './CustomCCP/components/CustomSoftphone';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider, defaultTheme } from "./CustomCCP/theme/index";


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
      <Router>
        <ul>
          <li>
            <Link to="/">To Button</Link>
          </li>
          <li>
            <Link to="/custom-softphone">Custom</Link>
          </li>
          <li>
            <Link to="/get-log-chunk">Log Chunk</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={GetAgentLogs} />
          <Route exact path="/custom-softphone" component={CustomSoftphone} />
          <Route path="/get-log-chunk" component={GetAgentLogs} />
        </Switch>
      </Router>
    </div>
  </ThemeProvider>
  );
}

/* <Route exact path="/custom-softphone" component={CustomSoftphone} /> */
