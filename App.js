import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger, Player } from "./renderers";
import { MoveFinger } from "./systems";

export default class BestGameEver extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {name: 'sample'};
    }

    render() {
        return(
            <GameEngine
                style={styles.container}
                systems={[MoveFinger]}
                entities={{
                    0: {position: [40,200], renderer: <Finger />},
                    1: {position: [100,200], renderer: <Finger />},
                    2: {position: [160,200], renderer: <Finger />},
                    3: {position: [220,200], renderer: <Finger />},
                    4: {position: [280,200], renderer: <Finger />},
                    5: {position: [20, 600], renderer: <Player />}
                }}>

                <StatusBar hidden={true} />
                <TextInput
                    placeholder="Type your name"
                    style={{height: 50}}
                    />

            </GameEngine>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);
