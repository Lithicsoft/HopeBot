const Discord = require("discord.js");

const client = new Discord.Client();

const config = {
    prefix: "-",
    token: "token"
}

client.on("ready", () => {
    console.log("Đập Đá Thôi Nào!")
})

client.on("message", (message) => {

    client.user.setPresence({ activity: { name: 'Đập Đá' }, status: 'dnd' }) 

    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).split(" ");
    const command = args.shift();    
    
  switch(command){

  // Random Chào Hỏi [001]
  case "hello":      
    var hello = Math.floor(Math.random() * 4);
    if (hello === 0) {
          message.channel.send("hello bạn <a:c_woww:826123141092474891>"); }
    else if (hello === 1) {
          message.channel.send("hello bạn xinh đẹp");  }
    else if (hello === 2) {
          message.channel.send("Knichiwa");  }
    else {
          message.channel.send("chào mày <:P_xienmaygio:826136559832399882>"); }   

    break;

    case "sad":      
    var sad = Math.floor(Math.random() * 2);
    if (sad === 0) {
         message.channel.send("<:P1_omnhaukhoc:852895249612144661> Đừng buồn nữa, hãy vui lên nhé bạn ơi"); }
    else {
        message.channel.send("<:P1_omnhaukhoc:852895249612144661> Mọi chuyện sẽ ổn thôi, có tớ ở đây với cậu mà "); } 
    break;

    case "fun":      
    var fun = Math.floor(Math.random() * 2);
    if (fun === 0) {
         message.channel.send("<:B_lmao:853162483576340501> Dảk Dảk Bủh Bủh Lmao Lmao"); }
    else {
        message.channel.send(" <:B_lmao:853162483576340501> Jajaja kkkkk LOL Lmao Lmao"); } 
    break;

  // Kiểm Tra Tốc Độ Mạng [002]
    case "ping":         
         message.channel.send(`<:P2_hinhlamay:852892547129802776> Tốc độ mạng của bạn là: ${client.ws.ping}`);
    break;

  // Xem Avatar [003]
    case "av":         
    if(message.mentions.users.size){
         let member=message.mentions.users.first()
    if(member){
         const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.tag)
         message.channel.send(emb)}
    else {
         message.channel.send("Xin lỗi nhưng tôi không tìm được người này, bạn có thể giúp tôi kiểm tra lại được chứ ")} }
    else {
      const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.tag)
         message.channel.send(emb) }
    break;

  // Random Emoji [004]
    case "emoji":
    var emoji = Math.floor(Math.random() * 2);
    if (emoji === 0) {
         message.channel.send(":)"); }
    else {
         message.channel.send("=)"); }
    break;

  // Random Number [005]
    case "random":
        message.channel.send("<:D_yes:828800864344342568> Đang sổ số. Con số may mắn của bạn là: ||" + Math.floor(Math.random() * 1001 ) + "||");
    break;
    case "say":
         message.channel.send(args.join(" "));
    break;
  // Phản Hồi Khi Người Dùng Nhập Sai Lệnh [006]
    default:
         message.channel.send("Tôi không thể hiểu bạn nói gì <:A_lasao:826683507509821490>, ``-help`` để biết thêm");
    break;

  // Dự Báo Thời Tiết []

  // Phiên Dịch Ngôn Ngữ []

  // Chơi Nhạc []

  // Tạo Give-Away []

  // 
  }

})

client.login(config.token);