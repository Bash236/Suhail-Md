const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_13_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICA3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzksXG4gICAgICAgIDc1LFxuICAgICAgICAzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDgwLFxuICAgICAgICA1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQVE3TVRxbFYrVzBYV1REYUJIbEJOeGdqeE11dkpOTU9yWlZIbEFrYjhHdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMwMjA2OTk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMTBBNzQ5OEEyNERDOUVGOTY4QjhGQUI1RTUyMjQ4M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4OTI0MTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidUF2aFFXLWlUM0N0YUxqXzZsUTdJZ1wiLFxuICBcInBob25lSWRcIjogXCI1ZGViNDUzNy03MzJhLTRhN2EtODE3My03NjYxMjZiZWI0MjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMjAzLFxuICAgICAgMTEzLFxuICAgICAgMTg4LFxuICAgICAgMTg3LFxuICAgICAgNTMsXG4gICAgICAyMDIsXG4gICAgICA1OSxcbiAgICAgIDk3LFxuICAgICAgNTEsXG4gICAgICAyNDYsXG4gICAgICAxNTcsXG4gICAgICA0MixcbiAgICAgIDEzMCxcbiAgICAgIDE4OSxcbiAgICAgIDQ1LFxuICAgICAgMjMzLFxuICAgICAgODMsXG4gICAgICAxMjQsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgNSxcbiAgICAgIDE5NCxcbiAgICAgIDY2LFxuICAgICAgMjM1LFxuICAgICAgMjE2LFxuICAgICAgMTU5LFxuICAgICAgNzEsXG4gICAgICAxMTgsXG4gICAgICAzMSxcbiAgICAgIDQzLFxuICAgICAgMTA2LFxuICAgICAgMTA1LFxuICAgICAgMTM0LFxuICAgICAgOTAsXG4gICAgICAyMjMsXG4gICAgICAxOTgsXG4gICAgICAxMjUsXG4gICAgICAyNTIsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMk1TNDFRTVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzAyMDY5OTY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUxNjE3MTg1NDI3NjE1OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1Q2xKb0VFUEdBeGJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib3haaFFUWjV2d0ZrRWZzNVNvdWpSdEx3bW5ib2sxSE9TWVArNlE0VjlHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwbmh6QUZkSHUvcGJueUR0QURzZThMZ0p0em9sRHV2RUx4cVR5SmxSQ0doT1RXWUhMZlJOQjVVZHpZWDRwczBCRjBrdnpEbHY3UmFKQk9IcVlJaVNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBTU5mNGtNSVA0QXpaS25pMTlveGNuQzRpcDFTT1dHMXptdWJxdlNsT2pFamM5VC91M3ozYUdMRzRENmxiNUVlM24wNm9xdzZUSVlDUXg2RU1xNzFpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDMwMjA2OTk2OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg5MjQwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNSSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1JKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOVhrZHdUd2o2VGNUZGlHcVBlWGNjUGFiS1NXcFFZTUxNVytKRkhaRmoxaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI4NTk1ODM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyODkyMzAwNjg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
