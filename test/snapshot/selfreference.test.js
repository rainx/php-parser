const parser = require('../main');

describe("selfreference", function() {
  it("variable", function() {
    expect(parser.parseEval('self::$var;')).toMatchSnapshot();
  });
  it("constant", function() {
    expect(parser.parseEval('self::CONSTANT;')).toMatchSnapshot();
  });
  it("call", function() {
    expect(parser.parseEval('self::call();')).toMatchSnapshot();
  });
  it("uppercase", function() {
    expect(parser.parseEval('SELF::call();')).toMatchSnapshot();
  });
  it("argument", function() {
    expect(parser.parseEval('function fn(self $arg) {}')).toMatchSnapshot();
  });
  it("argument (uppercase)", function() {
    expect(parser.parseEval('function fn(SELF $arg) {}')).toMatchSnapshot();
  });
  it("return type declarations", function() {
    expect(parser.parseEval('function fn($arg): self {}')).toMatchSnapshot();
  });
  it("return type declarations (uppercase)", function() {
    expect(parser.parseEval('function fn($arg): SELF {}')).toMatchSnapshot();
  });
});
