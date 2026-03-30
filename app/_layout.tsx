import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "@/global.css"
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoading] = useFonts({
    'sans-regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-semibold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-light': require('../assets/fonts/PlusJakartaSans-Light.ttf'),
    'sans-extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf')
  })

  useEffect(()=>{
    if(fontsLoading){
      SplashScreen.hideAsync();
    }
  },[fontsLoading]);

  if(!fontsLoading){
    return null;
  }

  return <Stack screenOptions={{headerShown: false}} />;
}
