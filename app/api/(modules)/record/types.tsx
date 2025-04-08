export interface IRecord {
  id:number;
  label:string;
  cameFromId: number,
  wentToId: number,
  recordCategory:string;
  date:string;
  value:number;
  description?: string | null;
}

export interface CreateRecordDto {
  label:string;
  cameFromId: number,
  wentToId: number,
  recordCategory:string ;
  date:string;
  value:number;
  description?: string | null;
}



export type RecordCategories = "REVENUE" | "EXPENSE" | "TRANSFERENCE";

export const RecordCategoriesClient = {
  REVENUE:"receita",
  EXPENSE: "despesa",
  TRANSFERENCE: "transferência"
}


