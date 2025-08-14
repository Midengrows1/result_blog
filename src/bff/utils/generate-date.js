export const generateDate = () => {
    const start = new Date(2000, 0, 1).getTime();
    const end = new Date(2025, 11, 31).getTime();
    const randomTime = start + Math.random() * (end - start);

    return new Date(randomTime)
        .toISOString()
        .substring(0, 16)
        .replace('T', ' ');
};
