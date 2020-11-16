const stringComparator = (string1, string2) => {
    return (
        string1 !== undefined &&
        string2 !== undefined &&
        string1.trim().toLowerCase() === string2.trim().toLowerCase()
    );
}

export { stringComparator };