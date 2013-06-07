module.exports = function(messages) {
  var tips = {};

  messages.on('show', function(el, name, content){
    var tip = new Tip({
      target: el,
      content: message,
      position: el.getAttribute('data-message-position') || 'east',
      align: el.getAttribute('data-message-align') || 'left',
      width: el.getAttribute('data-message-width') || 200
    });
    tip.show();
    tips[name] = tip;
    el.classList.add('is-invalid');
  });

  messages.on('update', function(name, content){
    tips[name].setContent(content);
  });

  messages.on('hide', function(name){
    tips[name].hide();
    delete tips[name];
    el.classList.remove('is-invalid');
  });

};