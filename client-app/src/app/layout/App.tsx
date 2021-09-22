import React, { useEffect, useState } from "react";
import { Header, List } from "semantic-ui-react";
import { IActivity } from "../models/activity";

function App() {
    const [activities, setActivities] = useState<IActivity[]>([]);
    useEffect(() => {
        fetch("https://localhost:5001/api/activities")
            .then((resp) => resp.json())
            .then((json) => setActivities(json));
    }, []);
    return (
        <div className="App">
            <Header as="h2" icon="users" content="Reactivities" />
            <List items={activities} />
        </div>
    );
}

export default App;
