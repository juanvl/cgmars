export function SkeletonLoading() {
  return (
    <div className="w-full">
      <div role="status" className="animate-pulse">
        <div className="mb-4 h-12 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div className="p-2"></div>

      <div role="status" className="animate-pulse">
        <div className="mb-4 h-[500px] w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}
