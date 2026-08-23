import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'red',
        alignItems: 'center',       // Centraliza a imagem horizontalmente
        justifyContent: 'center'     // Centraliza a imagem verticalmente
    },
    boxMid:{
        //height:Dimensions.get('window').height/4,
        width:'100%',
        //backgroundColor:'green',
        paddingHorizontal:37,
        marginVertical: 20
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'blue'
        alignItems:'center',
        //justifyContent:'center'
        marginTop: 20
    },
    // Adicione este estilo para a imagem
    logo:{
        width: 80,                  // Defina a largura menor aqui
        height: 80,                 // Defina a altura menor aqui
        resizeMode: 'contain'        // Garante que a imagem não mude de proporção
    },
    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },
    titleInput:{
        marginLeft:5,
        color:themas.Colors.gray,
        marginTop:20
    },
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.Colors.lightGray,
        borderColor:themas.Colors.lightGray
    },
    Input:{
        height:'100%',
        width:'90%',
        borderRadius:40,
        paddingLeft:5
    },
    button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.Colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textButton:{
        fontSize:16,
        color:themas.Colors.bgScreen,
        fontWeight:'bold'
    },
    textBottom:{
        fontSize:16,
        color:themas.Colors.gray
    },
    

})
