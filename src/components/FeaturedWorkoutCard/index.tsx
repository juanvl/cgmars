import { Workout } from '../../interfaces/Workout';

interface FeaturedWorkoutCardProps {
  workout: Workout;
}

export function FeaturedWorkoutCard({ workout }: FeaturedWorkoutCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[400px] h-[500px] rounded-lg bg-gradient-to-b from-skypurple to-skyred cursor-pointer p-4">
      <h1 className="font-bold text-white text-2xl text-center">
        {workout.title}
      </h1>
      <div className="w-[50px] h-0.5 bg-white mx-auto my-3"></div>

      <img
        src={workout.thumbnail}
        alt="Trainer photo"
        className="rounded-[50%] overflow-hidden w-[250px] h-[250px] object-cover my-4"
      />

      <div className="flex">
        <strong className="text-white text-lg italic bg-skypurple py-1 px-2 text-center rounded-md">
          {workout.levelTag} level
        </strong>

        <div className="p-1"></div>

        <strong className="text-white text-lg italic bg-skypurple py-1 px-2 text-center rounded-md">
          {workout.impactTag} impact
        </strong>
      </div>

      <div className="p-1"></div>

      <strong className="text-white text-lg italic bg-skypurple py-1 px-2 text-center rounded-md">
        {workout.duration} minutes
      </strong>
    </div>
  );
}
