const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `🤗 𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐𝒔 𝒂 𝑵𝒊𝒈𝒕𝒉𝒎𝒂𝒓𝒆𝒔 𝑺𝒖𝒓. 𝑳𝒂 𝒍𝒊𝒅𝒆𝒓 𝑩𝒐𝒏𝒏𝒊💕 𝒍𝒐𝒔 𝒔𝒂𝒍𝒖𝒅𝒂 ✨
  𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐛𝐨𝐭𝐜𝐢𝐭𝐨𝐬 🤖 𝐍𝐢𝐠𝐭𝐡𝐦𝐚𝐫𝐞𝐬 𝐥𝐨𝐬 𝐢𝐧𝐯𝐨𝐜𝐚𝐧 😉  : ${pesan}`;
  let teks = `*💜💚Creador Wa.me/5493487548846 SI QUIERES BOT COMUNICAME💚💜*\n\n❏ ${oi}\n\n❏ *𝙼𝚎𝚗𝚌𝚒𝚘𝚗 𝚐𝚎𝚗𝚎𝚛𝚊𝚕.*\n`;
  for (const mem of participants) {
    teks += `🐛🦋 @${mem.id.split('@')[0]}\n`;
  }
  teks += `└👑𝙱𝚈 𝙱𝙾𝙽𝙽𝙸 𝙱𝙴𝙱𝙴́👑\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
