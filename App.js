/* Dependência utilizada como um espaço no código em que serão guardadas
as telas nas quais haverá navegação */
import { NavigationContainer } from '@react-navigation/native';

/* Dependência utilizada para auxiliar na identificação dos gestos do usuário
(por exemplo, o deslizar do dedo na tela) */
import 'react-native-gesture-handler';

import Login from './screens/login/Login';

import InfoProduto from './screens/infoProdutos/InfoProduto';

import Home from './screens/home/Home';
/* Dependência utilizada para criar a navegação empilhada, ou seja,
se o usuário clicar na tela Home e em seguida, por exemplo, clicar na tela
Carrinho, ele conseguirá retornar à tela Home deslizando o seu dedo */
import { createStackNavigator } from '@react-navigation/stack';

/* Constante criada para executar a navegação entre as telas */
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InfoProduto"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="InfoProduto" component={InfoProduto} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
