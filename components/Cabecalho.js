import { Text, View, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style = {editar.telaCabecalho}>
      <Text>Cubo Mágico</Text>
    </View>
  );
}

const editar = StyleSheet.create({
  telaCabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

})