import { Controller, Get } from '@nestjs/common';
import { Transaction, TransactionService } from './transaction.service';

@Controller("/transactions")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('/all')
  getTransactions(): Transaction[] {
    return this.transactionService.getAll();
  }
}
