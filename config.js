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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaUWJXuEVccQMSgz3G3t";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaUWJXuEVccQMSgz3G3t" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ CoachFolake WAbot²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347081414294";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_52_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1VenAzYWtaZWg5amt4bkRjSGExcjVQR0NZN0l3emI2SXFVc1g2dzVyaEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJ0OWgxZVRsVERtV0Rwd0c3SFh3dmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTYxNWNhN2EtYzgzOS00NWUwLWIzN2EtNmMwZDgxYTgyYmM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDEzMixcbiAgICAgIDczLFxuICAgICAgMTU5LFxuICAgICAgMTc2LFxuICAgICAgNTIsXG4gICAgICAxNTQsXG4gICAgICA5OCxcbiAgICAgIDg3LFxuICAgICAgNzQsXG4gICAgICAyMzIsXG4gICAgICA5NSxcbiAgICAgIDE1MCxcbiAgICAgIDIyNCxcbiAgICAgIDE5OSxcbiAgICAgIDIyMSxcbiAgICAgIDIzNCxcbiAgICAgIDEwLFxuICAgICAgMTUsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjQyLFxuICAgICAgMjQwLFxuICAgICAgMjM5LFxuICAgICAgMTIxLFxuICAgICAgMjAxLFxuICAgICAgOTEsXG4gICAgICAxNTgsXG4gICAgICAyMjUsXG4gICAgICAxNTIsXG4gICAgICA0MCxcbiAgICAgIDI3LFxuICAgICAgMjcsXG4gICAgICAyNTMsXG4gICAgICAyNDUsXG4gICAgICAxMDUsXG4gICAgICAyMjEsXG4gICAgICAxNTgsXG4gICAgICAxNTksXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlRFUERURkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODE0MTQyOTQ6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MDg0MzAxMzA5OTY0MzoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbkI4NzhCRU9Ycmpib0dHQk1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdmWFI0dzBiVHlHNjBUNUhvU3YwRUdmR2M5ZGNoOUc5UzdRZFR2aU4vU0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ0xLSDRFSVR4OER6eFRPNng1Nk1sZ1hzTEpQYTRFUndtQVROOHkrUlU0M1hTNW9DcWVYbmpad3VQSUwyalgzUHRBdWREOFJ0aEk2VHVUVHhkTk5JQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRG5xZTkrekx2c1JkVzFWK1hiYUFqa1hodzVCRHZZWlAyWmUweWpKWEhKQ1pRYXJTUUVaRzNEUDlUQzZyTE9lbXAzQUdlQnYrK2UyZG1HUGtsWVMrQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4MTQxNDI5NDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDc0MzQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDN0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEM3QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXUHh2cXB3VzJDWE91QlZ2WlBSS3ZpREN4V2pZdW5ETklab1RJNnNORkhFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwMjQ0ODUyMSxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEyLDEzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CoachFolake WAbot²²¹-ᴍᴅ 』```", //*『Follow • CoachFolake』*\n https://whatsapp.com/channel/0029VaUWJXuEVccQMSgz3G3t0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "CoachFolake",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
