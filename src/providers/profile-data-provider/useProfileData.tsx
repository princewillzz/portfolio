import { useEffect, useState } from 'react';

export const useProfileData = () => {

    const [isLoadingDone, setIsLoadingDone] = useState<boolean>(false);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoadingDone(true);
        }, 2001);


        return () => {
            clearTimeout(loadingTimeout);
        }
    }, [])

    return {
        isLoadingDone
    }
}
