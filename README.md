# html_utf8_turkish_chars_and_converter

var utf8ToCharMap ={"Ä±":"ı","Ã§":"ç","ÅŸ":"ş","Ã¶":"ö","Ã¼":"ü","ÄŸ":"Ğ","Ä°":"İ","Ã‡":"Ç","Ã–":"Ö","Ãœ":"Ü"};
var convert_utf8ToChar = (str)=> { 
    for (key in utf8ToCharMap){
        str = str.replace(eval("/"+key+"/g"),utf8ToCharMap[key])
    }
    return str;
}
//Sample text
//convert_utf8ToChar("Ekip ve mÃ¼ÅŸteri toplantÄ±larÄ±nÄ±zÄ± E-ToplantÄ± ile hÄ±zlÄ± bir ÅŸekilde gerÃ§ekleÅŸtirebilirsiniz.")

Kaynak:https://www.simlict.com/turkishCharacters.html 
Türkçe Karakterlerin HTML/UTF-8 Karşılığı
Karakter	Unicode	Unicode Hex	UTF-8	UTF-8 Display
ı	305	0131	C4B1	Ä±
ç	231	00e7	C3A7	Ã§
ş	351	015f	C59F	ÅŸ
ö	246	00f6	C3B6	Ã¶
ü	252	00fc	C3BC	Ã¼
ğ	287	011f	C49F	ÄŸ
İ	304	0130	C4B0	Ä°
Ç	199	00c7	C387	Ã‡
Ş	350	015e	C59E	ÅŸ
Ö	214	00d6	C396	Ã–
Ü	220	00dc	C39C	Ãœ
Ğ	286	011e	C49E	ÄŸ
