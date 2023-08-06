import { useFonts } from "expo-font";

export default function loadFonts() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return fontsLoaded;
  }
}
