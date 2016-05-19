var React = require('react');
var ThumbnailList = require('./thumbnail-list.jsx');

var options = {
  thumbnailData: [
    {
      title: 'See Tutorials',
      badgeCount: 32,
      header: 'Learn React',
      description: 'I love learning new types of technology',
      imageUrl: 'https://facebook.github.io/react/img/logo.svg'
    },
    {
      title: 'See Tutorials',
      badgeCount: 32,
      header: 'Learn Gulp',
      description: 'I love learning new types of technology',
      imageUrl: 'https://uk.acquadiparma.com/skin/frontend/adp/default/node_modules/gulp-notify/assets/gulp-error.png'
    },
    {
      title: 'See Tutorials',
      badgeCount: 32,
      header: 'Learn Ember',
      description: 'I love learning new types of technology',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png'
    }
  ]
}

//How are we creating it?
var element = React.createElement(ThumbnailList, options);
//Where are we placing it?
ReactDOM.render(element, document.querySelector('.target'));
