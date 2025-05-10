function soma(a, b) {
    return a + b;
}

const subtrai = (a, b) => ( a - b);

test("Teste soma 10+6=16", () => {
    expect(soma(10,6)).toBe(16);
});

test("Teste soma 8+3=11", () => {
    expect(soma(8,3)).toBe(11);
});

test("Teste subtrai 4-3=1", () => {
    expect(subtrai(4,3)).toBe(1);
});
