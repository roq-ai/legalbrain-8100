import axios from 'axios';
import queryString from 'query-string';
import { LegalInsightInterface, LegalInsightGetQueryInterface } from 'interfaces/legal-insight';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLegalInsights = async (
  query?: LegalInsightGetQueryInterface,
): Promise<PaginatedInterface<LegalInsightInterface>> => {
  const response = await axios.get('/api/legal-insights', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLegalInsight = async (legalInsight: LegalInsightInterface) => {
  const response = await axios.post('/api/legal-insights', legalInsight);
  return response.data;
};

export const updateLegalInsightById = async (id: string, legalInsight: LegalInsightInterface) => {
  const response = await axios.put(`/api/legal-insights/${id}`, legalInsight);
  return response.data;
};

export const getLegalInsightById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/legal-insights/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLegalInsightById = async (id: string) => {
  const response = await axios.delete(`/api/legal-insights/${id}`);
  return response.data;
};
