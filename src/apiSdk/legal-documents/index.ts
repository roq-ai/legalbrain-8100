import axios from 'axios';
import queryString from 'query-string';
import { LegalDocumentInterface, LegalDocumentGetQueryInterface } from 'interfaces/legal-document';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLegalDocuments = async (
  query?: LegalDocumentGetQueryInterface,
): Promise<PaginatedInterface<LegalDocumentInterface>> => {
  const response = await axios.get('/api/legal-documents', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLegalDocument = async (legalDocument: LegalDocumentInterface) => {
  const response = await axios.post('/api/legal-documents', legalDocument);
  return response.data;
};

export const updateLegalDocumentById = async (id: string, legalDocument: LegalDocumentInterface) => {
  const response = await axios.put(`/api/legal-documents/${id}`, legalDocument);
  return response.data;
};

export const getLegalDocumentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/legal-documents/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLegalDocumentById = async (id: string) => {
  const response = await axios.delete(`/api/legal-documents/${id}`);
  return response.data;
};
