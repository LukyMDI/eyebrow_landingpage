export default function MiniBoxServices({ title, icon }) {
    return (
        <div className="border flex flex-col items-center justify-evenly gap-3 font-bold text-center p-2 col-span-1 rounded    md:p-5">
            <div className="text-white text-2xl">{icon}</div>
            <span className="md:text-lg">{title}</span>
        </div>
    );
}
