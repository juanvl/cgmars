import { Link } from 'react-router-dom';
import { FeaturedWorkoutCard } from '../../components/FeaturedWorkoutCard';
import workouts from '../../services/api/workouts.json';

export function Dashboard() {
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-center text-4xl font-bold text-white">
        Featured Workouts
      </h1>

      <div className="p-8"></div>

      <div className="grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {workouts.map((workout) => (
          <Link key={workout.id} to={`workout/${workout.id}`}>
            <FeaturedWorkoutCard workout={workout} />
          </Link>
        ))}
      </div>
    </main>
  );
}
