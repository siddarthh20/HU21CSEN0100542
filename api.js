import axios from 'axios';

const api = axios.create({
  baseURL: 'http://20.244.56.144/test',
});

export const getProducts = (company, category, top, minPrice, maxPrice) => {
  return api.get(`/companies/${company}/categories/${category}/products`, {
    params: { top, minPrice, maxPrice },
  });
};

export default api;
