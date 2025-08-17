function calculateArea() {
    const sideA = document.getElementById("sideA");
    const sideB = document.getElementById("sideB");
    const sideC = document.getElementById("sideC");
    const result = document.getElementById("result");

    let a = Number(sideA.value),
        b = Number(sideB.value),
        c = Number(sideC.value);

    if (!(a && b && c)) return;

    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    result.innerHTML = area.toFixed(2);
}