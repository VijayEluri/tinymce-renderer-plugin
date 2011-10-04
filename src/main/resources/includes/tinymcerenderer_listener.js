jQuery(document).ready(function() {

    var tinyMCEConfigAdvanced = {
        theme : "advanced",
            
        relative_urls : false,
        remove_script_host : false,
        body_class : "mceEditor",
        theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,image,|,formatselect,fontselect,fontsizeselect",
        theme_advanced_buttons2 : "forecolor,backcolor,|,tablecontrols,|,hr,removeformat,visualaid,|,pastetext,pasteword,selectall,|,sub,sup,charmap,|,fullscreen,preview,cleanup,code",
        theme_advanced_buttons3 : "",
        theme_advanced_buttons4 : "",
        theme_advanced_toolbar_location : "top",
        theme_advanced_toolbar_align : "left",
        theme_advanced_resizing : true,
        theme_advanced_resize_horizontal : true,
        theme_advanced_resizing_use_cookie : true,
        theme_advanced_path : false,
        theme_advanced_statusbar_location : "bottom",
        plugins : "table,fullscreen,preview,contextmenu,inlinepopups,paste",
        dialog_type : "modal",
        table_cell_limit : 1000,
        table_default_border : 1,
        table_default_cellpadding : 5,
        table_default_cellspacing : 0,
        invalid_elements : "script,input,applet,embed,xml,style,object"
    }

    var tinyMCEConfigSimple = {
        theme : "advanced",
        relative_urls : false,
        remove_script_host : false,
        body_class : "mceEditor",
        theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist",
        theme_advanced_buttons2 : "",
        theme_advanced_buttons3 : "",
        theme_advanced_buttons4 : "",
        theme_advanced_toolbar_location : "top",
        theme_advanced_toolbar_align : "left",
        theme_advanced_resizing : true,
        theme_advanced_resize_horizontal : true,
        theme_advanced_resizing_use_cookie : true,
        theme_advanced_path : false,
        theme_advanced_statusbar_location : "",
        plugins : "contextmenu",
        dialog_type : "modal",
        invalid_elements : "script,input,applet,embed,xml,style,object"
    }
        
    // We seem to have to unbind previous handlers. I'm not sure why it is bound twice.
    jQuery(document).unbind('dialogContentReady');
    
    // Bind the init function so it runs when the dialog loads
    jQuery(document).bind('dialogContentReady', function (e, dialog) {
        jQuery(dialog.$popupContent).find('.myTinyMCETextArea').tinymce(tinyMCEConfigSimple);
    });
    
    
    function removeTinyMCEEditor() {
        if (jQuery('textarea.myTinyMCETextArea').tinymce() != undefined){
            jQuery('textarea.myTinyMCETextArea').tinymce().remove();
        }
    }
    
    // the following hacks are to handle the fact the main issue page has two comment boxes (top, bottom)
    
    if (jQuery("#comment-issue").length != 0) {
        jQuery("#comment-issue").click( function(){
            removeTinyMCEEditor()
            jQuery('textarea.myTinyMCETextArea').tinymce(tinyMCEConfigAdvanced);
        });
    } else {
        jQuery('textarea.myTinyMCETextArea').tinymce(tinyMCEConfigAdvanced);
    }

    if (jQuery("#footer-comment-button").length != 0) {
        jQuery("#footer-comment-button").click(function(){
            removeTinyMCEEditor()
            jQuery('textarea.myTinyMCETextArea').tinymce(tinyMCEConfigAdvanced);
        });
    }

    jQuery("#issue-comment-add-cancel").click(function(){
        removeTinyMCEEditor()
    });
});