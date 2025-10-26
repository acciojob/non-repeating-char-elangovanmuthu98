function firstNonRepeatedChar(str) {
 // Write your code here
	
	for (let index = 0; index < str.length; index++) {
		let char=str.charAt(index);
		index++;
		if(char==str.charAt(index) && index<str.length)
		{
		while(char==str.charAt(index) && index<str.length){
			index++;
		}
			index--;
			continue;
		}
		return char;

		
	}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
