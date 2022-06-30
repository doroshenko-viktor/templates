"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('index tests', () => {
    it('sum should return 4, when adding 2 + 2', () => {
        const result = (0, index_1.add)(2, 2);
        expect(result).toBe(4);
    });
});
//# sourceMappingURL=index.test.js.map