const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "263718228938"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="nyashamabaya2005@gmail.com"
global.location="HTown,Zim"
global.mongodb= process.env.MONGODB_URI|| "mongodb+srv://Suhail_Md:Suhail_Md@cluster1.0tlyzhm.mongodb.net/?retryWrites=true&w=majority"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan="https://replit.com/@SuhailTechInfo/Secktor-Bot?v=1";
global.gurl= process.env.GURL   || "https://youtube.com/c/SuhailTechInfo";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.website =process.env.GURL|| "https://github.com/SuhailTechInfo/Suhail-Md" ; 
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,263718228938";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263718228938";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "1",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.6",
  caption:process.env.CAPTION || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ™*\n*ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ* • 𝟭𝟰/𝟭𝟮/𝟮𝟬𝟮𝟯" ,// ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Bmw",
  packname: process.env.PACK_NAME || "♥️👁️🙈💋 ",
  botname: process.env.BOT_NAME   || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "NY.BMW.WT",


  sessionName:process.env.SESSION_ID|| "SUHAIL_21_18_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICA3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVlVGK2pnbnFDWVA3OUhTSmtTWGx2dVpNOFN4NjFscTVVTE1MMS9oYjA4RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicXBzZlhHTkRTN2F3UUVZYTNFaHZrUVwiLFxuICBcInBob25lSWRcIjogXCI1NDViZjczMi1mMmM1LTQ3ODEtYjdkOS0yOTY5Nzc4NmMwOWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgMTk3LFxuICAgICAgNDAsXG4gICAgICAxNTksXG4gICAgICAxMzAsXG4gICAgICA5OSxcbiAgICAgIDIzMCxcbiAgICAgIDE5MSxcbiAgICAgIDI1NSxcbiAgICAgIDc1LFxuICAgICAgODEsXG4gICAgICAxNDksXG4gICAgICAxNDgsXG4gICAgICAyMjAsXG4gICAgICAyNDEsXG4gICAgICAxNjEsXG4gICAgICAyMjMsXG4gICAgICA2MCxcbiAgICAgIDE0MyxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMixcbiAgICAgIDI0MCxcbiAgICAgIDIwNCxcbiAgICAgIDI0MSxcbiAgICAgIDY4LFxuICAgICAgMTgzLFxuICAgICAgMTAxLFxuICAgICAgMTYzLFxuICAgICAgMTg0LFxuICAgICAgMTM2LFxuICAgICAgMTE0LFxuICAgICAgMzcsXG4gICAgICAyMTksXG4gICAgICA1MyxcbiAgICAgIDE0NixcbiAgICAgIDIzNCxcbiAgICAgIDMsXG4gICAgICAyMixcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xyRndJTUdFSm1kd0xFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRngzUy9DeGlxM29tS0xLUHR4bFZXb0RGYk56Zm9CQklId0tWYi9rNkVDaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmcGhITlk3S01rVXJ6M1VBcWRJWG5NODRvV09aNllXLzIvQWMrTGRhNTlyc2JQcEhGd1FiTlR2TUdISWcrNW9Sc0JNbGxlMVpFSG9DSm42d2s0K2JBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyM2hxNWE4NkNxOTlFbU9ORDhocmpObElEd0pqejg2aDVVbHVOWFkzUFVacE50RjVFZGgyb3RZeldtZXArL1NNcWZvclpwbzg1R3NJQTJkOFRjNmtBZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxODIyODkzODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ5Njc5NjY5Mzg3Mjk4OjE5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE4MjI4OTM4OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDQyNTUwMFxufSIKfQ==",
  userImages:process.env.USER_IMAGES|| "5",
  errorChat: process.env.ERROR_CHAT || "1",
  warncount: process.env.WARN_COUNT || "3",
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
