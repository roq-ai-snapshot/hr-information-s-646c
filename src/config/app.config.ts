interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View employee profiles',
    'View payroll information',
    'View vacation details',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage employee information',
    'Manage vacation requests',
    'Manage payroll information',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/f1dc4c8b-66b4-4e08-90fb-ea3373b29c68',
};
