document.getElementById('search_btn').addEventListener('click', function(){
	var title = document.getElementById('title_text').value;
	var request = new Request('https://www.omdbapi.com/?apikey=4dd3fc90&t='+title);
	fetch(request).then(function(result){
		return result.json();
	}).then(function(data){
		var searchEl = document.getElementById('search_result');
		document.getElementById('search_result').innerHTML = "";
			var movieContainer = document.createElement('div');
			movieContainer.className = 'search-result--item';
			var titleEl = document.createElement('div');
			titleEl.innerText = 'Title:'+data.Title;
			var divE1 = document.createElement('div');
	        divE1.innerText = 'Year:'+data.Year + ' || ' + 'Genre:'+data.Genre + ' || ' + 'Runtime:'+data.Runtime;
			var plotE1 = document.createElement('p');
			plotE1.innerText = 'Plot:'+data.Plot
			var Released = document.createElement('div');
			Released.innerText = 'Initial Release:'+data.Released;
			var div1E1 = document.createElement('div')
			div1E1.innerText = 'IMDB Rating:' + data.imdbRating + ' || ' + 'RottenTomatoes:'+data.tomatoMeter +' || '+ 'Metascore:'+data.Metascore
			var Director  = document.createElement('div');
			Director.innerText = 'Director:'+data.Director;
			var posterEl = document.createElement('img');
            posterEl.src = data.Poster;			
			movieContainer.appendChild(titleEl);
			movieContainer.appendChild(divE1);
			movieContainer.appendChild(plotE1);
			movieContainer.appendChild(Released);
			movieContainer.appendChild(Director);
			movieContainer.appendChild(div1E1);
			movieContainer.appendChild(posterEl);
			searchEl.appendChild(movieContainer);
		//}
	});
});