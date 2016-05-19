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

var Badge = React.createClass({displayName: "Badge",
  render: function () {
    return React.createElement("button", {className: "btn btn-primary", type: "button"},
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.badgeCount)
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {

    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, list)
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "thumbnail"},
      React.createElement("img", {src: this.props.imageUrl, alt: "thumbnail"}),
        React.createElement("div", {className: "caption"},
          React.createElement("h3", null, this.props.header),
          React.createElement("p", null, this.props.description),
          React.createElement(Badge, {title: this.props.title, badgeCount: this.props.badgeCount})
        )
    )
  }
});
