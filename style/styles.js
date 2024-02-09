import { StyleSheet } from "react-native";

export const Bstyles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#121212',
        },

    text: {
        fontSize: 16,
        fontFamily: 'variable',
    },
    Maincontainer:{
        marginTop: 20,
        height: 'auto',
        width: 350,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    postContainer:{
        marginTop: 15,
        alignSelf: 'center',
        width: '95%',
        height: 150,
        borderRadius: 0,
        marginBottom: 50,        
    },
    postText: {
        fontSize: 20,
        fontFamily: 'exo',
        paddingBottom: 5,
        textAlign: 'center',
        color: 'snow',
        padding: 10,       
        textShadowColor: '#000',
        textShadowRadius: 2,
        textShadowOffset: { width: 3, height: 3 } 
    },
    btnContainer:{
        display: 'flex',
        flexDirection: 'row'
    }
    ,
    deleteBtn:{
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        width: 150,
        height: 30,
        marginTop: 10,
        marginLeft: 5,
        justifyContent:'center',
        fontSize: 16,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    updateBtn:{
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        width: 150,
        height: 30,
        marginTop: 10,
        justifyContent:'center',
        fontSize: 16,
        borderRadius: 20,
        marginLeft: 20,
        backgroundColor: '#393939',
    },
    btnText:{
        color: 'white',
        fontFamily: 'bebas',
        fontSize: 20,
    }
    ,
    modalContainer:{
        backgroundColor:'#323232',
        position: 'fixed',
        top: '55%',
        width: '100%',
        height: '55%',
        alignSelf: 'center',
        borderRadius: 50,
    },
    modalContent:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop:100,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
    },
    modalTitle:{
        position: 'absolute',
        top: 30,
        fontSize: 24,
        fontFamily: 'bebas',
        color: 'snow'
    },
    modalInput:{
        borderWidth: 3,
        borderColor: '#000',
        width:300,
        height: 50,
        marginBottom: 15,
        borderRadius: 10,
        textAlign: 'center',
        fontFamily: 'exo',
        color: '#000',
        backgroundColor: 'snow',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    modalBtnContainer:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    modalUpdateBtn:{
        borderColor: 'white',
        borderWidth: 2,
        height: 35,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',   
        marginRight: 30,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    modalCancelBtn:{
        borderColor: 'white',
        borderWidth: 2,
        height: 35,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',   
        marginLeft: 30, 
        borderRadius: 10,
        backgroundColor: 'black'
    },
    modalBtnText:{
        color: 'snow',
        fontSize: 20,
        fontFamily: 'bebas'
    },
    Profilecontainer:{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    Profile:{
        display: 'flex',
        flexDirection: 'row',
        width: 400,
        height: 200, 
        padding: 16, 
        marginTop: 60,
        backgroundColor:'transparent', 
        borderRadius: 8,
        alignItems: 'center',
        borderStartColor: 'white',
        borderTopColor: 'white',
        borderLeftWidth: 1,
        borderTopWidth: 1,
    },
    ProfileAvatar:{
        width: 100, 
        height: 100,
        borderRadius: 50,
        marginTop: 20,
    }
    ,
    DataProfile:{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        left: 19.5,
    },
    userProfileName:{
        fontSize: 25,
        fontWeight: 'bold', 
        position: 'absolute',
        top: 20, 
        left: 26.5,
        fontFamily: 'bebas',
        color: '#BAF800'
    },
    userProfileEmail:{
        fontSize: 16, 
        marginTop: 20, 
        fontFamily: 'exo',
        color: '#BAF800',
    },
    userProfileBirth:{
        fontSize: 16, 
        marginTop: 10, 
        fontFamily: 'exo',
        color: '#BAF800'
    }
});