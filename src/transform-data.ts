import { RowData } from './types';

const transformData = function (listData: RowData[], columns: string[]): string {
   try {
       const resultData = listData.map((r: RowData) => {
           return columns.map((k: string) => r[k]).join('\t');
       })
       return resultData.join('\n');
   } catch (e) {
       return '';
   }
}

export default transformData;
