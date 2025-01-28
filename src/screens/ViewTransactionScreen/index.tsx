import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import ExpenseEntry from '../../components/molecules/ExpenseEntry';
import Category from '../../schemas/CategorySchema';

export type ViewTransactionScreenRouteProp = RouteProp<
  {
    UpdateTransactionScreen: {
      expenseId: string;
      expenseTitle: string;
      expenseDescription: string;
      category: Category;
      expenseDate: string;
      expenseAmount: string;
    };
  },
  'UpdateTransactionScreen'
>;

const UpdateTransactionScreen = () => {
  const route = useRoute<ViewTransactionScreenRouteProp>();

  return <ExpenseEntry type={'Update'} route={route} />;
};

export default UpdateTransactionScreen;
