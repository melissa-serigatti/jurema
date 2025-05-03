function soma(a, b) {
    return a + b;
}

test("Test soma", () => {
    expect(soma(10,6)).toBe(16);
});

test("Test soma 8+3=11", () => {
    expect(soma(8,3)).toBe(11);
});
