import React from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import styles from '../styles/styles';

import Movie from '../components/Movie';

export default class Search extends React.Component{

    state = {
        search: '',
        movie: null,
        loading: false,
    };

    fetchMovies = async (search) => {
        if (search.length > 0) {
            this.setState({ loading: true });
            try {
                const response = await fetch(`https://netflixroulette.net/api/api.php?title=${search}`);
                if(!response.ok) throw {};
                const movie = await response.json();
                this.setState({ movie, loading: false });
            } catch (error) {
                this.setState({ movie: null, loading: false });
            }
        }else{
            this.setState({ movie: null });
        }
    };

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Buscar filmes..."
                        onChangeText={this.fetchMovies}
                    />
                    {this.state.loading &&
                    <ActivityIndicator
                        style={styles.loading}
                        color="#666"
                        size="small"
                    />
                    }

                    { this.state.movie &&
                        <Movie
                            movie={this.state.movie}
                        />
                    }

                </View>
            </View>
        );
    }
}

