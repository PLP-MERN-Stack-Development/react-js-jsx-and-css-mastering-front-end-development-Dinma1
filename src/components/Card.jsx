export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
      )}
      <div className="text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}