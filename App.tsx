import "./i18n.config";
import React, { useEffect, useState } from "react";
import { I18nManager, StatusBar } from "react-native";
import MainNavigator from "./src/navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import { Colors } from "./src/common/foundation";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 100);

  if (!loading) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    );
  }
};

export default App;
