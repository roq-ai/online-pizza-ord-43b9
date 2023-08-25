interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Developer', 'Quality Assurance'],
  tenantName: 'Organization',
  applicationName: 'Online Pizza ordering App v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
