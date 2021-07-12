function result_img() {
	var temp = location.href.split("?");
	data = temp[1];
	if(data == "") {
		alert("측정 길이를 입력하십시오.");
		location.href="safedoor.html";
	}
	else {
		result = parseFloat(data);
		var img_src;
		if (result >= 54 && result <= 64) {
			img_src = "result/54~63-소형.jpg"
		} else if (result >= 64 && result <= 74) {
			img_src = "result/64~74-중형.jpg"
		} else if (result >= 64 && result <= 74) {
			img_src = "result/75~82-대형.jpg"
		} else if (result >= 75 && result <= 82) {
			img_src = "result/75~82.jpg"
		} else if (result >= 83 && result <= 84) {
			img_src = "result/83~84.jpg"
		} else if (result >= 85 && result <= 92) {
			img_src = "result/85~92.jpg"
		} else if (result >= 93 && result <= 97) {
			img_src = "result/93~97.jpg"
		} else if (result >= 98 && result <= 103) {
			img_src = "result/98~103.jpg"
		} else if (result >= 104 && result <= 105) {
			img_src = "result/104~105.jpg"
		} else if (result >= 106 && result <= 112) {
			img_src = "result/106~112.jpg"
		} else if (result >= 113 && result <= 115) {
			img_src = "result/113~115.jpg"
		} else if (result >= 116 && result <= 121) {
			img_src = "result/116~121.jpg"
		} else if (result >= 122 && result <= 127) {
			img_src = "result/122~127.jpg"
		} else if (result >= 128 && result <= 132) {
			img_src = "result/128~132.jpg"
		} else if (result >= 133 && result <= 135) {
			img_src = "result/133~135.jpg"
		} else if (result >= 136 && result <= 142) {
			img_src = "result/136~142.jpg"
		} else if (result >= 143 && result <= 144) {
			img_src = "result/116~121.jpg"
		} else if (result >= 145 && result <= 152) {
			img_src = "result/116~121.jpg"
		} else if (result >= 153 && result <= 157) {
			img_src = "result/116~121.jpg"
		} else if (result >= 158 && result <= 162) {
			img_src = "result/116~121.jpg"
		} else if (result >= 163 && result <= 165) {
			img_src = "result/116~121.jpg"
		} else if (result >= 166 && result <= 172) {
			img_src = "result/116~121.jpg"
		} else if (result >= 173 && result <= 175) {
			img_src = "result/116~121.jpg"
		} else if (result >= 176 && result <= 182) {
			img_src = "result/116~121.jpg"
		} else if (result >= 188 && result <= 192) {
			img_src = "result/116~121.jpg"
		} else if (result >= 193 && result <= 195) {
			img_src = "result/116~121.jpg"
		} else if (result >= 196 && result <= 202) {
			img_src = "result/116~121.jpg"
		} else if (result >= 203 && result <= 205) {
			img_src = "result/116~121.jpg"
		} else if (result >= 206 && result <= 212) {
			img_src = "result/116~121.jpg"
		} else if (result >= 213 && result <= 217) {
			img_src = "result/116~121.jpg"
		} else if (result >= 218 && result <= 222) {
			img_src = "result/116~121.jpg"
		} else if (result >= 223 && result <= 225) {
			img_src = "result/116~121.jpg"
		} else if (result >= 226 && result <= 232) {
			img_src = "result/116~121.jpg"
		} else if (result >= 233 && result <= 237) {
			img_src = "result/116~121.jpg"
		} else {
			img_src = "result/그-외-사이즈.jpg"
		}
	}
	return img_src;
}
