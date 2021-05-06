function dategive() {
	let ghj = new Date();
	return ghj.getFullYear() + "" + ghj.getMonth() + "" + ghj.getDate();
}

function uidgive(){
	var cook = document.cookie + ";";
	return cook.match(/(?<=DedeUserID=).+?(?=;)/)[0];
}
function jctgive(){
	var cook = document.cookie + ";";
	return cook.match(/(?<=bili_jct=).+?(?=;)/)[0];
}

function dthgive() {
	return window.location.pathname.match(/\d+/)[0];
}

function getRndInteger(min, max) {//返回随机数
	return Math.floor(Math.random() * (max - min)) + min;
}

function tuidgive() {
	return window.location.pathname.split("/")[1];
}

function sjtj(sty) {
	let l = GM_getValue('z1', []);
	l.push(sty);
	l = Array.from(new Set(l));
	GM_setValue("z1", l);
}

function kuz1(sky) {
	let l = GM_getValue("z1", []);
	return l.includes(sky);
}
function rejcdt(desc) {
	if (desc.repost < 120 || kuz1(desc.dynamic_id_str)) {
		return false;
	}
	return true;
}