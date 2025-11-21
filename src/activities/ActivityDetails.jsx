import { useAuth } from "../auth/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getSingleActivity, deleteActivity } from "../api/activities";
import { useNavigate } from "react-router";

export default function ActivityDetails() {
  const { token } = useAuth();

  const { activityId } = useParams();
  console.log("activityDetails, activityId", activityId);
  const [activity, setActivity] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const syncActivity = async () => {
    const oneActivity = await getSingleActivity(activityId);
    setActivity(oneActivity);
  };

  useEffect(() => {
    syncActivity();
  }, [activityId]);

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activityId);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>by {activity.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </>
  );
}
