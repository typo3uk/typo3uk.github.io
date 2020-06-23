

$(function() {
  var expandedRow = null;
  $('table').on('expand-row.bs.table', function (event, index) {
    if (expandedRow !== index) {
     	$('table').bootstrapTable('collapseRow', expandedRow)
    }
    expandedRow = index;
	});
  $('table').on('click-row.bs.table', function (e, row, $element) {
    $($element).siblings().removeClass('active');
    $($element).addClass('active');
  })
})

function fullnameFormatter(value, row, index) {
  return '<strong>' + row.fullname + '</strong> - ' + row.position + '';
}

function phonesDetailFormatter(index, row) {
  var html = []
  const title = {
    'id': 'ID',
    'division': 'Відділ',
    'position': 'Посада',
    "fullname": "Прізвище ім'я по батькові",
    'room': 'Кабінет',
    'phones': 'Телефон',
    'atc': 'Телефон внутрішній'
  }
  $.each(row, function (key, value) {
    html.push('<span class="col-12 col-sm-2 col-md-4"><b>' + title[key] + '</b>: ' + value + '</span>')
  })
  return '<span class="row mx-0">' + html.join('') + '</span>'
}

function propertyFormatter(value, row, index) {
  return 'Продається <span class="text-lowercase"><strong>' + row.property + '</strong></span>, кімнат <strong>' + row.rooms + '</strong>, площа <strong>' + row.area + '';
}

function propertyDetailFormatter(index, row) {
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
    html.push('<span class="col-12 col-sm-2 col-md-4"><b>' + title[key] + '</b>: ' + value + '</span>')
  })
  return '<span class="row mx-0">' + html.join('') + '</span>'
}

function priceSorter(a, b) {
  var aa = a.replace('$', '')
  var bb = b.replace('$', '')
  return aa - bb
}
