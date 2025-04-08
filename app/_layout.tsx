import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Oswald-Regular': require('./../assets/fonts/Oswald-Regular.ttf'),
    'Oswald-Bold': require('./../assets/fonts/Oswald-Bold.ttf'),
    'Oswald-Medium': require('./../assets/fonts/Oswald-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="(tabs)" />
      
    </Stack>
    );
}
