import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopePage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopePage />} />
          <Route path="/signin" element={<SignInAndSignOutPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
