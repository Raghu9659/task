'use client';
import { useState } from  "react";
import { useEffect } from "react";
import { LuRefreshCcwDot } from "react-icons/lu";

const Cat = () => {
    const [catUrl, setCatUrl] = useState('https://cataas.com/cat/says/hello?fontSize=50&fontColor=red');

     const loadCat = () => {
    const timestamp = new Date().getTime();
    setCatUrl(`https://cataas.com/cat/says/hello?fontSize=50&fontColor=red/cat?timestamp=${timestamp}`);
  };

  useEffect(() => {
    loadCat();
    
  }, []);

console.log("render")

  return (
       <main className="flex flex-col items-center justify-center min-h-screen p-6"
        style={{ backgroundImage: "url('https://th.bing.com/th/id/R.644f0ac74d4ac651ea105e0dbe164e3c?rik=Cj6CKyw0F7JKFQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f9%2f4%2f1179770-cat-hd-wallpapers-1080p-1920x1080-hd.jpg&ehk=FusFBAKwYE39vZbh%2bBsD82Jx6LuFoWpqGU9%2f%2f55SYR4%3d&risl=&pid=ImgRaw&r=0')" }}>
      <h1 className="text-4xl font-bold mb-8">Random Cat Generator</h1>
      <img
        src={catUrl}
        alt="Random Cat"
        className="w-96 h-auto rounded-xl shadow-lg mb-6"
      />
      <button
        onClick={loadCat}
        className="flex items-center gap-2 px-10 py-2 bg-green-500 text-white font-semibold rounded hover:bg-yellow-600 transition "
      >
        
       <LuRefreshCcwDot className="w-5 h-5"/>  Another Cat
      </button>
    </main>
  );
  
}

export default Cat
