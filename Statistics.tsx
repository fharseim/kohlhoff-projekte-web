import React from 'react';

interface StatItemProps {
    value: string;
    label: string;
    percentage: number;
    showLegend?: boolean;
}

const DonutChart: React.FC<StatItemProps> = ({ value, label, percentage, showLegend }) => {
    const radius = 70; // Increased radius for better visibility
    const strokeWidth = 24; // Thicker stroke for Bauhaus feel
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-start h-full p-12 border-r border-b border-luxury-border hover:bg-black/5 transition-colors duration-500 group relative">
            
            {/* Typography */}
            <div className="text-center mb-8 relative z-10">
                <h3 className="font-serif text-3xl md:text-4xl text-luxury-text mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                    {value}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 max-w-[200px] mx-auto leading-relaxed">
                    {label}
                </p>
            </div>

            {/* Chart */}
            <div className="relative w-48 h-48 md:w-56 md:h-56">
                <svg
                    height="100%"
                    width="100%"
                    className="transform -rotate-90 drop-shadow-lg"
                >
                    {/* Background Circle - Dark grey for light theme */}
                    <circle
                        stroke="rgba(0,0,0,0.05)"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        r={normalizedRadius}
                        cx="50%"
                        cy="50%"
                    />
                    {/* Progress Circle */}
                    <circle
                        stroke="#BFA473"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset }}
                        strokeLinecap="butt"
                        fill="transparent"
                        r={normalizedRadius}
                        cx="50%"
                        cy="50%"
                        className="transition-all duration-[1500ms] ease-out"
                    />
                </svg>
                
                {/* Center Hole Content (Optional - creates depth) */}
                <div className="absolute inset-0 rounded-full border border-luxury-border/30 scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Legend (Specific to the first item usually) */}
            {showLegend && (
                <div className="flex gap-6 mt-8">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-luxury-gold"></div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">Gewerbe</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-black/10"></div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">Wohnen</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export const Statistics: React.FC = () => {
    return (
        <section className="bg-luxury-bg text-luxury-text border-t border-luxury-border">
             <div className="container mx-auto px-6 md:px-12 border-l border-r border-luxury-border">
                
                {/* Section Header */}
                <div className="py-12 border-b border-luxury-border text-center">
                    <span className="text-luxury-gold text-xs uppercase tracking-[0.4em]">Track Record</span>
                </div>

                {/* Grid Layout - Top Row (2 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <DonutChart 
                        value="15.5 MIO. €"
                        label="Aktuelles Entwicklungsvolumen"
                        percentage={75}
                        showLegend={true}
                    />
                     <DonutChart 
                        value="6.000 M²"
                        label="Aktuelle Entwicklung"
                        percentage={65}
                    />
                </div>

                {/* Grid Layout - Bottom Row (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                     <DonutChart 
                        value="11 MIO. €"
                        label="Track Record"
                        percentage={60}
                    />
                     <DonutChart 
                        value="7.500 M²"
                        label="Under Management"
                        percentage={50}
                    />
                     <DonutChart 
                        value="3.200 M²"
                        label="Entwickelte Mietfläche"
                        percentage={80}
                    />
                </div>
             </div>
        </section>
    );
};