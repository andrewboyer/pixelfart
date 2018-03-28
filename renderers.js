import { GameEngine } from 'react-native-game-engine';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const RADIUS = 20;

class Finger extends PureComponent {
    render(){
        const x = this.props.position[0] - RADIUS / 2;
        const y = this.props.position[1] - RADIUS / 2;
        return(
            <View style={[styles.finger, {left: x, top: y}]} />
        );
    }
};

class Player extends PureComponent {

    constructor(props){
        super(props);
        this.state = {text: ''}
    }

    render(){
        return(
            <View style={{
                padding: 10,
                left: this.props.position[0],
                top: this.props.position[1]}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="enter name"
                    onChangeText={(text) => this.setState({text})}
                    />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    finger: {
        borderColor: "#CCC",
        borderWidth: 4,
        borderRadius: RADIUS * 2,
        width: RADIUS * 2,
        height: RADIUS * 2,
        backgroundColor: "pink",
        position: "absolute"
    }
});

export { Finger, Player };
