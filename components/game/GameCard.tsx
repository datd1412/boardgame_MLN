import React from 'react';
import type { GameCardProps, CardType } from '../../types';

const cardStyles: { [key in CardType]: { bg: string; border: string; header: string; iconBg: string } } = {
    motion: { bg: 'bg-blue-50', border: 'border-blue-300', header: 'text-blue-800', iconBg: 'bg-blue-200' },
    phenomenon: { bg: 'bg-green-50', border: 'border-green-300', header: 'text-green-800', iconBg: 'bg-green-200' },
    time: { bg: 'bg-purple-50', border: 'border-purple-300', header: 'text-purple-800', iconBg: 'bg-purple-200' },
    space: { bg: 'bg-orange-50', border: 'border-orange-300', header: 'text-orange-800', iconBg: 'bg-orange-200' },
    consciousness: { bg: 'bg-yellow-50', border: 'border-yellow-300', header: 'text-yellow-800', iconBg: 'bg-yellow-200' },
    relation: { bg: 'bg-red-50', border: 'border-red-300', header: 'text-red-800', iconBg: 'bg-red-200' },
};

const GameCard: React.FC<GameCardProps> = ({ card }) => {
    const styles = cardStyles[card.type];

    return (
        <div className={`rounded-xl shadow-md overflow-hidden border-2 flex flex-col h-full ${styles.bg} ${styles.border}`}>
            <div className="p-4">
                <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl ${styles.iconBg}`}>
                        {card.icon}
                    </div>
                    <div className="flex-grow">
                        <h4 className={`font-bold text-md ${styles.header}`}>{card.title}</h4>
                    </div>
                </div>
            </div>
            {card.content && (
                <div className="p-4 border-t border-dashed border-gray-300/50">
                    <p className="text-gray-700 text-sm leading-relaxed">{card.content}</p>
                </div>
            )}
        </div>
    );
};

export default GameCard;
