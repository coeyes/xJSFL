// -----------------------------------------------------------------------------------------------------------------------------------------
// Demo code

	// initialize
		xjsfl.reload(this);
		clear();
		try
		{

		// uris	
			var list = new URIList('//core/', true);
		
	// --------------------------------------------------------------------------------
	// Find, filter and update a list
	
	
	
		if(0)
		{
			var paths = list.getPaths('core/ui');
			inspect(paths)
		}
		
		if(1)
		{
			
			/**
			 * Find an item in the list
			 * @param	{XULEvent}	event	Description
			 */
			function onShow(event)
			{
				clear();
				
				var path		= event.xul.controls.path.value;
				var pattern		= event.xul.controls.pattern.value;
				var operation	= event.xul.controls.operation.value;
				var asPaths		= event.xul.controls.paths.value;
				
				var find		= operation === 'find';
				var timer		= new Timer().start();
				
				
				if(operation == 'all')
				{
					results = asPaths ? list.getPaths() : list.getURIs();
				}
				else if(operation == 'update')
				{
					results = asPaths ? list.update(path).getPaths() : list.update(path).getURIs();
				}
				else
				{
					if(asPaths)
					{
						var results = list.getPaths(pattern, find);
					}
					else
					{
						var results = list.getURIs(pattern, find);
					}
				}
				
				
				event.xul.controls.time.value		= timer.stop();
				event.xul.controls.results.value	= find ? 1 : results.length;
				inspect(results);	
			}
			
			XUL
				.factory()
				.addTextbox('Path', 'path', {value:'//core/'})
				.addTextbox('Pattern')
				.addRadiogroup('Operation', 'operation', ['all', 'filter', 'find', 'update'])
				.addCheckbox('Show paths', 'paths')
				.addButton('Show')
				.add('Time')
				.add('Results')
				.addEvent('show', 'click', onShow)
				.show();
		}
		
		
	
	// catch
		}catch(err){xjsfl.debug.error(err);}
	