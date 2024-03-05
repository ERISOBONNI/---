const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `🤗 𝐌𝐢 𝐚𝐦𝐨𝐫... 𝐄𝐬 𝐪𝐮𝐞 𝐮𝐬𝐭𝐞𝐝 𝐬𝐞 𝐚𝐥𝐞𝐣𝐨 𝐦𝐮𝐜𝐡𝐨★𝐲 𝐲𝐨 𝐝𝐞 𝐥𝐞𝐣𝐨𝐬 𝐧𝐨 𝐯𝐞𝐨 𝐛𝐞𝐛𝐞́★ 𝐁𝐨𝐦𝐛𝐨𝐧 💋  : ${pesan}`;
  let teks = `*💜💚𝐘 𝐝𝐚𝐦𝐞 𝐝𝐚𝐦𝐞 𝐝𝐚𝐦𝐞 𝐭𝐨𝐝𝐚 𝐭𝐮 𝐝𝐮𝐥𝐳𝐮𝐫𝐚 🎶*\n\n❏ ${oi}\n\n❏ *𝙼𝚎𝚗𝚌𝚒𝚘𝚗 𝚐𝚎𝚗𝚎𝚛𝚊𝚕.*\n`;
  for (const mem of participants) {
    teks += `🧸💫 @${mem.id.split('@')[0]}\n`;
  }
  teks += `└👑𝐘 𝐝𝐚𝐦𝐞 𝐝𝐚𝐦𝐞 𝐝𝐚𝐦𝐞 𝐭𝐨𝐝𝐚 𝐭𝐮 𝐝𝐮𝐥𝐳𝐮𝐫𝐚 🎶\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
