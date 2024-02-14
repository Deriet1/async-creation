const API = 'https://youtube-v311.p.rapidapi.com/activities/?part=snippet&channelId=UCUgdt8lhtwXc1psSSbF245Q&maxResults=7';

const content = document.getElementById('content')  || null ;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '22af0a27fdmsh30893c92dba4297p19da2bjsneb086f13d165',
		'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
	}
};


async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}

(async()=>{
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
    <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-Black-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h4>
        </div>
      </div>
      </a>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();