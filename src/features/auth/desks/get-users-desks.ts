import {Desks} from '@api/index';

export const getUsersDesks = async (afterCursor?: string) => {
  const response = await Desks.deskControllerFind({afterCursor, limit: 10});
  return response.data;
};
