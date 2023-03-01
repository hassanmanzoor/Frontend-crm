var ckdWaterfall = function(){
    $('.waterfall .faq-item h5').click(function(){
        $(this).parent().toggleClass('opened');
    });
};


var ckdQuotes = function(){
    var $quotes = $('.ckd-quotes');
    if($quotes) {
        $quotes.each(function(index){
            var $this = $(this);
            var $blockquotes = $this.find('blockquote');
            $blockquotes.each(function(indexBQ){
                $(this).attr('id', 'bq'+indexBQ);
            });
            var $buttons = $this.find('.quotes-backward, .quotes-forward');
            // hide buttons
            if($blockquotes.length <= 1) { $buttons.hide(); }
            // click function for rotate blockquotes
            var clickQuoteButton = function(button, forward){
                var $button = $(button);
                var $quotesBlock = $button.closest('.ckd-quotes');
                if ($quotesBlock) {
                    var $blockquotes = $quotesBlock.find('blockquote');
                    var bqCount = $blockquotes.length;
                    var active = $blockquotes.filter('.active');
                    var activeIndex = $blockquotes.index(active);
                    var newIndex = 0;
                    if(forward == 0) {
                        // backward
                        newIndex = activeIndex - 1;
                    } else {
                        // forward
                        newIndex = activeIndex + 1;
                    }
                    if (newIndex >= bqCount) {
                        newIndex = 0;
                    } else if (newIndex < 0) {
                        newIndex = bqCount-1;
                    }
                    $blockquotes.removeClass('active');
                    $($blockquotes[newIndex]).addClass('active');
                }

            };
            // add action to buttons
            $buttons.each(function(buttonIndex){
                $(this).click(function(){
                    clickQuoteButton(this, buttonIndex);
                    return false;
                });
                $(this).attr('id','q'+index+'b'+buttonIndex);
            });
        });
    }
};

var ckdSelectors = function() {
    $("select").each(function () {
       if($(this).hasClass("chosen-select")) {

           if ($(this).hasClass('error')) {
               $(this).on('chosen:ready', function (e, chosen) {
                   $(chosen.chosen.container).find('.chosen-single').addClass('error')
               });
           }
           $(this).chosen();
        } else {
            $(this).selectpicker({style: 'form-control', menuStyle: ' '});
        }
    });
};

var ckdRadioButtons = function(){
    $(':radio').radio();
};

$(document).ready(function(){

    ckdWaterfall();

    ckdQuotes();

    ckdSelectors();

    ckdRadioButtons();

    var right,
        nav = $(".b-toggle-menu");
    right = "-260px";
    $(".navbar-toggle").on("click", function () {
        if ($("body").css("left") == right) {
            $("body, .b-header").animate({"left": 0}, 300);
            nav.animate({"right": right}, 300);
        } else {
            $("body, .b-header").animate({"left": right}, 300);
            nav.animate({"right": 0}, 300);
        }

    });

    let bannerShow = false;

    if(localStorage.getItem('marketingBanner') === null) {
        $(".banner-marketing").removeClass("is-hide");
        $(".mobile-banner-button").removeClass("is-hide");
    }

    $(".deadly").click(function(){
        $(this).parent().toggleClass("is-visible");
    });

    $(".close-mb").click(function() {
        $(".banner-marketing").removeClass("is-visible");
    });

    $(".close-mb-forever").click(function() {
        $(".banner-marketing").addClass("is-hide");
        $(".mobile-banner-button").addClass("is-hide");
        localStorage.setItem('marketingBanner', bannerShow)
    });

    $("body").click(function(e) {
        if(!$(e.target).closest('.banner-marketing').length) {
            if($(".banner-marketing").hasClass("is-visible")) {
                $(".banner-marketing").toggleClass('is-visible');
            }
        } 
    });
});