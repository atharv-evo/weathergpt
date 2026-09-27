export default function LoadingState({ type = 'card' }) {
  if (type === 'chart') {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-xl animate-pulse flex items-end justify-between p-4 gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1/6 bg-gray-200 rounded-t-md" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
        ))}
      </div>
    );
  }

  if (type === 'list') {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-xl animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // default card
  return (
    <div className="w-full p-4 rounded-xl border border-border bg-white shadow-sm space-y-4">
      <div className="w-1/3 h-5 bg-gray-100 rounded animate-pulse"></div>
      <div className="w-full h-24 bg-gray-100 rounded-xl animate-pulse"></div>
    </div>
  );
}
