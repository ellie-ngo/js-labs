const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

export function withdraw(amount) {
  if (amount < BASE_UNIT || amount % BASE_UNIT !== 0) return 'Invalid balance';
K500_QUANTITY
  const maxAmount = K500_QUANTITY*K500_VALUE 
                  + K200_QUANTITY*K200_VALUE 
                  + K100_QUANTITY*K100_VALUE 
                  + K50_QUANTITY*K50_VALUE;
  
  if (amount > maxAmount) return 'Insufficient balance from ATM';

  let remaining = amount;

  //K500

  const Q500 = remaining >= K500_QUANTITY*K500_VALUE ? K500_QUANTITY : Math.trunc(remaining/K500_VALUE);
  remaining = amount - K500_VALUE*Q500;

  //K200

  const Q200 = remaining >= K200_QUANTITY*K200_VALUE ? K200_QUANTITY : Math.trunc(remaining/K200_VALUE);
  remaining = amount - K500_VALUE*Q500 - K200_VALUE*Q200;

  //K100

  const Q100 = remaining >= K100_QUANTITY*K100_VALUE ? K100_QUANTITY : Math.trunc(remaining/K100_VALUE);
  remaining = amount - K500_VALUE*Q500 - K200_VALUE*Q200 - K100_VALUE*Q100;

  //K50

  const Q50 = remaining/K50_VALUE;

  return {
    K500 : Q500,
    K200 : Q200,
    K100 : Q100,
    K50 : Q50
  };
}

// console.log(withdraw(850000));