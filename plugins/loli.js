handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/wallpaper/nsfwloli?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['loli'] // yg tampil di menu
handler.command = ['loli'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler