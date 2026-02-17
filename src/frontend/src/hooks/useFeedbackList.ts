import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Feedback } from '../backend';

export function useFeedbackList() {
  const { actor, isFetching } = useActor();

  return useQuery<Feedback[]>({
    queryKey: ['feedback'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllFeedback();
    },
    enabled: !!actor && !isFetching,
  });
}
