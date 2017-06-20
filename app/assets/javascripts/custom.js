function submitForm(e, el){
  if (e.keyCode == 13 && !e.shiftKey)
  {
    $(el).closest('form').submit();
    e.preventDefault();
  }
}
