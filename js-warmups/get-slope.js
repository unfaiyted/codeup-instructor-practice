function getSlope(p1, p2) {
    // Return the slope of the line through p1 and p2
    const [x1,y1] = p1
    const [x2,y2] = p2

    let m = (y2 - y1) / (x2-x1)

    return (isNaN(m) || m === Infinity) ? null : m

}

