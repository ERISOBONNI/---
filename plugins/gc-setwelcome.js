const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('*[❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙱𝙸𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾*');
  } else throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝚁, 𝚄𝚂𝙴:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (🔥  
    💗𝐁𝐄𝐁𝐄𝐂𝐈𝐓𝐎:   𝐃𝐞𝐣𝐞 𝐝𝐞 𝐞𝐬𝐭𝐚𝐫 𝐛𝐮𝐬𝐜𝐚𝐧𝐝𝐨 𝐚𝐥 𝐚𝐦𝐨𝐫 𝐝𝐞 𝐬𝐮 𝐯𝐢𝐝𝐚  ... 𝐐𝐮𝐞 𝐞𝐥 𝐚𝐦𝐨𝐫𝐧𝐝𝐞 𝐬𝐮 𝐯𝐢𝐝𝐚 𝐞𝐬𝐭𝐚 𝐚𝐪𝐮𝐢 𝐛𝐞𝐛𝐞  🔥  
    💗)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
