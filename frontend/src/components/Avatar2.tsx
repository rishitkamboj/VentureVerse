

export default function Avatar2({ n }:any) {
  return (
    <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center mb-1">
      <span className="font-medium text-gray-800">{n}</span>
    </div>
  );
}
