import { Workout } from '../../interfaces/Workout';

interface FeaturedWorkoutCardProps {
  workout: Workout;
}

export function FeaturedWorkoutCard({ workout }: FeaturedWorkoutCardProps) {
  return (
    <div className="flex h-[500px] w-[400px] cursor-pointer flex-col items-center justify-center rounded-lg bg-gradient-to-b from-skypurple to-skyred p-4">
      <h1 className="text-center text-2xl font-bold text-white">
        {workout.title}
      </h1>
      <div className="mx-auto my-3 h-0.5 w-[50px] bg-white"></div>

      <img
        src={workout.thumbnail}
        alt="Trainer"
        className="my-4 h-[250px] w-[250px] overflow-hidden rounded-[50%] object-cover"
      />

      <div className="flex">
        <strong className="rounded-md bg-skypurple/60 py-1 px-2 text-center text-lg italic text-white">
          {workout.levelTag} level
        </strong>

        <div className="p-1"></div>

        <strong className="rounded-md bg-skypurple/60 py-1 px-2 text-center text-lg italic text-white">
          {workout.impactTag} impact
        </strong>
      </div>

      <div className="p-1"></div>

      <strong className="rounded-md bg-skypurple/60 py-1 px-2 text-center text-lg italic text-white">
        {workout.duration} minutes
      </strong>
    </div>
  );
}
