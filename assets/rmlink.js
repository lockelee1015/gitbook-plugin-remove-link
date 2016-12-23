require([
    'gitbook',
    'jquery'
],function(gitbook,$){
    console.log($('.gitbook-link'))
    var link = $('.gitbook-link')
    link.attr('href','http://www.joinforwin.com:90')
    link.text('Published by Joinforwin')
})