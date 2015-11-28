// create namespace
var plugin = plugin || {};

// imagecard plugin
plugin.imagecard = {

	// creates map
	create:function(){
	
		// generate uniqId
		var id = respond.editor.generateUniqId('imagecard', 'imagecard');
		
		// build html
		var html = respond.editor.defaults.elementMenu +
  			'<div class="title respond-element">'+
	  			'<plugin-imagecard mode="edit" '+
	  			'img="http://www.chirinorealestate.com/wp-content/uploads/2014/09/the-reserve.jpg" '+
	  			'title="$1,000,00" '+
	  			'text="Address" '+
	  			'sash="Tampa" '+
	  			'></plugin-imagecard>'+
  			'</div>'
					
		// tag attributes
		var attrs = [];
		attrs['id'] = id;
		attrs['data-id'] = id;
		attrs['class'] = 'plugin-imagecard';
		attrs['data-cssclass'] = '';
		attrs['data-img'] = '';
		attrs['data-href'] = '';
		
		// append element to the editor
		respond.editor.append(
			 utilities.element('div', attrs, html)
		);
	
		return true;
	},

	// parse example
	parse:function(node){
	
		// get params
		var id = $(node).attr('id');
		var img = $(node).attr('img');
		var href = $(node).attr('href');
		var title = $(node).attr('title');
		var text = $(node).attr('text');
		var sash = $(node).attr('sash');
		
		// build html
		var html = html = respond.editor.defaults.elementMenu +
  			'<div class="title respond-element">'+
	  			'<plugin-imagecard mode="edit" '+
	  			'img="'+img+'" '+
	  			'href="'+href+'" '+
	  			'title="'+title+'" '+
	  			'text="'+text+'" '+
	  			'sash="'+sash+'" '+
	  			'></plugin-imagecard>'+
  			'</div>';
					
		// tag attributes
		var attrs = [];
		attrs['id'] = id;
		attrs['data-id'] = id;
		attrs['class'] = 'plugin-imagecard';
		attrs['data-cssclass'] = $(node).attr('class');
		attrs['data-img'] = img;
		attrs['data-href'] = href;
		return utilities.element('div', attrs, html);
				
	},
	
	// generate example
	generate:function(node){

		// tag attributes
		var attrs = [];
		attrs['id'] = $(node).attr('data-id');
		attrs['class'] = $(node).attr('data-cssclass');
		attrs['img'] = $(node).attr('data-img');
		attrs['href'] = $(node).attr('data-href');

		attrs['title'] = $(node).find('div.card-title').html();
		attrs['text'] = $(node).find('div.card-text').html();
		attrs['sash'] = $(node).find('div.card-sash').html();

		console.log("generate", attrs);
		return utilities.element('plugin-imagecard', attrs, '');
		
	},

	
};