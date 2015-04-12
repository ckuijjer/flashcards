'use strict';

describe('FlashcardsApp', function () {
  var React = require('react/addons');
  var FlashcardsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    FlashcardsApp = require('components/FlashcardsApp.js');
    component = React.createElement(FlashcardsApp);
  });

  it('should create a new instance of FlashcardsApp', function () {
    expect(component).toBeDefined();
  });
});
