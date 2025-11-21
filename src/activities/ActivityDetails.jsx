import { useAuth } from "../auth/AuthContext";

export default function ActivityDetails() {
  const { token } = useAuth();

  const { activityId } = useParams();

  //   const syncActivities = async () => {
  //     const data = await getActivities();
  //     setActivities(data);
  //   };

  //   useEffect(() => {
  //     syncActivities();
  //   }, []); ????????

  const syncActivity = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      syncActivities();
      activityId = activity.id;
    } catch (e) {
      setError(e.message);
    }
  };

  getSingleActivity();

  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>by {activity.creatorName}</p>
    </>
  );
}
