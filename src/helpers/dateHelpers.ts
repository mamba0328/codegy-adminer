export function getFormattedDate(created_at:string):string{
    const date = new Date(created_at);
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    return [date.getMonth()+1, date.getDate(), date.getFullYear()].join('.') + ' '+ [date.getHours(), minutes,].join(':');
}