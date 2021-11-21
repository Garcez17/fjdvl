import { useContext } from 'react';
import { ModelContext } from '../contexts/ModelContext';

export function useModel() {
  return useContext(ModelContext);
}