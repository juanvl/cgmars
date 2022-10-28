import { FeaturedWorkoutCard } from './components/FeaturedWorkoutCard';
import { Header } from './components/Header';

import workouts from './services/api/workouts.json';

function App() {
  return (
    <div>
      <Header />

      <div className="p-4"></div>

      <main className="p-4 flex flex-col items-center">
        <h1 className="font-bold text-white text-4xl text-center">
          Featured Workouts
        </h1>

        <div className="p-8"></div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <div key={workout.id}>
              <FeaturedWorkoutCard workout={workout} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
