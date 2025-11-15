document.getElementById("removebtn").addEventListener("click",()=>{
	const option = document.getElementById("colorSelect");
	if(option.selectedIndex !== -1){
		option.remove(option.selectedIndex);
	}
});