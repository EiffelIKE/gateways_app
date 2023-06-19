export interface Options {
  id: string;
  value: string;
  label: string;
}

export interface SelectControlProps {
  error?: boolean;
  label: string;
  register: any;
  name: string;
  options: Array<Options>;
  helpText: string;
  errorMessage?: string;
}
