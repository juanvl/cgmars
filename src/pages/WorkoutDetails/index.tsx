/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Workout } from '../../interfaces/Workout';
import workouts from '../../services/api/workouts.json';
import { SkeletonLoading } from './components/SkeletonLoading';

export function WorkoutDetails() {
  const { id: workoutId } = useParams<{ id?: string }>();

  const [workout, setWorkout] = useState<Workout>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkout = async () => {
      if (workoutId) {
        const workoutFound = workouts.find((w) => w.id === workoutId);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (workoutFound) {
          setWorkout(workoutFound);
          setIsLoading(false);
        }
      }
    };

    fetchWorkout();
  }, [workoutId]);

  if (isLoading) {
    return (
      <div className="mt-4 p-4">
        <div className="mx-auto max-w-[500px]">
          <SkeletonLoading />;
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center p-4">
      <div className="flex w-[500px] flex-col">
        <div className="flex items-center justify-center gap-4">
          <img
            src={workout?.thumbnail}
            alt="Trainer"
            className="my-4 h-[50px] w-[50px] rounded-[50%] object-cover"
          />
          <h1 className="text-2xl font-bold text-white">{workout?.title}</h1>
        </div>

        <div className="p-2"></div>

        <div className="w-full rounded-lg border bg-white p-4 shadow-md dark:border-secondary dark:bg-primary sm:p-6">
          <video src={workout?.media} width="450" height="250" controls />

          <div className="p-2"></div>

          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {workout?.description}
          </p>

          <ul className="my-4 space-y-3">
            <li>
              <div className="group flex items-center rounded-lg bg-gray-50 p-3 text-center text-base font-bold text-gray-900 dark:bg-secondary dark:text-white">
                <span className="ml-3 flex-1 whitespace-nowrap">
                  {workout?.levelTag} level
                </span>
              </div>
            </li>
            <li>
              <div className="group flex items-center rounded-lg bg-gray-50 p-3 text-center text-base font-bold text-gray-900 dark:bg-secondary dark:text-white">
                <span className="ml-3 flex-1 whitespace-nowrap">
                  {workout?.impactTag} impact
                </span>
              </div>
            </li>
            <li>
              <div className="group flex items-center rounded-lg bg-gray-50 p-3 text-center text-base font-bold text-gray-900 dark:bg-secondary dark:text-white">
                <span className="ml-3 flex-1 whitespace-nowrap">
                  {workout?.duration} minutes
                </span>
              </div>
            </li>
          </ul>

          <Link to="/">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="#fff"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>

              <div className="p-1"></div>

              <strong className="font-normal text-white">Go back</strong>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
