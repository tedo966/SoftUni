function spiceMustFlow(startYield) {
    let days = 0;
    let totalSpice = 0;

    while (startYield >= 100) {
        totalSpice += startYield - 26;
        startYield -= 10;
        days++;
    }

    let spiceLeft = Math.max(totalSpice - 26, 0); // Ensure spiceLeft is non-negative
    console.log(`${days}\n${spiceLeft}`);
}
spiceMustFlow(111)