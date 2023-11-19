import React from 'react';
import {SvgFollowedIcon} from '@shared/ui/icons/components/svg-followed-icon';
import {SvgMyDeskIcon} from '@shared/ui/icons/components/svg-my-desk-icon';
import {SvgUsersDesksIcon} from '@shared/ui/icons/components/svg-users-desks-icon';

export enum TabBarIconsNames {
  MY_DESK = 'My desk',
  USERS_DESKS = 'Users desks',
  FOLLOWED = 'Followed',
  UI_KIT = 'UI Kit',
}

export const getTabBarIcon = (name: string, color: string) => {
  switch (name) {
    case TabBarIconsNames.MY_DESK:
      return <SvgMyDeskIcon color={color} />;
    case TabBarIconsNames.USERS_DESKS:
      return <SvgUsersDesksIcon color={color} />;
    case TabBarIconsNames.FOLLOWED:
      return <SvgFollowedIcon color={color} />;
    case TabBarIconsNames.UI_KIT:
      return <SvgMyDeskIcon color={color} />;
    default:
      return <SvgMyDeskIcon color={color} />;
  }
};
