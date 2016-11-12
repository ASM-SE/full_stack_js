
import { upcase } from 'start-project/helpers/upcase';
import { module, test } from 'qunit';

module('Unit | Helper | upcase');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = upcase(["start_project"]);
  assert.equal(result, "START_PROJECT");
});
