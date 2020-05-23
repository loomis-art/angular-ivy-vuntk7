/*

 */
export class ResultViewModel {
    Type: string;
    HasError: boolean;
    ExceptionString: string;
    Toast: 'none' | 'success' | 'info' | 'warning' | 'error';
    Exception: IException;
    MessageTitle: string;
    Message: string;
}

interface IException {
    Message: string;
    InnerException?: IException;
}

/*

 */
export class ResultViewModelGeneric<ResultType> {
    Type?: string;
    HasError?: boolean;
    ExceptionString?: string;
    Toast?: 'none' | 'success' | 'info' | 'warning' | 'error';
    Exception?: IException;
    MessageTitle?: string;
    Message?: string;
    Data: ResultType;
}

interface IException {
    Message: string;
    InnerException?: IException;
}
