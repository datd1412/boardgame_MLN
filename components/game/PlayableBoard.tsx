
import React from 'react';
import { TILE_DATA } from './data';
import PlayerPawn from './PlayerPawn';

interface PlayableBoardProps {
    playerPosition: number;
}

const PlayableBoard: React.FC<PlayableBoardProps> = ({ playerPosition }) => {
    const width = 900;
    const height = 900;
    const cx = width / 2;
    const cy = height / 2;
    const numTiles = TILE_DATA.length;
    const tileRadius = 30;

    const tileColors: { [key: string]: string } = {
        normal: '#f1f5f9',
        draw_motion_phenomenon: '#60a5fa',
        draw_time: '#c084fc',
        draw_space: '#fb923c',
        draw_consciousness: '#facc15',
        draw_relation: '#f87171',
        pause: '#9ca3af',
        center: '#eab308',
    };

    const tileStrokeColors: { [key:string]: string } = {
        normal: '#cbd5e1',
        draw_motion_phenomenon: '#3b82f6',
        draw_time: '#a855f7',
        draw_space: '#f97316',
        draw_consciousness: '#eab308',
        draw_relation: '#ef4444',
        pause: '#6b7280',
        center: '#ca8a04',
    };
    
    const generateSpiralPoints = () => {
        const points = [];
        const b = 18; 
        const desiredArcLength = 100; 

        let angle = 0.1;

        for (let i = 0; i < numTiles; i++) {
            if (i === numTiles - 1) {
                points.push({ x: cx, y: cy });
                continue;
            }

            const radius = b * angle;
            const x = cx + radius * Math.cos(angle);
            const y = cy + radius * Math.sin(angle);
            points.push({ x, y });

            const angleIncrement = desiredArcLength / Math.sqrt(Math.pow(b, 2) + Math.pow(radius, 2));
            angle += angleIncrement;
        }
        return points.reverse();
    };

    const points = generateSpiralPoints();
    const pawnPosition = points[playerPosition];

    return (
        <div className="relative p-2 sm:p-4 bg-gray-50 rounded-lg border-dashed border-2 border-gray-400 flex justify-center items-center">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                <path
                    d={points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {TILE_DATA.map((tile, index) => {
                    const { x, y } = points[index];
                    const isCenter = index === TILE_DATA.length - 1;
                    const currentTileRadius = isCenter ? tileRadius * 1.5 : tileRadius;
                    const isSpecial = tile.type !== 'normal';

                    return (
                        <g key={index} transform={`translate(${x}, ${y})`}>
                             <title>{`Ô ${index + 1}: ${tile.type}`}</title>
                            <circle
                                r={currentTileRadius}
                                fill={tileColors[tile.type]}
                                stroke={tileStrokeColors[tile.type]}
                                strokeWidth="3"
                            />
                            <text
                                y={tile.icon && !isCenter ? -currentTileRadius / 4 : 0}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fontSize={currentTileRadius * (tile.icon ? 0.7 : 0.6)}
                                fontWeight="bold"
                                fill={isSpecial ? 'white' : '#334155'}
                                style={{ pointerEvents: 'none', userSelect: 'none' }}
                            >
                                {index === 0 ? "Bắt Đầu" : (isCenter ? tile.icon : tile.icon || index + 1)}
                            </text>
                             {tile.icon && !isCenter && <text
                                 y={currentTileRadius / 2.5}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fontSize={currentTileRadius * 0.5}
                                fontWeight="bold"
                                fill={isSpecial ? 'white' : '#475569'}
                                style={{ pointerEvents: 'none', userSelect: 'none' }}
                            >
                                {index + 1}
                            </text>}
                        </g>
                    );
                })}

                {pawnPosition && (
                     <g transform={`translate(${pawnPosition.x - 12}, ${pawnPosition.y - 25}) scale(1.5)`}>
                        <PlayerPawn />
                    </g>
                )}
            </svg>
        </div>
    );
};

export default PlayableBoard;