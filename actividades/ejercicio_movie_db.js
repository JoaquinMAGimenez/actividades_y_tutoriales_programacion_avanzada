const apikey = '8fa8fe67b5f6b84aedfe04b2350639db';

const peticion = fetch (`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`);

peticion
    .then(resp => resp.json())
    .then(json => {
         const title = json.title;

         const titleElement = document.createElement('h1');
         titleElement.textContent = title;
         document.body.append(titleElement);

         const overview = json.overview;
         const overviewElement = document.createElement('h2');
         overviewElement.textContent = overview;
         document.body.append(overviewElement);

         const posterPath = json.poster_path; 
         const posterPathElement = document.createElement('img'); 
         posterPathElement.src = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterPath}`;
         document.body.append(posterPathElement);

    })
    .catch(console.warn);
