export default function LoadingPage(){

return (
       <div className="flex justify-center items-center h-screen bg-white dark:bg-[#121212]"> 
      <svg
        viewBox="0 0 500 100"
       
        width="100%"
        height="100%"
        className="handwriting"
      >
        <defs>
          <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1F7A57" /> {/* Green */}
            <stop offset="50%" stopColor="#F86465" /> {/* Red/Pink */}
            <stop offset="100%" stopColor="#5F6671" /> {/* Greyish Purple */}
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="50"
          textAnchor="middle"
         fill="none"
          stroke="url(#text-gradient)"
          strokeWidth="2"
          fontFamily="Dancing Script, cursive"
          fontSize="48"
          
        >
          <tspan x="50%" dy="0">Welcome to</tspan>
    <tspan x="50%" dy="60">my Portfolio</tspan>
        </text>
      </svg>

      <style>
        {`
          .handwriting text {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw 3s ease forwards;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
)
}