String.prototype.getLengthByte = function getLengthByte() {
	"use strict";
	var self = this,
		count = 0,
		char,
		i;
	for (i = 0; i < self.length; i++) {
		char = self.charCodeAt(i);
		if ((char >= 0x0 && char < 0x81) || (char == 0xf8f0) ||
			(char >= 0xff61 && char < 0xffa0) || (char >= 0xf8f1 && char < 0xf8f4)) {
			count += 1;
		} else {
			count += 2;
		}
	}
	return count;
};

const base = document.getElementById("base"),
	result = document.getElementById("result"),
	copy = document.getElementById("copy");

base.addEventListener("input", () => {
	result.textContent = suddenDeath(base.value);
});

copy.addEventListener("click", () => {
	result.select();
	document.execCommand("copy");
});

function suddenDeath(str) {
	var len = Math.floor(str.getLengthByte() / 2);
	return "＿" + ("人".repeat(len + 2)) + "＿\n" +
		"＞　" + str + "　＜\n" +
		"￣Y^" + ("Y^".repeat(len)) + "Y￣";
}
