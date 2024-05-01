import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const transformedValue =  parseInt(value).toLocaleString('en-US').replace(',', ' ')
    const symbol = 'R '


    // const transformedValue = Math.trunc(value)
    return symbol + transformedValue;
  }

}
