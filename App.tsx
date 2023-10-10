import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

import { Home } from "./src/pages/Home";

import { theme } from "./src/global/styles";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <ThemeProvider theme={theme}>
          <Home /> 
        </ThemeProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

