const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['12232080470']
global.ownernomer = "12232080470"
global.premium = ['12232080470','6287723814311','6289610145000']
global.packname = 'Volter'
global.author = 'Botz'
global.sessionName = 'volter'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '*Done ✅*',
    admin: '*Fitur Khusus Admin Group ‼️*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebihi Dahulu Ya ‼️*',
    premime: '*Fitur Khusus Premium , Daftar Premium ? Ketik #sewabot*',
    owner: '*Fitur Khusus Owner Botz ‼️*',
    group: '*Fitur Khusus Group ‼️*',
    private: '*Fitur Khusus Private Chat ‼️*',
    bot: '*Fitur Khusus Pengguna Nomor Botz ‼️*',
    wait: '*Proses 🙏*',
    errapi: '*Erorr Apikey Tidak Valid ‼️*',
    errmor: '*Eror Kesalahan Sistem Botz ‼️*',
    endLimit: '*Limit Anda Telah Habis Beli #sewabot / Tunggu Jam 05:00 Limit Reset Sendiri ‼️*',
}
global.limitawal = {
    premium: "Unlimited",
    free: 1
}
global.thumb = fs.readFileSync('./media/image/volter.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/Volterdev'
global.myyt = 'https://youtube.com/c/Voltermd'
global.myytv = '-'
global.mygc = "-"
global.botname = 'Volter Botz'
global.akulaku = 'Botz By Volter'
global.ytname = 'YT VOLTER'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
