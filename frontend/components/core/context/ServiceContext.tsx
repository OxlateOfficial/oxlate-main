// context/ServiceContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';
import { Service } from '@/types/service';

interface ServiceContextType {
  selectedService: Service | null;
  setSelectedService: (serviceId: string) => void;
  serviceData: Service | null; // Full JSON content
}

export const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

// Function to fetch service data
const fetchServiceData = async (serviceId: string): Promise<Service | null> => {
  const response = await fetch(`/content/services/${serviceId}.json`);
  if (!response.ok) return null;
  return response.json();
};

// In ServiceProvider.tsx
const [selectedId, setSelectedId] = useState('web-development');
const serviceData = await fetchServiceData(selectedId); // From /content/services/