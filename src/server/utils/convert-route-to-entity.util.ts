const mapping: Record<string, string> = {
  'legal-documents': 'legal_document',
  'legal-insights': 'legal_insight',
  'legal-researches': 'legal_research',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
