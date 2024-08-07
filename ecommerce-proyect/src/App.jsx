import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import NotFound from "./routes/NotFound";
import { useContext, useState } from "react";
import { useCart } from "./hooks/useCart";
import useFetch from "./hooks/useFetch";
import Products from "./components/products/Products";
import Header from "./components/header/Header";
import CartModal from "./components/cartModal/CartModal";
import { CartProvider } from "./services/cartContext/CartContext";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Protected from "./routes/Protected";
import UserAdmin from "./components/userAdmin/UserAdmin";
import ProductDetails from "./components/productDetails/ProductDetails";
import NewProduct from "./components/newProduct/NewProduct";
import {
  AuthenticationContext,
  AuthenticationContextProvider,
} from "./services/authentication/authentication.context";
import PaymentsSeccion from "./components/paymentsSeccion/PaymentsSeccion";
import Init from "./components/init/Init";
import Message from "./components/message/Message";
import ProtectedEditor from "./routes/ProtectedEditor";
import Invoice from "./components/invoice/Invoice";
import ProtectedUser from "./routes/ProtectedUser";

function App() {
  const {
    data: users,
    loading,
    error,
    addData: addUser,
    deleteData: deleteUser,
    updateData: updateUser,
  } = useFetch("http://localhost:8000/users");

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
    addData: addProduct,
    deleteData: deleteProduct,
    updateData: updateProduct,
  } = useFetch("http://localhost:8000/products");

  const {
    data: invoices,
    loading: loadingInvoice,
    error: errorInvoice,
    addData: addInvoice,
    deleteData: deleteInvoice,
    updateData: updateInvoice,
    getLastId,
  } = useFetch("http://localhost:8000/invoice");

  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();
  const { user } = useContext(AuthenticationContext);

  const addUserHandler = (newUser) => {
    addUser(newUser);
  };

  const addProductHandler = (newProduct) => {
    addProduct(newProduct);
  };

  const deleteUserHandler = (id) => {
    deleteUser(id);
  };

  const deleteProductHandler = (id) => {
    deleteProduct(id);
  };

  const updateUserHandler = (id, data) => {
    updateUser(id, data);
  };

  const updateProductHandler = (id, data) => {
    updateProduct(id, data);
  };

  const router = createBrowserRouter([
    {
      path: "/register",
      element: (
        <>
          <div className="flex justify-center items-center min-h-screen bg-SurfImage bg-cover bg-center">
            <Register />,
          </div>
        </>
      ),
    },
    {
      path: "/",
      element: <Navigate to="/init" replace />,
    },
    {
      path: "/login",
      element: (
        <>
          <div className="flex justify-center items-center min-h-screen bg-SurfImage bg-center bg-cover">
            <Login />,
          </div>
        </>
      ),
    },

    {
      path: "/NewProduct",
      element: (
        <>
          <ProtectedEditor>
            <Header
              onCartOpen={() => setIsModalOpen(true)}
              onDelete={deleteUserHandler}
            />
            <CartModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
            <main className="flex-grow bg-gray-100">
              <div className="flex items-center justify-center flex-col mt-24 mx-12 rounded-xl p-8 bg-gray-50 shadow-lg">
                <h1 className="text-indigo-600 text-4xl font-bold mb-8 ">
                  New Product
                </h1>
                <div className="mb-8">
                  <NewProduct onAddProduct={addProductHandler} />
                </div>
              </div>
            </main>
            <div className="mt-6 bg-gray-300">
              <Footer />
            </div>
          </ProtectedEditor>
        </>
      ),
    },
    {
      path: "/home",

      element: (
        <>
          <Header
            onCartOpen={() => setIsModalOpen(true)}
            onDelete={deleteUserHandler}
            onUpdate={updateUserHandler}
          />

          <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-white  pb-12">
            <div className="w-2/3 m-auto ">
              <Products
                products={products}
                onDelete={deleteProductHandler}
                onUpdate={updateProductHandler}
              />
            </div>
          </div>
          <CartModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <Footer />
        </>
      ),
    },
    {
      path: "/invoice",
      element: (
        <>
          <ProtectedUser>
            <div className=" bg-[#7F5539] min-h-screen">
              <Invoice invoice={invoices} />
            </div>
          </ProtectedUser>
        </>
      ),
    },
    {
      path: "/home/:id",
      element: (
        <>
          <Header
            onCartOpen={() => setIsModalOpen(true)}
            onDelete={deleteUserHandler}
          />
          <CartModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <div className="flex justify-center items-center bg-gray-100">
            <ProductDetails />
          </div>
          <Footer />
        </>
      ),
    },
    {
      path: "/users",
      element: (
        <Protected>
          <UserAdmin
            users={users}
            onAddUser={addUserHandler}
            onDeleteUser={deleteUserHandler}
            onUpdateUser={updateUserHandler}
          />
        </Protected>
      ),
    },
    {
      path: "/payments",
      element: (
        <div className="min-h-screen overflow-hidden">
          <PaymentsSeccion onAddInvoice={addInvoice} getLastId={getLastId} />,
        </div>
      ),
    },
    {
      path: "/init",
      element: (
        <div className="flex flex-col h-screen overflow-hidden">
          <Message />
          <Init />
        </div>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <CartProvider>
      <AuthenticationContextProvider>
        <RouterProvider router={router} />
      </AuthenticationContextProvider>
    </CartProvider>
  );
}

export default App;
