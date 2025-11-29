function morning() {
    return "Good morning!";
}

function evening() {
    return "Good evening!";
}

module.exports.morning = morning;
// 不一定要寫module.exports
exports.evening = evening;