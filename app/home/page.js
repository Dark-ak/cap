'use client'
import Lottie, { LottiePlayer } from "lottie-react";
import bday from "../bday.json";
import ReactConfetti from "react-confetti";
import { useState, useEffect } from "react";


const Home = () => {

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        handleResize(); // initial set
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (dimensions.width === 0) return null;

    return (
        <div className="w-full h-screen bg-red-50 flex items-center justify-center" suppressHydrationWarning>
            <ReactConfetti
                width={dimensions.width}
                height={window.height}
            />
            <div className="w-fit h-fit md:w-[60vw] md:h-[60vh] lg:w-[40vw] lg:h-[80vh]" >

                <Lottie animationData={bday} loop={true} />

            </div>
        </div>
    )
}

export default Home