const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝐑𝐄𝐕𝐈𝐕𝐀𝐍 𝐌𝐀𝐍𝐂𝐎𝐒: ${pesan}`;
  let teks = `*☯️Creador Wa.me/5493711419554 SI QUIERES BOT COMUNICAME☯️*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`;
  for (const mem of participants) {
    teks += `☯️ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└𝐃𝐢𝐞𝐠𝐨-𝐀𝐃\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
