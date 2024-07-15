export interface IValidateResult {
  isValid: boolean;
  error: string | null;
}

export interface INewEmploeesCountData {
  companyId: string;
  count: number;
}

export type ValidationObject = Record<string, IValidateResult>;
