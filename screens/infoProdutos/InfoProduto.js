import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function InfoProduto() {
  return (
    <ScrollView horizontal={false}>
      <View style={editar.containerFotos}>
        <ScrollView horizontal={true}>
          <Image
            source={{
              uri: 'https://curubik.com/cdn-cgi/image/format=auto/https://www.curubik.com/media/productos/img/moyu-weilong-gts3-magnetic-stickerless-3x3x3.jpg',
            }}
            style={editar.imgProduto}
          />

          <Image
            source={{
              uri: 'https://curubik.com/cdn-cgi/image/format=auto/https://www.curubik.com/media/productos/img/61qEjcZztiL._SX466_.jpg',
            }}
            style={editar.imgProduto}
          />

          <Image
            source={{
              uri: 'https://curubik.com/cdn-cgi/image/format=auto/https://www.curubik.com/media/productos/weilong-gts-3m.jpg',
            }}
            style={editar.imgProduto}
          />
        </ScrollView>
      </View>

      <View style={editar.informacoesProduto}>
        <Text style={editar.tituloProduto}>Cubo mágico</Text>
      
        </View>
    </ScrollView>
  );
}

const editar = StyleSheet.create({
  imgProduto: {
    width: 270,
    height: 285,
    borderRadius: 13,
    marginRight: 10,
  },

  containerFotos: {
    flex: 0.4,
    alignItems: 'center',
    paddingTop: 30,
  },
});
