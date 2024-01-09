let button = document.getElementById("btn").onclick = function() {
  let link = document.getElementById("userInput").value;

  const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/custom/?url=${link}&quality=320`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fddac2cc2emsh54d66c3425a468cp14354bjsn9753fb99c348',
      'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      let main = document.getElementById("article");
      console.log(data);

      
      let name = document.createElement("h1");
      let size = document.createElement("p");
      let downloadBtn = document.createElement("button");

      
      name.innerHTML = data.title;
      size.innerHTML = `File Size: ${data.size}`;

      downloadBtn.textContent = "Download File";
      downloadBtn.addEventListener("click", function() {

        let downloadLink = document.createElement("a");
        downloadLink.href = data.link; 
        downloadLink.download = data.title;
        downloadLink.click(); // 
      });

      main.innerHTML = '';
      main.appendChild(name);
      main.appendChild(size);
      main.appendChild(downloadBtn);
    });
}