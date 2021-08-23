/*/googled a footer using javascript - manipulated the cssText that was already there to match - worked on console, not vs code
const footer = document.createElement('section');
footer.style.cssText = 'position:absolute;width:100%;height:100px;background:#f5f3f5';
document.body.appendChild(footer);
*/

//also appends to top - document.body.appendChild(document.createElement("p"));

//tried getting this to appendChild to the body as the last child; worked in console not after saved
const topAnnounce = document.createElement("p");
topAnnounce.textContent = "Announcement about something that gets left up way too long";
topAnnounce.style.cssText = "text-align:center;color:#588068;font-family:serif;font-size:16px";
document.body.append(topAnnounce);

//try to find last attempt at removing border on hover

