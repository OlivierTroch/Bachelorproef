jQuery(document).ready(function(){var a=function(a,b,c,d,e,f,g,h,i,j){var k=1,l=colormag_script_vars.no_more_posts,m=b,n=d,o=c,p=e,q=f,r=g,s=h;jQuery(a).on("click",function(){k++,jQuery(j).show(),jQuery(a).attr("disabled",!0);var b={action:"get_ajax_results",tg_nonce:colormag_load_more.tg_nonce,tg_pagenumber:k,tg_category:m,tg_number:n,tg_random:o,tg_child_category:p,tg_tag:q,tg_author:r,tg_type:s};return jQuery.post(colormag_load_more.ajax_url,b,function(b){var c=jQuery(b);c.length?(jQuery(i).append(c),jQuery(j).hide(),jQuery(a).attr("disabled",!1)):(jQuery(j).hide(),jQuery(a).attr("disabled",!0),jQuery(a).html("<p>"+l+"</p>"))}),!1})},b=jQuery(".tg-ajax-btn-wrapper");jQuery(b).each(function(){var b="#"+jQuery(this).children(".tg-front-post-load-more").attr("id"),c=jQuery(this).children(".tg-front-post-load-more").data("category"),d=jQuery(this).children(".tg-front-post-load-more").data("random"),e=jQuery(this).children(".tg-front-post-load-more").data("number"),f=jQuery(this).children(".tg-front-post-load-more").data("child_category"),g=jQuery(this).children(".tg-front-post-load-more").data("tag"),h=jQuery(this).children(".tg-front-post-load-more").data("author"),i=jQuery(this).children(".tg-front-post-load-more").data("type"),j="#"+jQuery(this).children(".tg-append-ajax-datas").attr("id"),k="#"+jQuery(this).find(".waiting").attr("id");a(b,c,d,e,f,g,h,i,j,k)})});