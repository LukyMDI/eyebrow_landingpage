export default function FormSkeleton() {
    return (
        <div className="flex w-full h-full flex-col items-center justify-evenly border border-solid border-c_purpleC rounded bg-white">
            <div className="flex flex-col items-center w-5/6 h-[30px] relative">
                <div className="animate-pulse bg-gray-300 rounded mb-5 w-full h-full" />
            </div>
            <div className="flex flex-col items-center w-5/6 h-[30px] relative">
                <div className="animate-pulse bg-gray-300 rounded mb-5 w-full h-full" />
            </div>
            <div className="flex flex-col items-center w-5/6 h-[30px] relative">
                <div className="animate-pulse bg-gray-300 rounded mb-5 w-full h-full" />
            </div>
            <div className="w-5/6 flex justify-centerh-[30px] h-[30px]">
                <div className="animate-pulse bg-gray-300 rounded mb-5 w-full h-full" />
            </div>
        </div>
    );
}
