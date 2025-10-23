import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
    const getInitial = () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false);
    const [ matches, setMatches ] = useState<boolean>(getInitial);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

        // Subscribe to media query changes
        if (media.addEventListener) {
            media.addEventListener('change', listener);
        } else {
            // Older browsers
            
            media.addListener(listener);
        }

        // Update state asynchronously to avoid synchronous setState inside the effect body
        const id = window.setTimeout(() => setMatches(media.matches), 0);

        return () => {
            clearTimeout(id);
            if (media.removeEventListener) {
                media.removeEventListener('change', listener);
            } else {                
                media.removeListener(listener);
            }
        };
    }, [query]);

    return matches;
};