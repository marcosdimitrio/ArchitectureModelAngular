export const isNullOrWhiteSpace = (value: string): any => {
    return (!value || /^\s*$/.test(value));
};