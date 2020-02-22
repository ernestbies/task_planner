import {Rate} from './Rate';

export interface NbpResponse {
  table: string;
  no: string;
  effectiveDate: string;
  tradingDate: string;
  rates: Rate[];
}
