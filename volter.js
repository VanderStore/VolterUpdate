require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const maker = require('mumaker')
const naztod = require("tod-api")
const request = require('request');
const textpro = require('./lib/textpro')
const bochil = require('@bochilteam/scraper')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const nyoutube = ('© Volter Botz')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
gambar = fs.readFileSync('./media/image/volter.jpg')

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
 
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = volter = async (volter, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await volter.decodeJid(volter.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	    
        // Group
        const groupMetadata = m.isGroup ? await volter.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
		
	function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
	const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
	const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
	const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
	const filsk = filsj[Math.floor(Math.random() * filsj.length)]
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!volter.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            volter.readMessages([m.key])
        }
        
        if (m.text.includes('🗿')) {
    volter.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
                
//sticker url
const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/stick' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/stick' + names + '.png'
                    let asw = './database/stick' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        volter.sendMessage(to, { sticker: media}, {quoted: m})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
      //Resize
         const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
             
             //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${ytname}`, orderTitle: 'Volter', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${ytname}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
        const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${ytname}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${ytname}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${ytname}`, "caption": `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${ytname}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${ytname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6285875158363:6285875158363\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${ytname}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        // total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/volter-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/volter-md${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await volter.setStatus(`${volter.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
			
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await volter.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
        volter.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: volter.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, volter.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        volter.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            volter.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await volter.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, volter.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await volter.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, volter.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await volter.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, volter.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await volter.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, volter.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await volter.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, volter.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await volter.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, volter.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await volter.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, volter.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await volter.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await volter.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    volter.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    volter.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) volter.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) volter.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) volter.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    volter.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) volter.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) volter.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    volter.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await volter.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await volter.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            volter.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await volter.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) volter.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    volter.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    volter.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    volter.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    volter.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    volter.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    volter.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    volter.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await volter.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await volter.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    volter.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    volter.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, volter.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "*Masih Ada Sesi Yang Belum Diselesaikan ‼️*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    volter.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    volter.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, volter.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "*Masih Ada Sesi Yang Belum Diselesaikan ‼️*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    volter.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    volter.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, volter.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "*Masih Ada Sesi Yang Belum Diselesaikan ‼️*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    volter.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    volter.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, volter.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "*Masih Ada Sesi Yang Belum Diselesaikan ‼️*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    volter.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    volter.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, volter.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "*Masih Ada Sesi Yang Belum Diselesaikan ‼️*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    volter.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    volter.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, volter.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "*Masih Ada Sesi Yang Belum Diselesaikan ‼️*"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                volter.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
