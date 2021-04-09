export interface ServerResponse<T> {
  readonly status: number;
  readonly isExpected: boolean;
  readonly message: string;
  readonly value?: T;
}
