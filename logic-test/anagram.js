function anagrams(params) {
	let objResult = {};

	params.forEach(function(val) {
		let value = val.split('').sort()

		if (objResult[value]) {
			objResult[value].push(val)
		} else {
			objResult[value] = [val]
		}
	})

    let anagram = [];
	Object.entries(objResult).forEach(function(val) {
		anagram.push(val[1])
	})

    return anagram;
}

let arrs = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

anagrams(arrs)
