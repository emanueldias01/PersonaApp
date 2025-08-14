import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./stack.routes";


export default function RoutesNavigation(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}