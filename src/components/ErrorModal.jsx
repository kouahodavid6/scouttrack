import { useState, useEffect } from "react";

const ErrorModal = ({error, onClose}) => {
    const [isVisible, setIsVisible] = useState(!!error);

    useEffect(() => {
        setIsVisible(!!error);
    }, [error]);

    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h3 className="text-lg font-bold text-red-600 mb-2">Erreur :</h3>
                <p>{error}</p>
                <button
                    onClick={() => {
                        setIsVisible(false)
                        onClose();
                    }}
                    className="mt-4 bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600"
                >
                    Fermer
                </button>
            </div>
        </div>
    )
}
export default ErrorModal;