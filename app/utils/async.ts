type AsyncDataRes = Awaited<ReturnType<typeof useAsyncData>>;

export const dataOrFail = (asyncDataRes: AsyncDataRes) => {
  const { data, error } = asyncDataRes;
  if (error.value) {
    throw createError({
      ...error.value,
      fatal: true,
    });
  }
  return data;
};
