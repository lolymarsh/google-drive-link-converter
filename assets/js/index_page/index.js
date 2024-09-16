$(document).ready(() => {
  $("#linkForm").submit(function (e) {
    e.preventDefault();
    var inputLink = $("#inputLink").val();
    var fileId = extractFileId(inputLink);

    var directDownloadLink = `https://drive.google.com/uc?id=${fileId}&export=download`;
    var embedLink = `<img src="https://drive.google.com/uc?id=${fileId}" />`;
    var renderLink = `https://drive.google.com/uc?id=${fileId}`;

    $("#directDownloadLink").val(directDownloadLink);
    $("#embedLink").val(embedLink);
    $("#renderLink").val(renderLink);
  });

  function extractFileId(url) {
    var match = url.match(/\/d\/(.+?)\/|id=(.+?)&/);
    return match ? match[1] || match[2] : null;
  }
});
