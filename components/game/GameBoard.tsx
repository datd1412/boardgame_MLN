import React from 'react';
import { TILE_DATA } from './data';

const GameBoard: React.FC = () => {
    const width = 900;
    const height = 900;
    const cx = width / 2;
    const cy = height / 2;
    const numTiles = TILE_DATA.length;
    const tileRadius = 30; // Đường kính ô cố định 60px

    const tileColors: { [key: string]: string } = {
        normal: '#f1f5f9', // slate-100
        draw_motion_phenomenon: '#60a5fa', // blue-400
        draw_time: '#c084fc', // purple-400
        draw_space: '#fb923c', // orange-400
        draw_consciousness: '#facc15', // yellow-400
        draw_relation: '#f87171', // red-400
        pause: '#9ca3af', // gray-400
        center: '#eab308', // yellow-600
    };

    const tileStrokeColors: { [key: string]: string } = {
        normal: '#cbd5e1', // slate-300
        draw_motion_phenomenon: '#3b82f6', // blue-500
        draw_time: '#a855f7', // purple-500
        draw_space: '#f97316', // orange-500
        draw_consciousness: '#eab308', // yellow-500
        draw_relation: '#ef4444', // red-500
        pause: '#6b7280', // gray-500
        center: '#ca8a04', // yellow-700
    };
    
    // Tạo ra các điểm trên xoắn ốc với khoảng cách cung (arc length) gần như không đổi
    const generateSpiralPoints = () => {
        const points = [];
        // Hệ số quyết định độ chặt/lỏng của xoắn ốc. Tương đương 'spacing' trong công thức người dùng.
        const b = 18; 
        // Khoảng cách mong muốn giữa tâm các ô (80-100px).
        const desiredArcLength = 100; 

        let angle = 0.1; // Bắt đầu với một góc nhỏ để tránh điểm kỳ dị ở trung tâm.

        for (let i = 0; i < numTiles; i++) {
            // Ô cuối cùng luôn là trung tâm.
            if (i === numTiles - 1) {
                points.push({ x: cx, y: cy });
                continue;
            }

            const radius = b * angle;
            const x = cx + radius * Math.cos(angle);
            const y = cy + radius * Math.sin(angle);
            points.push({ x, y });

            // Tính toán góc tăng cho điểm tiếp theo dựa trên công thức độ dài cung:
            // ds = sqrt(b^2 + r^2) d_theta  =>  d_theta = ds / sqrt(b^2 + r^2)
            const angleIncrement = desiredArcLength / Math.sqrt(Math.pow(b, 2) + Math.pow(radius, 2));
            angle += angleIncrement;
        }

        // Các điểm được tạo từ tâm ra ngoài. Đảo ngược lại để theo dòng chảy của game (từ ngoài vào trong).
        return points.reverse();
    };

    const points = generateSpiralPoints();

    return (
        <div className="p-2 sm:p-4 bg-gray-50 rounded-lg border-dashed border-2 border-gray-400 flex justify-center items-center">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                {/* Đường dẫn xoắn ốc để hướng dẫn thị giác */}
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
                                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
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
            </svg>
        </div>
    );
};

export default GameBoard;