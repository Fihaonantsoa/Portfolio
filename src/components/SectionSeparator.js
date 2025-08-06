export default function SectionSeparator({ label = 'Section' }) {
  return (
    <div className="flex items-center my-10">
      <div className="flex-grow h-px w-10 lg:w-100 bg-gray-300/30"></div>
      <span className="mx-4 text-gray-500 text-xs uppercase tracking-widest">
        {label}
      </span>
      <div className="flex-grow h-px w-10 lg:w-100 bg-gray-300/30"></div>
    </div>
  )
}