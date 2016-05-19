var React = require('react');
var Badge = require('./badge.jsx');

module.exports = React.createClass({
  render: function(){
    return <div className="thumbnail">
      <img src={this.props.imageUrl} alt="thumbnail" />
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <Badge title={this.props.title} badgeCount={this.props.badgeCount}/>
        </div>
    </div>
  }
});
