
const parseTextToHtml = (text) => {
    let s = text.split('**');
    let open = true;
    let retHtml = "";
    if(s.length > 1) {
        retHtml += s[0];
        for (let i = 1; i < s.length; i++) {
            retHtml += (open === true ? "<br/><b>" : "</b><br/>") + s[i];
            open = !open;
        }
    }
    else retHtml = text;
    return "<p>" + retHtml + "</p>";
};


export {parseTextToHtml};