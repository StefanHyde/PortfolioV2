export default function BlogPostBlockSkeleton() {
  return (
    <div className="h-80 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-800">
      <div className="flex h-full flex-col overflow-hidden rounded-md">
        <div className="relative h-48 w-full overflow-hidden rounded-md">
          <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700"></div>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700"></div>
          <div className="mt-2 h-4 w-1/2 bg-gray-300 dark:bg-gray-700"></div>
          <div className="mt-2 h-4 w-3/4 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
