H.ready(["jquery"],function(){jQuery(function(e){var n=e("#c-header-user-login-default"),a=e("#c-header-user-login-extend");n.add(a).hover(function(){n.addClass("on"),a.show()},function(){a.hide(),n.removeClass("on")});var t=e("#c-header-msgcount"),r=0;e("#c-header-msgdetails span").each(function(){r+=parseInt(e(this).text())}),t.text(r)})});