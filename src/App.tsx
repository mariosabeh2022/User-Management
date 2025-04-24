import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import LoadingPage from "./Components/Pages/LoadingPage";
import LoginPage from "./Components/Pages/LoginPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import CreateUser from "./Components/Pages/CreateUser";
import { useEffect, useState } from "react";
import EditUser from "./Components/Pages/EditUser";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import { AuthenticationRoute } from "./Routes/AuthenticationRoute";
import Shared from "./layouts/Shared";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient=new QueryClient();
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <AuthenticationRoute>
              <LoginPage />
            </AuthenticationRoute>
          }
          errorElement={<NotFoundPage />}
        />
        <Route path="/dashboard" element={<Shared />}>
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/dashboard/new" element={<CreateUser/>}/>
          <Route path="/dashboard/edit/:id" element={<EditUser/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route
          path="/login"
          element={
            <AuthenticationRoute>
              <LoginPage />
            </AuthenticationRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );
  if (isLoading) return <LoadingPage />;
  else return <QueryClientProvider client={queryClient}><RouterProvider router={router} /></QueryClientProvider>;
}

export default App;
