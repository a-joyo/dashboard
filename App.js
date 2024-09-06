import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardV2 from "./components/Dashboard/DashboardV2";
import ImportSearch from "./components/Imports/ImportSearch";
import ImportsForm from "./components/Imports/ImportsForm";
import Reconciliation from "./components/Reconciliation/Reconciliation";
import Transactions from "./components/Transactions/Transactions";
import Reports from "./components/Reports/Reports";
import Preferences from "./components/Preferences/Preferences";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import { Auth, Hub } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./components/SignInComponents/Header";
import { Footer } from "./components/SignInComponents/Footer";
import { SignInHeader } from "./components/SignInComponents/SignInHeader";
import { SignInFooter } from "./components/SignInComponents/SignInFooter";
import { S3DataProvider } from "./store/S3DataProvider";
import ReconciliationMatcher from "./components/Reconciliation/ReconciliationMatcher";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "dashboard", element: <DashboardV2 />},
      { path: "imports", element: <ImportSearch /> },
      { path: "imports/:coinType", element: <ImportsForm /> },
      { path: "reconciliation", element: <Reconciliation /> },
      { path: "reconciliation/matcher", element: <ReconciliationMatcher /> },
      { path: "transactions", element: <Transactions /> },
      { path: "reports", element: <Reports /> },
      { path: "preferences", element: <Preferences /> },
    ],
  },
]);

function App({ signOut, user }) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  useEffect(() => {
    const fetchUserToken = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log("JWT Token:", user.signInUserSession.idToken.jwtToken);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signIn") {
        fetchUserToken();
      }
    });

    fetchUserToken();
  }, []);
  const token = user.signInUserSession.idToken.jwtToken;

  localStorage.setItem("token", token);
  localStorage.setItem("user", user.username);
  return (
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">

            <main className="content">
              <S3DataProvider>
                <RouterProvider router={router} />
              </S3DataProvider>
            </main>
          </div>
      </ThemeProvider>
      </ColorModeContext.Provider>

  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter,
    },
    Footer,
  },
});
