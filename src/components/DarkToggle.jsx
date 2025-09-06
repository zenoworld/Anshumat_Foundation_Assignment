import React, { useEffect, useState } from 'react'

const DarkToggle = () => {
    const [light, setLight] = useState(false);
    const handleThemeChange = () => {
        setLight((prevTheme) => {
            const themeChange = !prevTheme;
            if (themeChange) {
                document.documentElement.classList.remove('dark');
            } else {
                document.documentElement.classList.add('dark');
            }
            return themeChange;
        })
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('anshumatTheme');
        if (savedTheme === 'dark') {
            setLight(false);
            document.documentElement.classList.add('dark');
        } else {
            setLight(true);
            document.documentElement.classList.remove('dark');
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('anshumatTheme', light ? 'light' : 'dark');
    }, [light])


    return (
        <div
            onClick={handleThemeChange}
            className={`w-12 h-6  rounded-full flex items-center p-1 cursor-pointer transition-colors duration-300 ${light ? 'bg-gray-800' : 'bg-white'}`}
        >
            <div
                className={`w-4 h-4  rounded-full transform transition-transform duration-300 ${light ? 'translate-x-6 bg-white' : 'translate-x-0 bg-gray-800 flex justify-center items-center'}`}
            >
            </div>
        </div>
    )
}

export default DarkToggle