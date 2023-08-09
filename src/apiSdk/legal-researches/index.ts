import axios from 'axios';
import queryString from 'query-string';
import { LegalResearchInterface, LegalResearchGetQueryInterface } from 'interfaces/legal-research';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLegalResearches = async (
  query?: LegalResearchGetQueryInterface,
): Promise<PaginatedInterface<LegalResearchInterface>> => {
  const response = await axios.get('/api/legal-researches', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLegalResearch = async (legalResearch: LegalResearchInterface) => {
  const response = await axios.post('/api/legal-researches', legalResearch);
  return response.data;
};

export const updateLegalResearchById = async (id: string, legalResearch: LegalResearchInterface) => {
  const response = await axios.put(`/api/legal-researches/${id}`, legalResearch);
  return response.data;
};

export const getLegalResearchById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/legal-researches/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLegalResearchById = async (id: string) => {
  const response = await axios.delete(`/api/legal-researches/${id}`);
  return response.data;
};