//Pembatas FUN===============================================
            case 'slot': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
            await volter.sendButtonText(m.chat, buttons, sloth, nyoutube, m)
            }
            break
            case 'jodohku': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, jawab, volter.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await volter.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m, {quoted: ftoko})
            }
            break
            case 'bisakah': {
                if (!isPremium) throw mess.premime
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: ftoko})
            }
            break
            case 'apakah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: ftoko})
            }
            break
            case 'kapan': case 'kapankah': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: ftoko})
            }
            break
            case 'cekmati': {
            	if (m.text.includes('@')) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
                //if (m.text.includes(/^1|2|3|4|5|6|7|8|9|0/)) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
                if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa anjir?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                let jawab = (`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: [m.sender], quoted: fkontak})
            }
            break
            case 'mylove': case 'love': case 'cintaku': case 'cinta': {
            	let mlove = ['⟪1%⟫','⟪2%⟫','⟪3%⟫','⟪4%⟫','⟪5%⟫','⟪6%⟫','⟪7%⟫','⟪8%⟫','⟪9%⟫','⟪10%⟫','⟪11%⟫','⟪12%⟫','⟪13%⟫','⟪14%⟫','⟪15%⟫','⟪16%⟫','⟪17%⟫','⟪18%⟫','⟪19%⟫','⟪20%⟫','⟪21%⟫','⟪22%⟫','⟪23%⟫','⟪24%⟫','⟪25%⟫','⟪26%⟫','⟪27%⟫','⟪28%⟫','⟪29%⟫','⟪30%⟫','⟪31%⟫','⟪32%⟫','⟪33%⟫','⟪34%⟫','⟪35%⟫','⟪36%⟫','⟪37%⟫','⟪38%⟫','⟪39%⟫','⟪40%⟫','⟪41%⟫','⟪42%⟫','⟪43%⟫','⟪44%⟫','⟪45%⟫','⟪46%⟫','⟪47%⟫','⟪48%⟫','⟪49%⟫','⟪50%⟫','⟪51%⟫','⟪52%⟫','⟪53%⟫','⟪54%⟫','⟪55%⟫','⟪56%⟫','⟪57%⟫','⟪58%⟫','⟪59%⟫','⟪60%⟫','⟪61%⟫','⟪62%⟫','⟪63%⟫','⟪64%⟫','⟪65%⟫','⟪66%⟫','⟪67%⟫','⟪68%⟫','⟪69%⟫','⟪70%⟫','⟪71%⟫','⟪72%⟫','⟪73%⟫','⟪74%⟫','⟪75%⟫','⟪76%⟫','⟪77%⟫','⟪78%⟫','⟪79%⟫','⟪80%⟫','⟪81%⟫','⟪82%⟫','⟪83%⟫','⟪84%⟫','⟪85%⟫','⟪86%⟫','⟪87%⟫','⟪88%⟫','⟪89%⟫','⟪90%⟫','⟪91%⟫','⟪92%⟫','⟪93%⟫','⟪94%⟫','⟪95%⟫','⟪96%⟫','⟪97%⟫','⟪98%⟫','⟪99%⟫','⟪100%⟫']
                let mcinta = mlove[Math.floor(Math.random() * mlove.length)]
                let jawab = (`*Sebesar : ${mcinta} Padanya*`)
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤' }, type: 1 }]
               volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: [m.sender], quoted: fkontak})
            	}
            break
            case 'daurulang': {
            	let mdaur = ['♳','♴','♵','♶','♷','♸','♹','♺']
                let mulng = mdaur[Math.floor(Math.random() * mdaur.length)]
                let jawab = (`*Telah Di Daur Ulang Sebanyak : ${mulng}*`)
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '♻️' }, type: 1 }]
               volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: [m.sender], quoted: fkontak})
            	}
            break
            case 'dadu': {
            	let ddsa = ['⚀','⚁','⚂','⚃','⚄','⚅']
                let klow = ddsa[Math.floor(Math.random() * ddsa.length)]
            	m.reply(klow)
            	}
            break
            case 'rate': case 'nilai': {
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    volter.sendMessage(m.chat, { text: `Rate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'ganteng': case 'gantengcek': case 'handsome': case 'handsomecheck': {
				    if (!text) return replay(`Tag Someone, Example : ${prefix + command} Volter`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    volter.sendMessage(m.chat, { text: `Cek Ganteng : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'cantik': case 'cantikcek': case 'beautiful': case 'beautifulcheck': {
				    if (!text) return replay(`Tag Someone, Example : ${prefix + command} Volter`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    volter.sendMessage(m.chat, { text: `Cek Cantik : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) throw `Example : ${prefix + command} saya menang?`
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let koh = krng[Math.floor(Math.random() * krng.length)]
                let jawab = `*${command} ${text}*\n*Jawab : ${koh}*`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
                volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: floc})
				}
				break
				case 'fitnah': {
if (args.length < 1) return reply(`Usage :\n${prefix}fake [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fake 0|hai|hai juga markenlin`)
var gh = body.slice(10)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
var ftelo = {key: {fromMe: false, participant: `${mentioned}`, ...(m.chat ? { remoteJid: m.chat } : {})}, message: { conversation: `${targetq}` }}
volter.sendMessage(m.chat, {text: bot}, {quoted: ftelo})
}
break
           
//PEMBATAS ADMIN & OWNER=======================================
            case 'totalfitur': case 'totalfiture': case 'fiture': case 'fitur': {
            	m.reply('*Total Ada 231 Fitur*\n_Ketik Req Untuk Request Fitur_')
            }
            break
            case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                volter.sendMessage(m.chat, { image: fs.readFileSync('./media/image/volter.jpg'), caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan scan gambar diatas*\n\n*Jika ingin sewa bot atau premium*\n*Silahkan Chat Owner*\n\n*Atau klik link dibawah ini*\n_https://saweria.co/volter_\n\n*Atau Transfer via*\n- *Gopay Dana Ovo Qris ShopeePay*\n Ke nomer berikut : 082113821188\n\n_Terima kasih_` }, { quoted: m })
            }
            break
            case 'sc': {
                m.reply('https://wa.me/6285875158363')
            }
            break		 
            case 'subsyt': {
            let jawab = `*${ucapanWaktu}*\n*Silahkan Klik Link Ini*`
            let buttons = [{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : akulaku + (` | Halo ${pushname}`),
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: jawab,
  footer: nyoutube,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Volter Dev',
  body: 'Subscribe My YouTube', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType:2,
  mediaUrl: myyt,
  sourceUrl: myyt
  }}
  }
  volter.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
            	}
            break
            case 'ceklimit': case 'checklimit': case 'limit':{
					m.reply('*Limit Lu :* ' + (db.data.users[m.sender].limit))
					}
					break 
		    case 'totalhit': case 'hit': {
			m.reply(`*Total Hit : ${jumlahcmd}*\n*Total Hit Harian : ${jumlahharian}*`)
			}
			break
            case 'runtime': case 'tes': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑SEWA' }, type: 1 }]
                await volter.sendButtonText(m.chat, buttons, lowq, nyoutube, m, {quoted: fkontak})
            	}
            break
            case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await volter.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await volter.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 My public IP address is: " + ip);
                    })
                })
            }
            break
            case 'tagme': {
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            volter.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await volter.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: m.key
                    }
                }
                volter.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isPremium) throw mess.premime
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await volter.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await volter.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await volter.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await volter.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await volter.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await volter.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await volter.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'addprem': {
       m.reply(`*_Error!_*\n*Fitur Addprem & Delprem Akan Owner Buka Next Update*\n_Minggu Depan :v_`)
		}
		break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await volter.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await volter.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await volter.downloadAndSaveMediaMessage(quoted)
                await volter.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await volter.downloadAndSaveMediaMessage(quoted)
                await volter.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                volter.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            volter.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	        }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await volter.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await volter.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `Mode Group`, volter.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await volter.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await volter.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `Mode Edit Info`, volter.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `Mode Antilink`, volter.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${volter.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${volter.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `Mute Bot`, volter.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await volter.groupInviteCode(m.chat)
                volter.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'revoke':
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                await volter.groupRevokeInvite(m.chat)
                    .then(res => {
                        m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => m.reply(jsonformat(err)))
                break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await volter.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await volter.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                volter.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
            await volter.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
            await volter.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: m.key
                    }
                }
                volter.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await volter.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
await volter.sendButtonText(i, buttons, txt, nyoutube, m, {quoted: fkontak})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		await sleep(1500)
		let txt = `「 Broadcast Bot 」\n\n${text}`
		let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await volter.sendButtonText(yoi, buttons, txt, nyoutube, m, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
}
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                volter.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await volter.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, volter.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await volter.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, volter.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await volter.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, volter.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await volter.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, volter.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, volter.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await volter.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await volter.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, volter.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await volter.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, volter.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await volter.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, volter.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                volter.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                volter.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                volter.sendContact(m.chat, global.owner, m)
            }
            break
            
