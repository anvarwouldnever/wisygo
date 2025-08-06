import React, { useEffect, useState } from 'react'
import { GetOnboardings } from '../../../api/methods/onboarding/onboarding';

export const getOnboardings = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [onboardings, setOnboardings] = useState<any>()

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const response = await GetOnboardings();
                setOnboardings(response?.data?.data)
            } catch (e) {
                console.log(e)
                setError(e?.response?.data?.message || 'Ошибка загрузки доков');
            } finally {
                setLoading(false);
            }
        };
    
        fetchDocs();
    }, []);

    return { onboardings, loading, error };
}