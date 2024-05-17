export interface Bill {
    denomination: number;
    value: number;
    isCent?: boolean;
    isRand?: boolean;
  }
  
  export interface Payment {
    totalAmount: number;
    bills: Bill[];
    change?: Bill[];
  }