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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_17_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU5LFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxMnJXSFhSMjNMRTF6TlpvTlpjWmk5Y2ZwU1VQMko0ejQrQ21CUjhBaTNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNQXVHOUFqV1ItLXREbVQ5MXpwVFVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzYjk4MGVhLTk4ODUtNDNkMi04OTg2LTE3MTk5ZGNiZGU4ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAxMixcbiAgICAgIDg2LFxuICAgICAgMTExLFxuICAgICAgMTcwLFxuICAgICAgNTUsXG4gICAgICAxNzcsXG4gICAgICA5NCxcbiAgICAgIDMxLFxuICAgICAgMTI1LFxuICAgICAgMTQzLFxuICAgICAgMjM5LFxuICAgICAgMjM3LFxuICAgICAgNSxcbiAgICAgIDEzNyxcbiAgICAgIDE1MSxcbiAgICAgIDY0LFxuICAgICAgMjQ3LFxuICAgICAgMTY4LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgODgsXG4gICAgICAyMTksXG4gICAgICAxMixcbiAgICAgIDUxLFxuICAgICAgMTk4LFxuICAgICAgMjQ0LFxuICAgICAgMSxcbiAgICAgIDE5OCxcbiAgICAgIDE1MCxcbiAgICAgIDEwNixcbiAgICAgIDcyLFxuICAgICAgMjExLFxuICAgICAgMTgxLFxuICAgICAgMjA5LFxuICAgICAgMjM1LFxuICAgICAgMTc4LFxuICAgICAgMTM1LFxuICAgICAgMTQ0LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktZTlcyOE1GXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMwMjA2OTk2OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MTYxNzE4NTQyNzYxNToyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS0RsSm9FRU1iRXlMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm94WmhRVFo1dndGa0VmczVTb3VqUnRMd21uYm9rMUhPU1lQKzZRNFY5R2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibVBvaFJiZkJ6UXFWVlRxZm9kVmw3dUFZb0xKNHE1WWtSSzFCU2lDRFJscDVOTlpjRW1CZVdIbmdPWXpZWHVQM3JZYVNzUWdEeTVuaDlyOHFDUGpkQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFREZ0Q5NlVLbHltV1hGem5tcTQ5WHhZY3lTZXJuWWpMcHZCeUhLQ2tQazluTW0zb1UrdUNQME5udFowOG5JS0doZWsyaUprOW1RZ1dST3RSbTIxakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzMDIwNjk5NjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NTAyMjBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
