import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'red',
        alignItems: 'center',       // Centraliza a imagem horizontalmente
        justifyContent: 'center'     // Centraliza a imagem verticalmente
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        backgroundColor:'green'
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'blue'
    },
    // Adicione este estilo para a imagem
    logo:{
        width: 80,                  // Defina a largura menor aqui
        height: 80,                 // Defina a altura menor aqui
        resizeMode: 'contain'        // Garante que a imagem não mude de proporção
    },
    text:{
        fontWeight:'bold',
        marginTop:40
    }

})
