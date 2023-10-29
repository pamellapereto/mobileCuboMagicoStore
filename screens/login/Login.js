import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

import Botoes from '../../components/Botoes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../home/Home';
import Cadastro from '../cadastro/Cadastro';

const Stack = createStackNavigator();


export default function Login() {

  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator
        initialRouteName="Logar"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logar" component = {Logar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


function Logar({navigation}) {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={editar.telaCadastro}>
      <View style={editar.campo}>
        <TextInput
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={(value) => setEmail(value)}
          style={editar.textoCampo}
          placeholderTextColor="#FFFFFF"
        />
      </View>

      <View style={editar.campo}>
        <TextInput
          secureTextEntry
          placeholder="Digite sua senha"
          keyboardType="default"
          value={senha}
          onChangeText={(value) => setSenha(value)}
          style={editar.textoCampo}
          placeholderTextColor="#FFFFFF"
        />
      </View>

     <Botoes navegacaoBotao = {navigation}/>
    </View>
  )
}

const editar = StyleSheet.create({
  telaCadastro: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },

  campo: {
    borderColor: '#FFFFFF',
    borderWidth: 3.5,
    margin: 15,
    padding: 15,
    borderRadius: 30,
  },

  textoCampo: {
    color: '#FFFFFF',
    fontSize: 19,
    textAlign: 'left',
  },
});
