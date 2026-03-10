'use client';

import { useEffect, useState, useRef } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AnimatedChartProps {
  title: string;
  type: 'line' | 'area' | 'bar';
  data: any[];
  gradient?: { from: string; to: string } | { colors: string[]; stops: number[] };
  metric?: string;
  description?: string;
}

// Brand gradient 7 colors
const BRAND_COLORS = ['#FF3827', '#FF3537', '#FF314F', '#FF4A42', '#FF6D30', '#FF961B', '#FFCA00'];
const BRAND_STOPS = [0, 1, 13, 33, 44, 59, 77, 100];

export function AnimatedChart({ title, type, data, gradient, metric, description }: AnimatedChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  // Use brand gradient if not specified
  const effectiveGradient = gradient || { colors: BRAND_COLORS, stops: BRAND_STOPS };
  const isBrandGradient = 'colors' in effectiveGradient;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < data.length) {
        setDisplayData(data.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isVisible, data]);

  const renderGradientStops = (id: string, vertical: boolean = false) => {
    if (isBrandGradient) {
      const { colors, stops } = effectiveGradient as { colors: string[]; stops: number[] };
      return (
        <linearGradient id={id} x1="0" y1="0" x2={vertical ? "0" : "1"} y2={vertical ? "1" : "0"}>
          {colors.map((color, i) => (
            <stop key={i} offset={`${stops[i]}%`} stopColor={color} stopOpacity={vertical && i === colors.length - 1 ? 0.1 : (vertical ? 0.8 : 1)} />
          ))}
        </linearGradient>
      );
    } else {
      const { from, to } = effectiveGradient as { from: string; to: string };
      return (
        <linearGradient id={id} x1="0" y1="0" x2={vertical ? "0" : "1"} y2={vertical ? "1" : "0"}>
          <stop offset="0%" stopColor={from} stopOpacity={vertical ? 0.8 : 1} />
          <stop offset="100%" stopColor={to} stopOpacity={vertical ? 0.1 : 1} />
        </linearGradient>
      );
    }
  };

  const getFirstColor = () => {
    if (isBrandGradient) {
      return (effectiveGradient as { colors: string[] }).colors[0];
    } else {
      return (effectiveGradient as { from: string }).from;
    }
  };

  const renderChart = () => {
    const commonProps = {
      data: displayData,
      margin: { top: 10, right: 30, left: 0, bottom: 0 }
    };

    const firstColor = getFirstColor();

    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart {...commonProps}>
              <defs>
                {renderGradientStops(`gradient-${title}`)}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="name" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '14px' }} />
              <Line type="monotone" dataKey="value" stroke={`url(#gradient-${title})`} strokeWidth={3} dot={{ fill: firstColor, r: 5 }} activeDot={{ r: 7 }} animationDuration={1000} />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart {...commonProps}>
              <defs>
                {renderGradientStops(`gradient-area-${title}`, true)}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="name" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
              <Area type="monotone" dataKey="value" stroke={firstColor} strokeWidth={2} fill={`url(#gradient-area-${title})`} animationDuration={1000} />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart {...commonProps}>
              <defs>
                {renderGradientStops(`gradient-bar-${title}`)}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="name" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
              <Bar 
                dataKey="value" 
                fill="white" 
                stroke={`url(#gradient-bar-${title})`} 
                strokeWidth={3} 
                radius={[8, 8, 0, 0]} 
                animationDuration={1000} 
              />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div ref={ref} className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {metric && <div className="text-3xl font-bold gradient-brand-text">{metric}</div>}
        {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
      </div>

      <div className="relative">
        {!isVisible && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {renderChart()}
      </div>
    </div>
  );
}
