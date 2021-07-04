export default function cutText(text, number){
    let record = ''
    for(let i = 0; i < text.length; i++ ){
        if(i <= number){
            record += text[i];
        }
    }
    record += '...';
    return record;
}