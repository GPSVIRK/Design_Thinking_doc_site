export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-[22px] border border-[#DCE4EE] bg-white shadow-[0_10px_30px_rgba(31,41,55,0.04)] p-6 ${className}`}>
      {children}
    </div>
  );
}
