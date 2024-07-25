import React from "react";
import {createConsumer} from "@rails/actioncable";

const URL = "ws://localhost:3000/cable?token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.uXnb7T1GODDZY3eVznsRYoEVxP-bMugD-hiaTjkvL0E";
const consumer = createConsumer(URL);

export const App = () => {
    React.useEffect(() => {
        consumer.subscriptions.create('ChatChannel', {
            connected: () => console.log('connected'),
            disconnected: () => console.log('disconnected'),
            received: data => console.log(data),
        });
    }, []);

    return <React.Fragment>123</React.Fragment>;
};
