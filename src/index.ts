import copy from './copy';
import transformData from './transform-data';
import { RowData } from './types';

const CopyList = function (listData: RowData[], columns: string[]): Boolean {
    return copy(transformData(listData, columns));
}

export default CopyList;
export { copy };
