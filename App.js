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
                    2: {position: [20, 550], renderer: <Player />}
                }}>

                <StatusBar hidden={true} />

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
