import React from "react";

const Card = ({ title, text }: { title: string; text: string }) => {
    return (
        <div className="w-44 h-44 border-1 border-gray-500 bg-gray-800 rounded-md flex  flex-col overflow-hidden pt-8 transition-all duration-300  hover:bg-yellow-600">
            {/* Partie supérieure - 60% */}
            <div >
                <p className="flex-1 flex items-center text-amber-500 justify-center font-bold text-[40px] transition-all duration-300 hover:text-white">
                    {title}
                </p>
            </div>

            {/* Partie inférieure - 40% */}
            <div className="h-[40%] text-white flex items-center justify-center text-sm p-1">
                {text}
            </div>
        </div>
    );
};

export default Card;
