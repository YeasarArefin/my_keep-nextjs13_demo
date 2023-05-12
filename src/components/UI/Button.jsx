export default function Button({ children, className, onClick }) {
   return (
      <button
         onClick={onClick}
         type="button"
         className={`inline-flex items-center justify-center px-4 py-1 text-base font-medium leading-6 text-gray-300 whitespace-no-wrap bg-[#1f2937] rounded-md shadow-sm focus:outline-none focus:shadow-none ${className}`}
      >
         {children}
      </button>
   );
}
