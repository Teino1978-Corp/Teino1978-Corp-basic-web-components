suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('instantiation', function(done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    flush(function() {
      assert(fixture);
      done();
    });
  });

  test.skip('default name', function(done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    assert.equal(fixture.name, 'en');
    done();
  });

  test.skip('set name', function(done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    fixture.name = 'fr-FR';
    flush(function() {
      assert.equal(fixture.name, 'fr-FR');
      fixture._loadCulture(fixture.name, function() {
        var culture = Globalize.cultures[fixture.name];
        assert.deepEqual(fixture.culture, culture);
        done();
      }.bind(fixture));
    });
  });

});