function detailFormatter(index, row) {
  var html = []
  $.each(row, function (key, value) {
    html.push('<span class="col"><b>' + key + ':</b> ' + value + '</span>')
  })
  return html.join('')
}
function priceSorter(a, b) {
  var aa = a.replace('$', '')
  var bb = b.replace('$', '')
  return aa - bb
}
