import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./Features/menu/Menu";
import Cart from "./Features/cart/Cart";
import Order, { loader as orderLoader } from "./Features/orders/Order";
import { action as updateOrderAction } from "./Features/orders/UpdateOrder";
import CreateOrder, {
  action as createOrderAction,
} from "./Features/orders/CreateOrder";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action: updateOrderAction,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
