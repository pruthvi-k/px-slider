// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for a simple px-sliding-gauge', function() {
    test('Check assigned value of simple px-sliding-gauge', function(done){
      var sliderEl = Polymer.dom(document).querySelector('#px_sliding_gauge_simple'),
          sliderValue = sliderEl.value,
          displayValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value,
          sliderScale = sliderEl.scale;
      assert.equal(sliderValue, '10');
      assert.equal(displayValue, '10');
      assert.equal(sliderScale, 'linear');
      done();
    });
  });
  suite('Custom Automation Tests for a complex px-sliding-gauge', function() {
    test('Check assigned value of complex px-sliding-gauge', function(done){
      var sliderEl = Polymer.dom(document).querySelector('#px_sliding_gauge_complex'),
          sliderValue = sliderEl.value,
          displayValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value,
          sliderScale = sliderEl.scale;
      assert.equal(sliderValue, '10.00');
      assert.equal(displayValue, '10.00');
      assert.equal(sliderScale, 'linear');
      done();
    });
  });
  suite('Custom Automation Tests for a disabled px-sliding-gauge', function() {
    test('Check assigned value of px-sliding-gauge', function(done){
      var sliderEl = Polymer.dom(document).querySelector('#px_sliding_gauge_disabled'),
          sliderValue = sliderEl.value;
      assert.equal(sliderValue, '10');
      done();
    });
    test('Test that input field is disabled', function(done){
      var sliderEl = Polymer.dom(document).querySelector('#px_sliding_gauge_disabled'),
          sliderStartField = Polymer.dom(sliderEl.root).querySelector('#inputStart');
      assert.isTrue(sliderStartField.disabled);
      done();
    });
  });
  // suite('Custom Automation Tests for a multi-handle (range) px-slider with negative range', function() {
  //   test('Check assigned values of range px-slider', function(done){
  //     var sliderEl = Polymer.dom(document).querySelector('#px_sliding_gauge_range_neg'),
  //         sliderStartValue = sliderEl.startValue,
  //         displayStartValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value,
  //         sliderEndValue = sliderEl.endValue,
  //         displayEndValue = Polymer.dom(sliderEl.root).querySelector('#inputEnd').value;
  //     assert.equal(sliderStartValue, '-30');
  //     assert.equal(displayStartValue, '-30');
  //     assert.equal(sliderEndValue, '20');
  //     assert.equal(displayEndValue, '20');
  //     done();
  //   });
  // });
  // suite('Custom Automation Tests for a logarithmic px-slider', function() {
  //   test('Check assigned values of log px-slider', function(done){
  //     var sliderEl = Polymer.dom(document).querySelector('#px_slider_logarithmic'),
  //         sliderValue = sliderEl.value,
  //         sliderScale = sliderEl.scale,
  //         displayValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value;
  //     assert.equal(sliderValue, '10');
  //     assert.equal(displayValue, '10');
  //     assert.equal(sliderScale, 'logarithmic');
  //     done();
  //   });
  // });
};
