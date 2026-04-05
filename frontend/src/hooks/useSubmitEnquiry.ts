import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitEnquiryParams {
  name: string;
  email: string;
  message: string;
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, message }: SubmitEnquiryParams): Promise<bigint> => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      return await actor.submitEnquiry(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
    },
  });
}
