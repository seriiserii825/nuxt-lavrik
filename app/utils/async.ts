export function dataOrFail<T extends Awaited<ReturnType<typeof useAsyncData<any, any>>>>(
  asyncDataRes: T
): T extends Awaited<ReturnType<typeof useAsyncData<infer R1, any>>>
  ? Ref<Exclude<R1, undefined>>
  : never {
  const { data, error } = asyncDataRes;
  if (error.value) {
    throw createError({
      ...error.value,
      fatal: true,
    });
  }
  return data as any;
}
