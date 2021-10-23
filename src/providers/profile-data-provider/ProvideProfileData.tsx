import React, { createContext, useContext } from 'react'
import { useProfileData } from './useProfileData';


const createOrderContext = createContext({});

export function ProvideProfileData({ children }: any) {
	const order = useProfileData();

	return <createOrderContext.Provider value={order}>{children}</createOrderContext.Provider>;
}

export const useCreateOrder = () => {
	return useContext(createOrderContext);
};

