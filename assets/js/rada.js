
function responseHandler(res) {
    $.each(res.rows, function (i, row) {
        row.state = $.inArray(row.id, selections) !== -1;
    });
    return res;
}

function propertyFormatter(value, row, index) {
  // return [row.property, row.rooms, row.area].join(', ')
  return 'Продається <span class="text-lowercase"><strong>' + row.property + '</strong></span>, кімнат <strong>' + row.rooms + '</strong>, площа <strong>' + row.area + '</strong>, <a href="javascript:void(0)">продавець...</a>';
}

function detailFormatter(index, row) {
  var html = []
  const title = {
    'id': 'ID',
    'property': 'Власність',
    'rooms': 'Кімнат',
    "area": "Площа",
    'price': 'Ціна',
    'seller': 'Продавець',
    'phone': 'Телефон'
  }
  $.each(row, function (key, value) {
    html.push('<span class="row">')
    html.push('<span class="col-4"><b>' + title[key] + ':</b> ' + value + '</span>')
    html.push('</span>')
  })
  return html.join('')
}
function priceSorter(a, b) {
  var aa = a.replace('$', '')
  var bb = b.replace('$', '')
  return aa - bb
}
