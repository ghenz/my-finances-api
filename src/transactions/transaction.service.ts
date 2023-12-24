import { Injectable } from '@nestjs/common';

export type Transaction = {
  id: number;
  name: string;
};

@Injectable()
export class TransactionService {
  getAll(): Transaction[] {
    return [
      {
        id: 1,
        name: 'Transaction 1',
      },
      {
        id: 2,
        name: 'Transaction 2',
      },
    ];
  }
}
