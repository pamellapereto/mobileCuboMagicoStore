import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Botoes(props) {
  return (
    <View style={editar.botao}>

      <TouchableOpacity
        onPress={() => props.navegacaoBotao.navigate('Home')}
        style={editar.btn}>
        <Text style={editar.textoBotao}>Login</Text>
        <MaterialCommunityIcons name="login" size={24} color="#00FF7F" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navegacaoBotao.navigate('Cadastro')}
        style={editar.btn2}>
        <Text style={editar.textoBotao2}>Cadastrar</Text>
        <FontAwesome name="user-plus" size={24} color="#FF1493" />
      </TouchableOpacity>
    </View>
  );
}

const editar = StyleSheet.create({
  textoBotao: {
    color: '#00FF7F',
    fontSize: 19,
    paddingRight: 7,
  },

  botao: {
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
  },

  btn: {
    borderColor: '#00FF7F',
    borderWidth: 3.5,
    margin: 20,
    padding: 15,
    borderRadius: 30,
    width: 160,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  btn2: {
    borderColor: '#FF1493',
    borderWidth: 3.5,
    margin: 20,
    padding: 15,
    borderRadius: 30,
    width: 160,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textoBotao2: {
    color: '#FF1493',
    fontSize: 19,
    paddingRight: 7,
  },
});


















