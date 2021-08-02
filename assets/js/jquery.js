// HTML document loaded
let loadHTML = $('<span>HTML loaded</span>')
$(() => loadHTML)

$('#eventLoadJq').on('click', function () {
  $('#eventLoadJq').after(loadHTML)
})