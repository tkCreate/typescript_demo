// 定义函数判断是否是正方形 Square, 返回boolean
function isSquare(shape) {
    return "size" in shape; // 如果返回true，说明是 Square
}
// 定义函数判断是否是长方形 Rectangle, 返回boolean
function isRectangle(shape) {
    return "width" in shape; // 如果返回true，说明是 Rectangle
}
function area(shape) {
    // 如果是正方形
    if (isSquare(shape))
        return shape.size * shape.size;
    // 如果是长方形
    if (isRectangle(shape))
        return shape.width * shape.height;
}
console.log(area({ size: 12 })); // 144
let b = { width: 12, height: 2 };
console.log(area(b)); // 24
//# sourceMappingURL=test.js.map