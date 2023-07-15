const { io } = require("socket.io-client");

const socket = io("wss://resultsdelivery.betsrocket.com", {
    reconnectionDelayMax: 1000,
    reconnection: true, 
    autoConnect: true,
    auth: { token: "<<Seu token aqui>>" }
});

//Recebe mensagens do sistema
socket.on('message',(data)=>{ console.log(data)});

//Quando desconectado do socket encerra o aplicativo
socket.on('disconnect',()=>{ process.exit()});

//Recebe o payload com os dados atualizados do jogo
socket.on('results',(data)=>{
    console.log(data);
})