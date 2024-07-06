
export default function Avatar({ n }:any) {
    return (
        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mb-1">
            <span className="font-medium text-white-700">{n}</span>
        </div>
    );
}


