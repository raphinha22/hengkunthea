const MessengerButton = () => {
    const openMessenger = () => {
        const message = encodeURIComponent("ខ្ញុំចង់បង់រំលស់ម៉ូតូ");
        window.open(`https://m.me/61569537967575?ref=${message}`, "_blank");
    };

    return (
        <button 
            onClick={openMessenger} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            ខ្ញុំចង់បង់រំលស់ម៉ូតូ
        </button>
    );
};

export default MessengerButton;
