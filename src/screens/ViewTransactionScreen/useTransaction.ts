import { useMemo } from 'react';

export const useTransaction = (transaction) => {
  const formattedDate = useMemo(() => {
    const date = new Date(transaction.date); // Parse the ISO date string into a Date object
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }, [transaction.date]);

  const formattedAmount = useMemo(() => {
    return `$${parseFloat(transaction.amount).toFixed(2)}`;
  }, [transaction.amount]);

  return {
    formattedDate,
    formattedAmount,
  };
};
