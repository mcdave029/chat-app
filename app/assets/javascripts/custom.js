function submitForm(e, el){
  console.log(e.keyCode);
  if (e.keyCode == 13 && !e.shiftKey)
  {
    $(el).closest('form').submit();
    e.preventDefault();
  }
}
