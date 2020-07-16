var utf8ToCharMap ={"Ä±":"ı","Ã§":"ç","ÅŸ":"ş","Ã¶":"ö","Ã¼":"ü","ÄŸ":"Ğ","Ä°":"İ","Ã‡":"Ç","Ã–":"Ö","Ãœ":"Ü"};
var convert_utf8ToChar = (str)=> { 
    for (key in utf8ToCharMap){
        str = str.replace(eval("/"+key+"/g"),utf8ToCharMap[key])
    }
    return str;
}
//Sample text
//convert_utf8ToChar("Ekip ve mÃ¼ÅŸteri toplantÄ±larÄ±nÄ±zÄ± E-ToplantÄ± ile hÄ±zlÄ± bir ÅŸekilde gerÃ§ekleÅŸtirebilirsiniz.")
