/*
 *
 */
export class ResultViewModel {
  type: string;
  HasError: boolean;
  Hata: string;
  toast: "none" | "success" | "info" | "warning" | "error";
  Exception: IException;
  MesajBaslik: string;
  Mesaj: string;
}
interface IException {
  Message: string;
  InnerException?: IException;
}

/*
 *
 */
export class ResultViewModelGeneric<ResultType> {
  type: string;
  HasError: boolean;
  Hata: string;
  toast: "none" | "success" | "info" | "warning" | "error";
  Exception: IException;
  MesajBaslik: string;
  Mesaj: string;
  data: ResultType;
}

interface IException {
  Message: string;
  InnerException?: IException;
}
