(function ( $ ) {
    var swell =  [];
    var en     = ["2g1c", "2 girls 1 cup", "acrotomophilia", "anal", "anilingus", "anus", "arsehole", "ass", "asshole", "assmunch", "auto erotic", "autoerotic", "babeland", "baby batter", "ball gag", "ball gravy", "ball kicking", "ball licking", "ball sack", "ball sucking", "bangbros", "bareback", "barely legal", "barenaked", "bastardo", "bastinado", "bbw", "bdsm", "beaver cleaver", "beaver lips", "bestiality", "bi curious", "big black", "big breasts", "big knockers", "big tits", "bimbos", "birdlock", "bitch", "black cock", "blonde action", "blonde on blonde action", "blow j", "blow job", "blow your l", "blue waffle", "blumpkin", "bollocks", "bondage", "boner", "boob", "boobs", "booty call", "brown showers", "brunette action", "bukkake", "bulldyke", "bullet vibe", "bung hole", "bunghole", "busty", "butt", "buttcheeks", "butthole", "camel toe", "camgirl", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "chocolate rosebuds", "circlejerk", "cleveland steamer", "clit", "clitoris", "clover clamps", "clusterfuck", "cock", "cocks", "coprolagnia", "coprophilia", "cornhole", "cum", "cumming", "cunnilingus", "cunt", "darkie", "date rape", "daterape", "deep throat", "deepthroat", "dick", "dildo", "dirty pillows", "dirty sanchez", "dog style", "doggie style", "doggiestyle", "doggy style", "doggystyle", "dolcett", "domination", "dominatrix", "dommes", "donkey punch", "double dong", "double penetration", "dp action", "eat my ass", "ecchi", "ejaculation", "erotic", "erotism", "escort", "ethical slut", "eunuch", "faggot", "fecal", "felch", "fellatio", "feltch", "female squirting", "femdom", "figging", "fingering", "fisting", "foot fetish", "footjob", "frotting", "fuck", "fuck buttons", "fudge packer", "fudgepacker", "futanari", "g-spot", "gang bang", "gay sex", "genitals", "giant cock", "girl on", "girl on top", "girls gone wild", "goatcx", "goatse", "gokkun", "golden shower", "goo girl", "goodpoop", "goregasm", "grope", "group sex", "guro", "hand job", "handjob", "hard core", "hardcore", "hentai", "homoerotic", "honkey", "hooker", "hot chick", "how to kill", "how to murder", "huge fat", "humping", "incest", "intercourse", "jack off", "jail bait", "jailbait", "jerk off", "jigaboo", "jiggaboo", "jiggerboo", "jizz", "juggs", "kike", "kinbaku", "kinkster", "kinky", "knobbing", "leather restraint", "leather straight jacket", "lemon party", "lolita", "lovemaking", "make me come", "male squirting", "masturbate", "menage a trois", "milf", "missionary position", "motherfucker", "mound of venus", "mr hands", "muff diver", "muffdiving", "nambla", "nawashi", "negro", "neonazi", "nig nog", "nigga", "nigger", "nimphomania", "nipple", "nipples", "nsfw images", "nude", "nudity", "nympho", "nymphomania", "octopussy", "omorashi", "one cup two girls", "one guy one jar", "orgasm", "orgy", "paedophile", "panties", "panty", "pedobear", "pedophile", "pegging", "penis", "phone sex", "piece of shit", "piss pig", "pissing", "pisspig", "playboy", "pleasure chest", "pole smoker", "ponyplay", "poof", "poop chute", "poopchute", "porn", "porno", "pornography", "prince albert piercing", "pthc", "pubes", "pussy", "queef", "raghead", "raging boner", "rape", "raping", "rapist", "rectum", "reverse cowgirl", "rimjob", "rimming", "rosy palm", "rosy palm and her 5 sisters", "rusty trombone", "s&m", "sadism", "scat", "schlong", "scissoring", "semen", "sex", "sexo", "sexy", "shaved beaver", "shaved pussy", "shemale", "shibari", "shit", "shota", "shrimping", "slanteye", "slut", "smut", "snatch", "snowballing", "sodomize", "sodomy", "spic", "spooge", "spread legs", "strap on", "strapon", "strappado", "strip club", "style doggy", "suck", "sucks", "suicide girls", "sultry women", "swastika", "swinger", "tainted love", "taste my", "tea bagging", "threesome", "throating", "tied up", "tight white", "tit", "tits",  "titties", "titty", "tongue in a", "topless", "tosser", "towelhead", "tranny", "tribadism", "tub girl", "tubgirl", "tushy", "twat", "twink", "twinkie", "two girls one cup", "undressing", "upskirt", "urethra play", "urophilia", "vagina", "venus mound", "vibrator", "violet wand", "vorarephilia", "voyeur", "vulva", "wank", "wet dream", "wetback", "white power", "women rapping", "wrapping men", "wrinkled starfish", "xx", "xxx", "yaoi", "yellow showers", "yiffy", "zoophilia"];
    var hi     = ["aand", "aandu", "balatkar", "beti chod", "bhadva", "bhadve", "bhandve", "bhootni ke", "bhosad", "bhosadi ke", "boobe", "chakke", "chinaal", "chinki", "chod", "chodu", "chodu bhagat", "chooche", "choochi", "choot", "choot ke baal", "chootia", "chootiya", "chuche", "chuchi", "chudai khanaa", "chudan chudai", "chut", "chut ke baal", "chut ke dhakkan", "chut maarli", "chutad", "chutadd", "chutan", "chutia", "chutiya", "gaand", "gaandfat", "gaandmasti", "gaandufad", "gandu", "gashti", "gasti", "ghassa", "ghasti", "harami", "haramzade", "hawas", "hawas ke pujari", "hijda", "hijra", "jhant", "jhant chaatu", "jhant ke baal", "jhantu", "kamine", "kaminey", "kanjar", "kutta", "kutta kamina", "kutte ki aulad", "kutte ki jat", "kuttiya", "loda", "lodu", "lund", "lauda", "lund choos", "lund khajoor", "lundtopi", "lundure", "maa ki chut", "maal", "madar chod", "mooh mein le", "mutth", "najayaz", "najayaz aulaad", "najayaz paidaish", "paki", "pataka", "patakha", "raand", "randi", "saala", "saala kutta", "saali kutti", "saali randi", "suar", "suar ki aulad", "saale", "tatte", "tatti", "teri maa ka bhosada", "teri maa ka boba chusu", "teri maa ki chut", "how to fuck", "kaise chode", "pel", "mcbc"];
    var fr     = ["baiser", "bander", "bigornette" ,"bite", "bitte", "bloblos", "bordel", "bosser", "bourré", "bourrée", "brackmard", "branlage", "branler", "branlette", "branleur", "branleuse", "brouter le cresson", "caca", "cailler", "chatte", "chiasse", "chier", "chiottes","clito", "clitoris", "con", "connard", "connasse", "conne", "couilles", "cramouille", "cul", "déconne", "déconner", "drague", "emmerdant", "emmerder", "emmerdeur", "emmerdeuse", "enculé", "enculée", "enculeur", "enculeurs", "enfoiré", "enfoirée", "étron", "fille de pute", "fils de pute", "folle", "foutre", "gerbe", "gerber", "gouine", "grande folle", "grogniasse", "gueule", "jouir", "la putain de ta mère", "MALPT", "ménage à trois", "merde", "merdeuse", "merdeux", "meuf", "nègre", "nique ta mère", "nique ta race", "palucher", "pédale", "pédé", "péter", "pipi", "pisser", "pouffiasse", "pousse-crotte", "putain", "pute", "ramoner", "sac à merde", "salaud", "salope", "suce", "tapette", "teuf", "tringler", "trique", "trou du cul", "turlute", "veuve", "zigounette", "zizi"];
    var es     = ["Asesinato", "asno", "bastardo", "Bollera", "Cabron", "Cabrón", "Caca", "Chupada", "Chupapollas", "Chupetón", "concha", "Concha de tu madre", "Coño", "Coprofagía", "Culo", "Drogas", "Esperma", "Fiesta de salchichas", "Follador", "Follar", "Gilipichis", "Gilipollas", "Hacer una paja", "Haciendo el amor", "Heroína", "Hija de puta", "Hijaputa", "Hijo de puta", "Hijoputa", "Idiota", "Imbécil", "infierno", "Jilipollas", "Kapullo", "Lameculos", "Maciza", "Macizorra", "maldito", "Mamada", "Marica", "Maricón", "Mariconazo", "martillo", "Mierda", "Nazi", "Orina", "Pedo", "Pervertido", "Pezón", "Pinche", "Pis", "Prostituta", "Puta", "Racista", "Ramera", "Sádico", "Semen", "Sexo", "Sexo oral", "Soplagaitas", "Soplapollas", "Tetas grandes", "Tía buena", "Travesti", "Trio", "Verga", "vete a la mierda", "Vulva"];
    var it     = ["allupato", "ammucchiata", "anale", "arrapato", "arrusa", "arruso", "assatanato", "bagascia", "bagassa", "bagnarsi", "baldracca", "balle", "battere", "battona", "belino", "biga", "bocchinara", "bocchino", "bofilo", "boiata", "bordello", "brinca", "bucaiolo", "budiùlo", "buona donna", "busone", "cacca", "caccati in mano e prenditi a schiaffi", "caciocappella", "cadavere", "cagare", "cagata", "cagna", "cammello", "cappella", "carciofo", "carità", "casci", "cazzata", "cazzimma", "cazzo", "checca", "chiappa", "chiavare", "chiavata", "ciospo", "ciucciami il cazzo", "coglione", "coglioni", "cornuto", "cozza", "culattina", "culattone", "culo", "di merda", "ditalino", "duro", "fare unaŠ", "fava", "femminuccia", "fica", "figa", "figlio di buona donna", "figlio di puttana", "figone", "finocchio", "fottere", "fottersi", "fracicone", "fregna", "frocio", "froscio", "fuori come un balcone", "goldone", "grilletto", "guanto", "guardone", "incazzarsi", "incoglionirsi", "ingoio", "larte bolognese", "leccaculo", "lecchino", "lofare", "loffa", "loffare", "lumaca", "manico", "mannaggia", "merda", "merdata", "merdoso", "mignotta", "minchia", "minchione", "mona", "monta", "montare", "mussa", "nave scuola", "nerchia", "nudo", "padulo", "palle", "palloso", "patacca", "patonza", "pecorina", "pesce", "picio", "pincare", "pipa", "pipì", "pippone", "pirla", "pisciare", "piscio", "pisello", "pistola", "pistolotto", "pomiciare", "pompa", "pompino", "porca", "porca madonna", "porca miseria", "porca puttana", "porco due", "porco zio", "potta", "puppami", "puttana", "quaglia", "recchione", "regina", "rincoglionire", "rizzarsi", "rompiballe", "ruffiano", "sbattere", "sbattersi", "sborra", "sborrata", "sborrone", "sbrodolata", "scopare", "scopata", "scorreggiare", "sega", "slinguare", "slinguata", "smandrappata", "soccia", "socmel", "sorca", "spagnola", "spompinare", "sticchio", "stronza", "stronzata", "stronzo", "succhiami", "sveltina", "sverginare", "tarzanello", "terrone", "testa di cazzo", "tette", "tirare", "topa", "troia", "trombare", "uccello", "vacca", "vaffanculo", "vangare", "venire", "zinne", "zio cantante", "zoccola"];
    var tr     = ["QXNlc2luYXRv","YXNubw==","YmFzdGFyZG8=","Qm9sbGVyYQ==","Q2Ficm9u","Q2FicsOzbg==","Q2FjYQ==","Q2h1cGFkYQ==","Q2h1cGFwb2xsYXM=","Q2h1cGV0w7Nu","Y29uY2hh","Q29uY2hhIGRlIHR1IG1hZHJl","Q2/DsW8=","Q29wcm9mYWfDrWE=","Q3Vsbw==","RHJvZ2Fz","RXNwZXJtYQ==","Rmllc3RhIGRlIHNhbGNoaWNoYXM=","Rm9sbGFkb3I=","Rm9sbGFy","R2lsaXBpY2hpcw==","R2lsaXBvbGxhcw==","SGFjZXIgdW5hIHBhamE=","SGFjaWVuZG8gZWwgYW1vcg==","SGVyb8OtbmE=","SGlqYSBkZSBwdXRh","SGlqYXB1dGE=","SGlqbyBkZSBwdXRh","SGlqb3B1dGE=","SWRpb3Rh","SW1iw6ljaWw=","aW5maWVybm8=","SmlsaXBvbGxhcw==","S2FwdWxsbw==","TGFtZWN1bG9z","TWFjaXph","TWFjaXpvcnJh","bWFsZGl0bw==","TWFtYWRh","TWFyaWNh","TWFyaWPDs24=","TWFyaWNvbmF6bw==","bWFydGlsbG8=","TWllcmRh","TmF6aQ==","T3JpbmE=","UGVkbw==","UGVydmVydGlkbw==","UGV6w7Nu","UGluY2hl","UGlz","UHJvc3RpdHV0YQ==","UHV0YQ==","UmFjaXN0YQ==","UmFtZXJh","U8OhZGljbw==","U2VtZW4=","U2V4bw==","U2V4byBvcmFs","U29wbGFnYWl0YXM=","U29wbGFwb2xsYXM=","VGV0YXMgZ3JhbmRlcw==","VMOtYSBidWVuYQ==","VHJhdmVzdGk=","VHJpbw==","VmVyZ2E=","dmV0ZSBhIGxhIG1pZXJkYQ==","VnVsdmE="];
    var active = false;
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