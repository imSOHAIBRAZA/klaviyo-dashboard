
import React, { Fragment,Component } from "react";
import AppRoute from "./routes/index";
import { getItem } from "./utils/localStorage";
import { ToastContainer } from 'react-toastify';

export const Theme = React.createContext();

const App = () => {
    const TOKEN = getItem("accessToken");
    const state = {
        TOKEN
    }
   return( <Fragment>
        <Theme.Provider value={state}>
            <AppRoute />
            <ToastContainer autoClose={8000} />
        </Theme.Provider>
    </Fragment>)
};

export default App

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/admin" render={props => <AdminLayout {...props} />} />
//       <Route path="/auth" render={props => <AuthLayout {...props} />} />
//       <Redirect from="/" to="/admin/index" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
