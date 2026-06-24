import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProductListPage from "./pages/ProductListPage";
import ProductFormPage from "./pages/ProductFormPage";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerFormPage from "./pages/CustomerFormPage";
import OrderListPage from "./pages/OrderListPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./components/Layout";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/products"
            element={<ProductListPage />}
          />

          <Route
            path="/products/new"
            element={<ProductFormPage />}
          />

          <Route
            path="/customers"
            element={<CustomerListPage />}
          />

          <Route
            path="/customers/new"
            element={<CustomerFormPage />}
          />

          <Route
            path="/orders"
            element={<OrderListPage />}
          />

          <Route
            path="/orders/new"
            element={<CreateOrderPage />}
          />

          <Route
            path="/orders/:id"
            element={<OrderDetailsPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;