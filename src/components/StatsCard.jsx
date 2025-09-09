const StatsCard = ({ color = "blue", icon, title, value, isActive = false, onAction, }) => {
    const colorMap = {
        pink:   { bg: "bg-pink-100",   text: "text-pink-700" },
        yellow: { bg: "bg-yellow-100", text: "text-yellow-700" },
        green:  { bg: "bg-green-100",  text: "text-green-700" },
        orange: { bg: "bg-orange-100", text: "text-orange-700" },
        red:    { bg: "bg-red-100",    text: "text-red-700" },
        blue:   { bg: "bg-blue-100",   text: "text-blue-700" },
    };

    const { bg } = colorMap[color] || colorMap.blue;

    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
            <div className="flex flex-row items-center justify-between w-full gap-2">
                {/* Icône à gauche en mobile, en haut en desktop */}
                <div className={`p-3 rounded-full ${bg} shrink-0`}>{icon}</div>

                {/* Texte au centre en mobile, à droite en desktop */}
                <div className="flex flex-col items-center text-center">
                    <p className="sm:text-sm text-gray-600 mb-1 sm:mb-2">{title}</p>
                    <p className="text-xl font-bold">{value}</p>
                </div>

                {/* Bouton à droite en mobile, en bas en desktop */}
                {onAction && (
                    <button
                        onClick={onAction}
                        className="px-3 py-1 bg-violet-600 text-white rounded hover:bg-violet-700 text-sm whitespace-nowrap"
                    >
                        {isActive ? "Fermer" : "Voir"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default StatsCard;
