const Discord = require("discord.js");
const client = new Discord.Client();

const config = {
    prefix: "-",
    token: " " }

client.on("ready", () => {
    console.log(`Bạn đã khởi chạy: ${client.user.tag} thành công!`); });

client.on("message", async (message) => {

client.user.setPresence({ activity: { name: 'Chạy Thử Nghiệm' }, status: 'dnd' }) 

    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).split(" ");
    const command = args.shift();    
    
    switch(command){

// --- Một Số Trả Về Random Theo Điều Kiện [001] 

case "hello":      
    var hello = Math.floor(Math.random() * 4);
    if      (hello === 0) {
          message.channel.send("hello [001]"); }
    else if (hello === 1) {
          message.channel.send("hello [002]"); }
    else if (hello === 2) {
          message.channel.send("hello [003]"); }
    else if (hello === 3) {
          message.channel.send("hello [004]"); }
    else    {
          message.channel.send("hello [005]"); }   
    break;  

case "sad":      
    var sad = Math.floor(Math.random() * 4);
    if      (sad === 0) {
          message.channel.send("sad [001"); }
    else if (sad === 1) {
          message.channel.send("sad [002]"); }
    else if (sad === 2) {
          message.channel.send("sad [003]"); }
    else if (sad === 3) {
          message.channel.send("sad [004]"); }
    else    {
          message.channel.send("sad [005]"); }   
    break; 

case "fun":      
    var fun = Math.floor(Math.random() * 4);
    if      (fun === 0) {
          message.channel.send("fun [001]"); }
    else if (fun === 1) {
          message.channel.send("fun [002]"); }
    else if (fun === 2) {
          message.channel.send("fun [003]"); }
    else if (fun === 3) {
          message.channel.send("fun [004]"); }
    else    {
          message.channel.send("fun [005]"); }   
    break; 

// --- Kiểm Tra Độ Trễ Của Mạng [002]

case "ping":         
         message.channel.send(`Độ trễ mạng của bạn là: ${client.ws.ping}`);
    break;

// --- Xem Avatar Của Bản Thân Và Người Khác [003]

case "av":         
    if(message.mentions.users.size){
         let member=message.mentions.users.first()
    if(member){
         const emb=new Discord.MessageEmbed()
         .setImage(member.displayAvatarURL())
         .setTitle(member.tag)
         message.channel.send(emb)}
    else {
         message.channel.send("không tìm thấy")} }
    else {
      const emb=new Discord.MessageEmbed()
          .setImage(message.author
          .displayAvatarURL())
          .setTitle(message.author.tag)
         message.channel.send(emb) }
    break;

// --- Random Emoji [004]

case "emoji":
    var emoji = Math.floor(Math.random() * 2);
    if (emoji === 0) {
         message.channel.send(":)"); }
    else {
         message.channel.send("=)"); }
    break;

// --- Random Number [005]

case "random":
         message.channel.send("Số may mắn của bạn là: " + Math.floor(Math.random() * 1001 ));
    break;

// --- Phản Hồi Khi Người Dùng Nhập Sai Lệnh hoặc Rỗng [006]

case "say":
         message.channel.send(args.join(" "));
    break;   default:
         message.channel.send("Tôi không thể hiểu bạn nói gì <:A_lasao:826683507509821490>"); 
    break;
   
    
// --- Dẫn Link Website của Trường [007] -- đang trong giai đoạn thử nghiệm

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 5,
          "label": `Trang web`,
          "url": `https://www.kgc.edu.vn/`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `🌏`
          },
          "type": 2
        },
        {
          "style": 5,
          "label": `Sinh Viên`,
          "url": `http://daotao.kgc.edu.vn/sinhvien`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `🌏`
          },
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `Tuyển sinh`,
      "description": `Trường Cao Đẳng Kiên Giang`,
      "color": 0x0015ff,
      "image": {
        "url": `https://www.kgc.edu.vn/images/logomain.png`,
        "height": 0,
        "width": 0
      },
      "thumbnail": {
        "url": `https://www.kgc.edu.vn/images/logomain.png`,
        "height": 0,
        "width": 0
      },
      "url": `https://www.kgc.edu.vn/`
    }
  ]
});



  }

})

client.login(config.token);
