<script src="/js/purl.js" type="text/javascript" ></script>
<script>
var url = $.url(); // parse the current page URL
var queryString = url.attr('query');
var ary = queryString.split('&');


for (i=0; i < ary.length; i++) {
var aryQueryKey = ary[i].split('=');
document.cookie = aryQueryKey[0]+"="+aryQueryKey[1];
}

</script>