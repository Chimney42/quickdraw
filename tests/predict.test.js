const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const predict = require('../functions/index').predict;

chai.use(sinonChai);
const expect = chai.expect;

describe('The Predict function', () => {
  it('should be triggered', () => {
    const name = 'Foobar';
    const req = {
      body: {
        name: name
      }
    };
    const res = { send: sinon.stub() };

    // Call tested function
    predict(req, res);

    // Verify behavior of tested function
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args).to.deep.equal([`Hello ${name}!`]);
  })
});