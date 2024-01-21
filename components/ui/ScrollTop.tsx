'use client'
import React, { useState, useEffect } from 'react';
import { ArrowUpFromLine} from 'lucide-react';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return

        
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
        <div className='' >
        <button
            className={`fixed bottom-5 left-[85%] md:left-[90%] top-[85%] bg-[#F0F539] rounded-full h-10 w-10 scroll-to-top-button ${showButton ? 'visible' : 'hidden'}`}
            onClick={handleScrollToTop}
        >
            <ArrowUpFromLine className='text-center ml-2'/>
        </button>
        </div>
        </>
    );
};

export default ScrollToTopButton;