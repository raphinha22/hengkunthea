const MessengerButton = () => {
    const openMessenger = () => {
        window.open("https://m.me/61569537967575", "_blank");
    };

    return (
        <button 
            onClick={openMessenger} 
            className="bg-blue-500 text-white px-4 py-2 rounded">
            Chat on Messenger
        </button>
    );
};

export default MessengerButton;
