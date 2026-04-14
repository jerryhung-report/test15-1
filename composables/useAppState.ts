import { useState } from '#app';
import type { UserFormData, Persona } from '~/types';
import { PERSONAS } from '~/utils/constants';

export const useAppState = () => {
  const formData = useState<UserFormData>('formData', () => ({
    gender: "",
    age: "",
    phone: "",
    email: "",
    allocation: ""
  }));

  const persona = useState<Persona>('persona', () => PERSONAS[0]!);
  const selectedFunds = useState<string[]>('selectedFunds', () => []);

  const setPersonaById = (id: string) => {
    const found = PERSONAS.find(p => p.enName === id);
    if (found) {
      persona.value = found;
    }
  };

  return {
    formData,
    persona,
    selectedFunds,
    setPersonaById
  };
};
