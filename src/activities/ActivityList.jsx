import { useState } from "react";

import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router";

export default function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
          // syncActivities={syncActivities}
        />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  const { token } = useAuth();

  return (
    <li>
      <Link to={`/activityList/${activity.id}`}>
        <p>{activity.name}</p>
      </Link>
    </li>
  );
}
