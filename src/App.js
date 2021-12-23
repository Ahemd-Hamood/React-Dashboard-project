import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home"

import { Switch, Route } from "react-router-dom"
import UsersInfoList from "./Pages/UsersInfoList/UsersInfoList"
import EditUser from "./Pages/EditUser/EditUser"
import CreateUser from "./Pages/CreateUser/CreateUser"
import ProductList from "./Pages/ProductList/ProductList"
import ProductEdit from "./Pages/ProductEdit/ProductEdit"
import CreateProduct from "./Pages/CreateProduct/CreateProduct"

function App() {
 return (
  <>
   <Layout>
     
    <Switch>

     <Route exact path="/">
      <Home />
     </Route>

     <Route path="/users">
      <UsersInfoList />
     </Route>

     <Route path="/user/edit/:id">
      <EditUser />
     </Route>

     <Route path="/user/create">
      <CreateUser />
     </Route>

     <Route path="/products">
      <ProductList />
     </Route>

     <Route path="/product/edit/:id">
      <ProductEdit />
     </Route>

     <Route path="/product/create">
      <CreateProduct />
     </Route>

    </Switch>

   </Layout>
  </>
 )
}

export default App
