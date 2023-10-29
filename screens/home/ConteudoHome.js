import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function ConteudoHome({navigation}) {
  return (
    <View style={editar.conteudoHome}>
      <ScrollView horizontal={false}>
        <View style={editar.productLine}>

        
          <View style={editar.productInfo1}>
          <TouchableOpacity onPress = {() => props.tela.navigate('InfoProduto')}>
            <Image
              style={editar.imgProduct}
              source={{
                uri: 'https://cdn.awsli.com.br/2500x2500/285/285859/produto/135894110/a684dfa64e.jpg',
              }}
            />

            <Text style={editar.productName}>
              Cubo Mágico 3x3x3 Qiyi Warrior W Carbono
            </Text>

            <Text style={editar.productPrice}>R$ 31,41 </Text>
          </TouchableOpacity> 
          </View>
         

          <View style={editar.productInfo2}>
            <Image
              style={editar.imgProduct}
              source={{
                uri: 'https://m.media-amazon.com/images/I/61Q9N7KxHuL._AC_UF894,1000_QL80_.jpg',
              }}
            />
            <Text style={editar.productName}>
              Cubo Mágico 3x3x3 Qiyi Warrior W Carbono
            </Text>

            <Text style={editar.productPrice}>R$ 31,41 </Text>
          </View>
        </View>

        <View style={editar.productLine}>
          <View style={editar.productInfo1}>
            <Image
              style={editar.imgProduct}
              source={{
                uri: 'https://cf.shopee.com.br/file/16df8e03473b96968f92b4cec0a8528c',
              }}
            />
            <Text style={editar.productName}>
              Cubo Mágico 3x3x3 Qiyi Warrior W Carbono
            </Text>

            <Text style={editar.productPrice}>R$ 31,41 </Text>
          </View>

          <View style={editar.productInfo2}>
            <Image
              style={editar.imgProduct}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbOcTtRRYDr3phYzeZish7cntwqQrlcMkTQ&usqp=CAU',
              }}
            />
            <Text style={editar.productName}>
              Cubo Mágico 3x3x3 Qiyi Warrior W Carbono
            </Text>

            <Text style={editar.productPrice}>R$ 31,46 </Text>
          </View>
        </View>

        <View style={editar.productLine}>
          <View style={editar.productInfo1}>
            <Image
              style={editar.imgProduct}
              source={{
                uri: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/543/494/products/hf2ffdeb945f846feb07f95cba79f3ea6y-0e122afa98301d361516749971367450-640-0.jpg',
              }}
            />
            <Text style={editar.productName}>
              Cubo Mágico 3x3x3 Qiyi Warrior W Carbono
            </Text>

            <Text style={editar.productPrice}>R$ 31,41 </Text>
          </View>

          <View style={editar.productInfo2}>
            <Image
              style={editar.imgProduct}
              source={{
                uri: 'https://cdn.awsli.com.br/600x450/1856/1856575/produto/187662681/6167721711.jpg',
              }}
            />
            <Text style={editar.productName}>
              Cubo Mágico 3x3x3 Qiyi Warrior W Carbono
            </Text>

            <Text style={editar.productPrice}>R$ 31,41 </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const editar = StyleSheet.create({
  conteudoHome: {
    display: 'flex',
    flex: 0.6,
    padding: 5,
    alignItems: 'center',
  },

  productLine: {
    height: 280,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  productInfo1: {
    height: 250,
    width: "50%",
    padding: 5,

  },

  productInfo2: {
    height: 250,
    width: "50%",
    padding: 5,

  },

  productName: {
    textAlign: 'center',
  },

  productPrice: {
    textAlign: 'center',
  },

  imgProduct: {
    width: "100%",
    height: 185,
    borderRadius: 5,
    marginBottom: 14,
  },
});
