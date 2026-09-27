export default function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl border border-border shadow-sm min-h-[200px]">
      {Icon && (
        <div className="mb-4">
          <Icon className="w-12 h-12 text-text-secondary" />
        </div>
      )}
      <h3 className="text-lg font-medium text-text mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-text-secondary max-w-sm">
          {description}
        </p>
      )}
    </div>
  );
}
