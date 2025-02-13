import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 shadow-lg rounded-xl w-96 text-center border border-gray-700">
        <h2 className="text-2xl font-bold text-white">Buy the Course</h2>
        <p className="text-gray-400 mt-2">Click the button below to proceed.</p>

        <button
          className={`w-full mt-6 px-4 py-3 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30"
          }`}
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Pay Now"
          )}
        </button>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center border border-gray-700 max-w-md mx-4">
              <div className="bg-green-500/10 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-400">Payment Successful!</h3>
              <p className="text-gray-400 mt-2">Click below to verify on Telegram.</p>

              <a
                href="https://t.me/OneAppDemo?start=verify"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/30"
              >
                Open Telegram Bot
              </a>

              <button
                className="mt-4 block mx-auto text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;