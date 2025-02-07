import React, { useEffect, useState } from "react";
import "./Toast.css"; 

const Toast = ({ message, type, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 3000); // Auto-close after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div className={`toast ${type}`}>
            <span>{message}</span>
            <button onClick={onClose} className="toast-close-btn">
                &times;
            </button>
        </div>
    );
};

export default Toast;