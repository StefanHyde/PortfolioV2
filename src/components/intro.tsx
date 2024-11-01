export default function Intro() {
  return (
    <div className="flex justify-center h-full w-2/3">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <div className="backdrop-blur-md p-8 ml-6 border-solid border-2 border-primary-500 dark:border-almost-white rounded-md ">
          1
        </div>
        <div className="bg-blue-500">2</div>
        <div className="bg-blue-500">3</div>
        <div className="bg-blue-500">4</div>
        <div className="bg-blue-500">5</div>
      </div>
    </div>
  );
}
