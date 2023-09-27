function convert() {
    const inputAmount = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("from").value;
    const toUnit = document.getElementById("to").value;

    const units = {
        "KB": 1,
        "MB": 1024,
        "GB": 1024 * 1024,
        "TB": 1024 * 1024 * 1024
    };

    const result = inputAmount * units[fromUnit] / units[toUnit];

    document.getElementById("result").innerHTML = `${inputAmount} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}
