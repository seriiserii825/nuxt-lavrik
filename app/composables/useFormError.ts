import { FetchError } from "ofetch";
type T = { [key: string]: string | number | boolean | null };
type R = { [key: string]: string[] | undefined };
export default function useFormError(error: FetchError, form: T): R {
  const result = ref<R>({});
  if (error.data.length) {
    error.data.forEach((err: string[]) => {
      const key = err[0] as keyof typeof form;
      if (key in form) {
        if (err[1] && err[2]) {
          result.value[key] = [`${err[1]} ${err[2]}`.trim()];
        } else if (err[1]) {
          result.value[key] = [err[1]];
        }
      }
    });
  }
  return result.value;
}
