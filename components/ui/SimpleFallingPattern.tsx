'use client';

export function SimpleFallingPattern() {
  const colors = ['#FF3827', '#FF3537', '#FF314F', '#FF4A42', '#FF6D30', '#FF961B', '#FFCA00'];
  
  // Generate 50 falling dots with random positions and delays
  const dots = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * -20}s`, // Negative delay for staggered start
    duration: `${15 + Math.random() * 10}s`, // 15-25s random duration
    size: Math.random() > 0.7 ? '8px' : '4px', // Mix of sizes
  }));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute animate-fall"
          style={{
            left: dot.left,
            top: '-20px',
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            borderRadius: '50%',
            animationDelay: dot.delay,
            animationDuration: dot.duration,
            opacity: 0.7,
            boxShadow: `0 0 10px ${dot.color}`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
}