//PEMBATAS CONVERT=======================================
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!isPremium) throw mess.premime
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await volter.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await volter.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
            case 'stikerwm': case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'take': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await volter.downloadMediaMessage(qmsg)
                    let encmedia = await volter.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await volter.downloadMediaMessage(qmsg)
                    let encmedia = await volter.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
break
         case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await volter.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await volter.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
	       if (!isPremium) throw mess.premime
           if (!text) throw `Example : ${prefix + command} text`
           await volter.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'volter', 'dev', m, {asSticker: true})

         }
         break
         case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             volter.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
		    try {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await volter.downloadAndSaveMediaMessage(qmsg)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await volter.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(awikwok)
	        } catch (e) {
		    m.reply(`Error\nHarus Pakai Gambar!`)
		    }
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!isPremium) throw mess.premime
                if (!quoted) throw '*Reply Image*'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await volter.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    volter.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await volter.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await volter.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            volter.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            volter.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${volter.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            volter.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await volter.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await volter.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await volter.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'toqr': case 'qr': {
            	if (!text) throw 'No Query Text'
               m.reply(mess.wait)
               volter.sendMessage(m.chat, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}` }, caption: `Nih Bro` }, { quoted: m })
            	}
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
        if (!isPremium) throw mess.premime
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await volter.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    volter.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'menfes': case 'menfess': {
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Lokasimu', jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('PESAN RAHASIA')
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤MAKACIH' }, type: 1 }]
            await volter.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await volter.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                volter.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
        break
	    case 'play': case 'ytplay': {
	            if (!isPremium) throw mess.premime
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: volter.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                volter.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                volter.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                volter.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                volter.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                volter.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                volter.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                volter.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
                     
//PEMBATAS Downloads=======================================
             case 'tiktok': case 'tiktoknowm': {
                if (!isPremium) throw mess.premime
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowm },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                volter.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!isPremium) throw mess.premime
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await volter.sendMessage(m.chat, buttonMessage, { quoted: m })
                volter.sendMessage(m.chat, { audio: { url: anu.result.nowm }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
            case 'film': {
            if (!isPremium) throw mess.premime
        	try {
            if (!q) return m.reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
	        m.reply(mess.wait)
            xfar.Film(q)
            .then(data => {console.log(data)
            let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               volter.sendMessage(m.chat, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdoc })
                })
                } catch (e) {
		    m.reply(mess.errapi)
		    }
		     }
              break

//PEMBATAS Menu=======================================
            case 'rules': {
rules = `╭──❍ *Rules BOT*
│
│ *Intinya Jangan Spam❗*
│
╰────❍`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 }]
            await volter.sendButtonText(m.chat, buttons, rules, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'menu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `_Hi ${pushname} ${ucapanWaktu}_

╭──❲ *BOT INFO* ❳
│ • *Name : Volter Botz*
│ • *Owner : @${ownernya.split('@')[0]}*
╰───────────────⊱
╭──❲ *YOUR INFO* ❳
│ • *Name : ${pushname}*
│ • *Api : @${me.split('@')[0]}*
│ • *Premium* : ${isPremium ? '✅' : `❌`}
│ • *Limit* : ${isPremium ? '♾Unlimited' : `〽️${db.data.users[m.sender].limit}`}
╰───────────────⊱

◾premium
◽limit

*⛦ RUNTIME SERVER ⛦*
 ${runtime(process.uptime())}
 
 _Note : bot whatsapp iyalah bot hasil coding untuk berjalan sebagai kebutuhan di WhatsApp , bot whatsap mempunyai sistem unik , bisa membuat apa pun sesuai list commands_
 
╭──❲ *NEW MENU* ❳
│◦〉 ${prefix}menfess
╰───────────────⊱

╭──❲ *OTHERS MENU* ❳
│◦〉 ${prefix}rules
│◦〉 ${prefix}sewabot
╰───────────────⊱

╭──❲ *DOWNLOADER MENU* ❳
│◦〉 ${prefix}tiktoknowm ◾
│◦〉 ${prefix}tiktokmp3 ◾
│◦〉 ${prefix}play ◾
│◦〉 ${prefix}film ◾
╰───────────────⊱

╭──❲ *CONVERT MENU* ❳
│◦〉 ${prefix}attp ◾
│◦〉 ${prefix}toimage ◾
│◦〉 ${prefix}sticker ◾
│◦〉 ${prefix}removebg ◾
│◦〉 ${prefix}tourl
│◦〉 ${prefix}tovideo
│◦〉 ${prefix}smeme
╰───────────────⊱
 
╭──❲ *GROUP MENU* ❳
│◦〉 ${prefix}linkgroup
│◦〉 ${prefix}ephemeral 
│◦〉 ${prefix}setppgc
│◦〉 ${prefix}setname
│◦〉 ${prefix}setdesc 
│◦〉 ${prefix}group 
│◦〉 ${prefix}editinfo 
│◦〉 ${prefix}kick 
│◦〉 ${prefix}hidetag 
│◦〉 ${prefix}tagall
│◦〉 ${prefix}antilink 
│◦〉 ${prefix}mute 
│◦〉 ${prefix}promote 
│◦〉 ${prefix}demote
╰───────────────⊱

╭──❲ *GAME MENU* ❳
│◦〉 ${prefix}jodohku ◽
│◦〉 ${prefix}apakah ◽
│◦〉 ${prefix}slot ◽
│◦〉 ${prefix}jadian ◽
│◦〉 ${prefix}kapankah ◽
│◦〉 ${prefix}gbtku ◾
│◦〉 ${prefix}bisakah ◾
│◦〉 ${prefix}tictactoe
│◦〉 ${prefix}afk
│◦〉 ${prefix}suitpvp
╰───────────────⊱`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'Owner', buttonText: { displayText: '👤Owner' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : akulaku + (` | Halo ${pushname}`),
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: jawab,
  footer: nyoutube,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Volter Dev',
  body: 'Subscribe My YouTube', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: myytv,
  sourceUrl: myyt
  }}
  }
  volter.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
volter_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await volter.sendMessage(m.chat, { audio: volter_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    volter.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})