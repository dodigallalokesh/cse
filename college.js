//const college={ name:"RGUKT-SKLM",year:2016,strength:4000}
//module.exports=college;




class college{
	
	constructor(name,year,strength)
	{
		this.name=name;
		this.year=year;
		this.strength=strength;
	}
	wishes()
	{
		console.log("Name of the college:",this.name);
	}
}
module.exports=college
