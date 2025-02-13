import React from "react";
import architect from "../assets/architect.jpg";
function Home() {
    return (
        <>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                <img src={architect} alt="BR Architects Building" className="absolute inset-0 w-full h-full object-cover"></img>
                <div className="absolute inset-0 bg-black/10 bg-opacity-20 flex items-center justify-center">
                    <div className="text-center">
                        <span className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide mb-4">BR Architects</span>
                        <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl">Your Vision, Our Blueprint.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;