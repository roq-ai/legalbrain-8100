interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Legal Team Member'],
  customerRoles: [],
  tenantRoles: ['Legal Firm Owner', 'Legal Team Member', 'Legal Researcher', 'Legal Document Drafter'],
  tenantName: 'Organization',
  applicationName: 'LegalBrain',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
