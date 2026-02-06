export function useSearchFilters<T extends Record<string, unknown>>(initial: T) {

    let filters = $state<T>(initial);

    function setFilter<K extends keyof T>(key: K, value: T[K]) {
        filters[key] = value;
    }

    function resetFilters() {
        filters = { ...initial };
    }

    return {
        filters,
        setFilter,
        resetFilters
    };
}
