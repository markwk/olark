// $Id:

Drupal.behaviors.olark = function() {
  if (typeof Drupal.settings.olark.uid != 'undefined') {
    olark.extend(function(api){
      api.chat.updateVisitorNickname({
        snippet: Drupal.settings.olark.name,
        hidesDefault: true
      });
      api.chat.updateVisitorStatus({
        snippet: Drupal.settings.olark.mail + ' | ' + Drupal.settings.olark.userpage
      });
      api.chat.onReady(function(){
        //$('#habla_pre_chat_name_input').val(Drupal.settings.olark.name);
        //$('#habla_pre_chat_email_input').val(Drupal.settings.olark.mail);
      });
    }); 
  }
}
