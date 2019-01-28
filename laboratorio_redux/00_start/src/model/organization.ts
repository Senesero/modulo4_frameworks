export interface OrganizationEntity {
  organization: string
}

export const createDefaultOrganizationEntity = () => ({
  organization: 'lemoncode'
});
