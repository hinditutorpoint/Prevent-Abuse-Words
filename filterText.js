(function ( $ ) {
    var swell =  [];
    $.fn.filterTxt = function( options ) {
        var settings = $.extend({
            url: null,
            replaceWith:null,
            color: "orange",
            backgroundColor: null,
            lan:'en',
            customSwell:[],
            afterFocus:false
        }, options );
        switch(settings.lan){
            case 'en':
            swell = swell.concat(en, settings.customSwell);
            break;
            case 'hi':
            swell = swell.concat(hi, settings.customSwell);
            break;
            case 'fr':
            swell = swell.concat(fr, settings.customSwell);
            break;
            case 'es':
            swell = swell.concat(es, settings.customSwell);
            break;
            case 'it':
            swell = swell.concat(it, settings.customSwell);
            break;
            case 'tr':
            swell = swell.concat(tr, settings.customSwell);
            default:
            swell = swell.concat(en, hi, fr, es, it, settings.customSwell);
        }
        $obj = $(this);
        var data = [];
        $obj.keyup(function(e) {
          e.preventDefault();
          if (e.which == 32) {
                var words    = $obj.val();
                var space    = words.split(" ");
                var position = parseInt(space.length - 1);
                var lastword = space[position - 1];
                var mixed    = (settings.url == null) ? swell : loadJson(settings.url);
                var regex    = new RegExp(mixed.join("|"), "gi");
                var rep      = (settings.replaceWith == null) ? '*****' : settings.replaceWith ;
                if (settings.afterFocus == false) {
                    if (words.search(regex) > -1) {
                        return $obj.val(words.replace(regex, rep));
                    }
                }
          }
          
        });

        $obj.focusout(function(e) {
            e.preventDefault();
            /*$.each(swell, function(index, val) {
                data.push('"'+btoa(val)+'"');
            });
            $obj.after('<a download="info.txt" id="downloadlink" style="text-decoration:none; font-size: 15px; clear: both; margin-top: 10px; display: block;">Download</a>');
            //console.log(Base64.encode('This'));
            var link = document.getElementById('downloadlink');
            link.href = makeTextFile(data);*/
            var words    = $(this).val();
            var mixed    = (settings.url == null) ? swell : loadJson(settings.url);
            var regex    = new RegExp(mixed.join("|"), "gi");
            var rep      = (settings.replaceWith == null) ? '*****' : settings.replaceWith ;
            if (settings.afterFocus) {
                if (words.search(regex) > -1) {
                    return $obj.val(words.replace(regex, rep));
                }
            }
        });
 
    };

    $.fn.clearSwell = function( options ) {
        var settings = $.extend({
            url: null,
            replaceWith:null,
            color: "orange",
            backgroundColor: null,
            lan:'en',
            customSwell:[]
        }, options );
        switch(settings.lan){
            case 'en':
            swell = swell.concat(en, settings.customSwell);
            break;
            case 'hi':
            swell = swell.concat(hi, settings.customSwell);
            break;
            case 'fr':
            swell = swell.concat(fr, settings.customSwell);
            break;
            case 'es':
            swell = swell.concat(es, settings.customSwell);
            break;
            case 'it':
            swell = swell.concat(it, settings.customSwell);
            break;
            case 'tr':
            swell = swell.concat(tr, settings.customSwell);
            default:
            swell = swell.concat(en, hi, fr, es, it, settings.customSwell);
        }
        $obj = $(this);
        $obj.each(function(index, el) {
            var words = $obj.text();
            var mixed    = (settings.url == null) ? swell : loadJson(settings.url);
            var regex    = new RegExp(mixed.join("|"), "gi");
            var rep      = (settings.replaceWith == null) ? '*****' : settings.replaceWith ;
                if (words.search(regex) > -1) {
                    return $obj.text(words.replace(regex, rep));
                }
        });
    };

    txtEncode    = function(input) {
        
         var encodedString = btoa(input);
         console.log(encodedString);

    };
    txtDecode    = function (input) {
         var encodedString = atob(input);
         console.log(encodedString);
    };

    makeTextFile = function (text) {
        var textFile = null;
        var data = new Blob([text], {type: 'text/plain'});
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
    };
    function loadJson(url) {
        if (active) {
            $.getJSON( url, function( data ) {
                  var mixin;
                  var items = [];
                  $.each( data, function( key, val ) {
                    items.push( val );
                  });
                    //mixin = items;
                 //return items;
                 console.log(items);
            });
        }
    }
 
}( jQuery ));
