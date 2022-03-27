import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notification = (props) => {
    return (
        <View style={styles.notification}>
            <Text style={styles.notificationName}>{props.name}</Text>
            <Text style={styles.notificationDescription}>{props.description}</Text>
        </View>
    );
}

const Body = () => {
    return (
        <View style={styles.body}>
            <Notification name="08:00" description="- Colocar luftal." />
            <Notification name="08:30" description="- Colocar still." />
            <Notification name="09:30" description="- Colocar spray avert." />
            <Notification name="14:30" description="- Colocar still." />
            <Notification name="15:00" description="- Colocar cerenia zoetis." />
            <Notification name="15:30" description="- Colocar spray avert." />
            <Notification name="16:00" description="- Colocar luftal." />
            <Notification name="16:30" description="- Colocar still." />
            <Notification name="17:00" description="- Colocar fortekor." />
            <Notification name="20:30" description="- Colocar spray avert." />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#7a1745',
    },
    notification: {
        backgroundColor: '#ffffff',
        padding: 15,
        elevation: 3,
        marginBottom: 20,
        height: 150
    },
    notificationName: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7a1745'
    },
    notificationDescription: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cb4f57'
    }
});

export default Body;
