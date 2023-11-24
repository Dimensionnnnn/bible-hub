import {Desks} from '@api/generated';
import {useState, useEffect} from 'react';
import {getUsersDesks} from '../get-users-desks';

export const useUsersDesksData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usersDesks, setUsersDesks] = useState<Desks[]>();
  const [cursor, setCursor] = useState<string | null>();

  useEffect(() => {
    loadUsersDesks();
  }, []);

  const loadUsersDesks = async (afterCursor?: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getUsersDesks(afterCursor);
      setUsersDesks(response.data);
      setCursor(response.cursor?.afterCursor);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchMore = async () => {
    if (!cursor) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await getUsersDesks(cursor);
      if (response.cursor?.afterCursor !== cursor) {
        setUsersDesks(prevDesks => [...prevDesks, ...response.data]);
        setCursor(response.cursor?.afterCursor);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading: loading,
    isError: error,
    usersDesks,
    fetchMore,
  };
};
