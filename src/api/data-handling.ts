import { formInitialValues } from '../modules/form/form.form';

const LOCAL_STORAGE_KEY = 'formData';

export const saveData = (data: typeof formInitialValues) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const fetchData = () => {
  const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (localStorageData) {
    return JSON.parse(localStorageData);
  }
};
