import Home from "./components/Home";
import Navbar from "./components/Navbar";
const App = () => {
    return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-8 px-4 ">
            <Navbar />
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-800 mb-2 p-5">
                    AI Image Enhancer{" "}
                </h1>
                <p className="text-lg text-black-500 font-semibold">
                    Upload your Image and let AI enhance it in seconds!
                </p>
            </div>

            <Home />

            <div className="text-2xl text-black mt-6 font-bold">
                Powered By <a className="font-bold text-blue-800" href="https://www.linkedin.com/in/rishabh-jain-enrish/">Rishabh Jain</a>
            </div>
        </div>
    );
};

export default App;
