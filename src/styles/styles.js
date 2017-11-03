import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        padding: 20
    },

    header:{
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderColor: '#d4d4d4'
    },
    input:{
        alignSelf: 'stretch',
        borderColor: '#f2f2f2',
        borderRadius: 3,
        marginTop: 20,
        fontSize: 16,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    loading:{
        marginTop: 20
    },
    containerMovie:{
        flexDirection: 'row',
        marginTop: 20,
        paddingTop:20,
    },
    poster:{
        width: 120,
        height: 172
    },
    infoContainerMovie:{
        marginLeft: 10,
        width: 200
    },
    title:{
        color: '#666',
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        color: '#ccc',
        marginTop: 10,
        fontSize: 14,
        lineHeight: 20,
      },
      button: {
        backgroundColor: '#069',
        alignSelf: 'stretch',
        height: 30,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 20,
      },
    
      buttonText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold'
      },
});

export default styles;