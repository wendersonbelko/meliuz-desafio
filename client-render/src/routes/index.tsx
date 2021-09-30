import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { 
  Character,
  Characters,
} from '../pages';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
            component={Characters}
            path="/characters"
            exact
          />
          <Route
            component={Character}
            path="/character/:id"
            exact
          />
      </Switch>
    </Router>
  );
};
