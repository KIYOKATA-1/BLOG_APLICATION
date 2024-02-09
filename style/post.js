import { StyleSheet } from "react-native";


export const Pstyles = StyleSheet.create({
    PostContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    inputContainer:{
        display:'flex',
        flexDirection: 'row'
    },
    textInput:{
        width: 320,
        fontSize: 16,
        padding: 15,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: 'transparent',
        borderBottomColor: '#BAF800',
        borderBottomWidth: 2,
        color: 'white',
    },
    postBtn: {
        backgroundColor: 'transparent',
        width: 220,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 5,
        marginTop: 20,
        borderRadius: 5,
        borderColor: '#BAF800',
        borderWidth: 2,
    },
    clearAllBtn:{
        color: '#BAF800',
        backgroundColor: 'transparent',
        width: 220,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 5,
        marginTop: 20,
        borderRadius: 5,
        borderColor: '#BAF800',
        borderWidth: 2,
    },
    clearAllBtnText:{
        fontSize: 20, 
        fontFamily: 'exo', 
        textAlign: 'center'
    }
})