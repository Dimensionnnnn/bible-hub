import { PortalHost } from '@gorhom/portal';

import { TabNavigator } from '../tab-navigator/tab-navigator';

export const RootNavigator = () => {
  return (
    <>
      <TabNavigator />
      <PortalHost name="card" />
    </>
  );
};
