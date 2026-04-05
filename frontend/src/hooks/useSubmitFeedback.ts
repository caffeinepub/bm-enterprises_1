import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitFeedbackParams {
  name: string;
  email: string;
  message: string;
  rating: bigint;
  suggestions: string;
}

export function useSubmitFeedback() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, message, rating, suggestions }: SubmitFeedbackParams): Promise<bigint> => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      return await actor.submitFeedback(name, email, message, rating, suggestions);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
    },
  });
}
