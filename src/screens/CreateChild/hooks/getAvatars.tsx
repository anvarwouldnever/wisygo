import { useEffect, useState } from 'react'
import { GetAvatars } from '../../../api/methods/child/avatars'

let cachedAvatars: any = null;
let cachedError: any = null;
let hasFetched = false;

export const getAvatars = () => {
    const [avatars, setAvatars] = useState(cachedAvatars);
    const [error, setError] = useState(cachedError);
    const [loading, setLoading] = useState(!hasFetched);

    useEffect(() => {
        if (hasFetched) return;

        const fetchAvatars = async () => {
            try {
                const response = await GetAvatars();
                cachedAvatars = response?.data?.data;
                setAvatars(cachedAvatars);
            } catch (e) {
                cachedError = e?.response?.data?.message || 'Ошибка загрузки аватаров';
                setError(cachedError);
            } finally {
                hasFetched = true;
                setLoading(false);
            }
        };

        fetchAvatars();
    }, []);

    return { avatars, loading, error };
}
