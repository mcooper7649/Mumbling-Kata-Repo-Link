function accum(s) {
	let letters = s.toLowerCase().split('') //create letter var; lowercase; then split each char
  for(let i = 0; i < letters.length; i++) {   //cycle through each index in letters
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)  //Uppercase 1st index of letters + the rest of the index; repeating until loop completes
  }
  return letters.join('-')   //join our Indexes back together with a "-" seperator
  
}

accum('fddasdDDfgdasevadaDFDzhg')
