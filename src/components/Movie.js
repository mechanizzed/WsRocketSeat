import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import styles from '../styles/styles';

export default class Movie extends React.Component{
    render(){
        return(
            <View style={styles.containerMovie}>
                <Image
                    style={styles.poster}
                    resizeMode="contain"
                    source={{
                        uri: 'link',
                        width: 276,
                        height: 395,
                    }}
                />
                <View style={styles.infoContainerMovie}>
                    <Text style={styles.title}>Title movie</Text>
                    <Text 
                        style={styles.description}
                        numberOfLines={5}
                        ellipsizeMode="tail"
                    >
                        Description movie
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {}}
                    >
                        <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}