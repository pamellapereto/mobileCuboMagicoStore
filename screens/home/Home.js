import { View, Text, StyleSheet } from 'react-native';
import Banner from '../../components/Banner';
import ConteudoHome from './ConteudoHome';
import Cabecalho from '../../components/Cabecalho';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Oferta from '../loja/Oferta';
import CuboMagico from '../loja/CuboMagico';
import InfoProduto from '../infoProdutos/InfoProduto';

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TelaPrincipal} />
        <Drawer.Screen name="Cubos Mágicos" component={CuboMagico} />
        <Drawer.Screen name="Ofertas" component={Oferta} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function TelaPrincipal() {
  return (
    <View style={editar.telaHome}>
      <Cabecalho />

      <View style={editar.banner}>
        <Banner />
      </View>

      <ConteudoHome />
    </View>
  );
}

const editar = StyleSheet.create({
  telaHome: {
    display: 'flex',
    flex: 1,
  },

  banner: {
    backgroundColor: '#FFD700',
    flex: 0.26,
  },
});
