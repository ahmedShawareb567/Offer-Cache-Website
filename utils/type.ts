export type MayBeReactive<T> = Ref<T> | ComputedRef<T> | T;
