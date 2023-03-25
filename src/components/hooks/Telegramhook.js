const tg = window.Telegram.WebApp;
console.log(tg);
export function useTelegram() {
    return{
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
        chat_id: tg.initDataUnsafe?.chat['id'],
    }

}