function extractText() {

    let items = $('ul#items li')
        .toArray()
        .map(li => li.textContent)
        .join(', ');

    $('#result').text(items);


    // $('.elemnt-class')
    // $('elemtn-tag')
    // button.on('click', function () {
    //
    // })
}
